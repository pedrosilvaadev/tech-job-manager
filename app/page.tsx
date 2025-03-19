"use client";

import { JobDialog } from "@/components/job-dialog";
import { JobList } from "@/components/job-list";
import { useJobs } from "@/hooks/use-jobs";

export default function Home() {
  const {
    error,
    loading,
    jobs,
    form,
    isSubmitting,
    onSubmit,
    handleDelete,
    loadingDelete,
  } = useJobs();

  return (
    <main className="container mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-center">Gerenciador de Vagas</h1>
        <JobDialog {...{ form, isSubmitting, onSubmit }} />
      </div>

      <JobList
        {...{
          error,
          loading,
          jobs,
          handleDelete,
          loadingDelete,
        }}
      />
    </main>
  );
}
