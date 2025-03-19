import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { JobForm } from "./job-form";
import { Button } from "./ui/button";

export const JobDialog = ({
  form,
  isSubmitting,
  onSubmit,
}: {
  form: any;
  isSubmitting: boolean;
  onSubmit: any;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Cadastrar Nova Vaga</Button>
      </DialogTrigger>
      <DialogContent
        className="max-w-lg"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Cadastrar Nova Vaga</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para cadastrar uma nova vaga de emprego.
          </DialogDescription>
        </DialogHeader>
        <JobForm {...{ form, isSubmitting, onSubmit }} />
      </DialogContent>
    </Dialog>
  );
};
