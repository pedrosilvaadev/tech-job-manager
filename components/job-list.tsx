"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Building,
  Calendar,
  Crown,
  ExternalLink,
  Trash2,
} from "lucide-react";
import { Job } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import Loading from "./loading";
export function JobList({
  error,
  loading,
  jobs,
  handleDelete,
  loadingDelete,
}: {
  error: string | null;
  loading: boolean;
  jobs: Job[];
  handleDelete: (jobId: number) => Promise<void>;
  loadingDelete: boolean;
}) {
  if (loading) {
    return <div className="text-center py-10">Carregando vagas...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  if (jobs.length === 0) {
    return <div className="text-center py-10">Nenhuma vaga encontrada.</div>;
  }

  return (
    <>
      {loadingDelete && <Loading />}

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">Vagas Disponíveis</h2>
        <div className="grid grid-cols-1 gap-6">
          {jobs.map((job) => {
            const isNew =
              new Date(job.created_at) >=
              new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
            return (
              <Card key={job.id} className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold uppercase">
                          {job.title}
                        </h3>
                        {isNew && <Badge className="bg-green-500">New</Badge>}
                      </div>
                      <div className="flex items-center text-muted-foreground mt-2">
                        <Building className="h-4 w-4 mr-1" />
                        <span className="mr-4 uppercase">{job.company}</span>
                        <Briefcase className="h-4 w-4 mr-1" />
                        <span className="mr-4 uppercase">{job.area}</span>
                        <Crown className="h-4 w-4 mr-1" />
                        <span className="uppercase">{job.seniority}</span>
                        <Button variant="outline" className="ml-4" asChild>
                          <a
                            href={job.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Ver Vaga <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <div className="w-44 flex flex-col">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <time dateTime={job.created_at}>
                          {formatDistanceToNow(new Date(job.created_at), {
                            addSuffix: true,
                            locale: ptBR,
                          })}
                        </time>
                      </div>
                      <Button
                        variant="destructive"
                        className="mt-4"
                        onClick={() => handleDelete(Number(job.id))}
                        disabled={loadingDelete}
                      >
                        Excluir <Trash2 className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
