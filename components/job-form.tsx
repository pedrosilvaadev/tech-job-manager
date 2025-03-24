"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const jobAreas = [
  "Frontend",
  "Backend",
  "Full Stack",
  "DevOps",
  "Data Science",
  "Mobile",
  "UI/UX",
  "QA",
  "Security",
];

const seniorityLevels = ["Estágio", "Júnior", "Pleno", "Sênior", "Tech Lead"];
const workMods = ["Remoto", "Presencial", "Hibrido"];

export function JobForm({
  form,
  isSubmitting,
  onSubmit,
}: {
  form: any;
  isSubmitting: boolean;
  onSubmit: any;
}) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título da Vaga</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ex: Desenvolvedor React Senior"
                  {...field}
                />
              </FormControl>
              <FormDescription>Digite o título oferecida.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="area"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Área</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma área" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {jobAreas.map((area) => (
                      <SelectItem key={area} value={area}>
                        {area}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>Selecione a área.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="seniority"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senioridade</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a senioridade" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {seniorityLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Selecione o nível de senioridade.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="workMod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Modo de Trabalho</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o modo de trabalho" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {workMods.map((work) => (
                    <SelectItem key={work} value={work}>
                      {work}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Selecione o modo de trabalho da vaga.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Empresa</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Tech Solutions Inc." {...field} />
              </FormControl>
              <FormDescription>Digite o nome da empresa.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Link da Vaga</FormLabel>
              <FormControl>
                <Input placeholder="https://exemplo.com/vaga" {...field} />
              </FormControl>
              <FormDescription>Insira o link.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Cadastrando..." : "Cadastrar Vaga"}
        </Button>
      </form>
    </Form>
  );
}
