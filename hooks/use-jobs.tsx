import { createJob, deleteJob, getJobs, JobFormData } from "@/app/actions";
import { Job } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { useToast } from "./use-toast";

const formSchema = z.object({
  title: z.string().min(3, {
    message: "O título deve ter pelo menos 3 caracteres.",
  }),
  area: z.string({
    required_error: "Por favor selecione uma área.",
  }),
  company: z.string().min(2, {
    message: "O nome da empresa deve ter pelo menos 2 caracteres.",
  }),
  link: z.string().url({
    message: "Por favor insira uma URL válida.",
  }),
  seniority: z.string({
    required_error: "Por favor selecione um nível de senioridade.",
  }),
});

export const useJobs = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      area: "Frontend",
      company: "",
      link: "",
      seniority: "Estágio",
    },
  });
  async function loadJobs() {
    try {
      const result = await getJobs();
      if (result.success) {
        setJobs(result.data || []);
      } else {
        setError(result.error || "Erro ao carregar vagas");
      }
    } catch (err) {
      setError("Erro ao carregar vagas");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadJobs();
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const result = await createJob(values as JobFormData);

      if (result.success) {
        toast({
          title: "Vaga cadastrada com sucesso!",
          description: "A vaga foi adicionada ao banco de dados.",
        });
        form.reset({
          title: "",
          area: "Frontend",
          company: "",
          link: "",
          seniority: "Estágio",
        });
        loadJobs();
      } else {
        toast({
          variant: "destructive",
          title: "Erro ao cadastrar vaga",
          description: result.error || "Ocorreu um erro ao cadastrar a vaga.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao cadastrar vaga",
        description: "Ocorreu um erro ao cadastrar a vaga.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleDelete = async (jobId: number) => {
    try {
      setLoadingDelete(true);
      const result = await deleteJob(jobId);
      if (result.success) {
        toast({
          title: "Vaga deletada com sucesso!",
          description: "A vaga foi removida do banco de dados.",
        });
        loadJobs();
      } else {
        toast({
          variant: "destructive",
          title: "Erro ao deletar vaga",
          description: result.error || "Ocorreu um erro ao deletar a vaga.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao deletar vaga",
        description: "Ocorreu um erro ao deletar a vaga.",
      });
    } finally {
      setLoadingDelete(false);
    }
  };

  return {
    jobs,
    loading,
    error,
    form,
    onSubmit,
    isSubmitting,
    loadJobs,
    handleDelete,
    loadingDelete,
  };
};
