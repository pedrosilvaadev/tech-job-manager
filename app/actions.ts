"use server";

import { supabase } from "@/lib/supabase";

export type JobFormData = {
  title: string;
  area: string;
  company: string;
  link: string;
  seniority: string;
};

export async function createJob(formData: JobFormData) {
  try {
    const { data, error } = await supabase
      .from("tech_jobs")
      .insert([
        {
          title: formData.title.toUpperCase(),
          area: formData.area,
          company: formData.company.toUpperCase(),
          link: formData.link,
          seniority: formData.seniority,
        },
      ])
      .select();

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error creating job:", error);
    return { success: false, error: "Failed to create job" };
  }
}

export async function getJobs() {
  try {
    const { data, error } = await supabase
      .from("tech_jobs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return { success: false, error: "Failed to fetch jobs" };
  }
}

export async function deleteJob(jobId: number) {
  try {
    const { error } = await supabase.from("tech_jobs").delete().eq("id", jobId);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Error deleting job:", error);
    return { success: false, error: "Failed to delete job" };
  }
}
