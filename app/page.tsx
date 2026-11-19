import { Experiences } from "@/components/experiences"
import { StacksSlide } from "@/components/stacks-slide"

export default function Page() {
  return (
    <div className="mx-auto flex min-h-svh max-w-5xl flex-col gap-6 p-6 py-10">
      <span className="text-xs text-chart-3 uppercase dark:text-chart-1">
        Caxias, MA · remoto
      </span>
      <h1 className="max-w-[80%] font-heading text-5xl font-bold">
        Desenvolvedor web, com 4 anos de experiência criando interfaces com{" "}
        <span className="text-muted-foreground">
          React, Next.js e TypeScript.{" "}
        </span>
      </h1>

      <StacksSlide />

      <Experiences />
    </div>
  )
}
