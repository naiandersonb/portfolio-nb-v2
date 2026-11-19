import { Stacks } from "@/components/icons"
import { ReactNode } from "react"

export default function Page() {
  const stacks: { label: string; component: ReactNode }[] = [
    { label: "Typescript", component: Stacks.Typescript },
    { label: "Laravel", component: Stacks.Laravel },
    { label: "Livewire", component: Stacks.Livewire },
    { label: "NextJs", component: Stacks.NextJs },
    { label: "php", component: Stacks.PHP },
    { label: "React", component: Stacks.ReactJs },
    { label: "Tailwind", component: Stacks.TailwindCSS },
  ]
  return (
    <div className="mx-auto flex min-h-svh max-w-5xl flex-col gap-6 p-6 py-10">
      <span className="text-[12px] text-chart-1 uppercase">
        Caxias, MA · remoto
      </span>
      <h1 className="max-w-[80%] font-heading text-5xl font-bold">
        Desenvolvedor web, com 4 anos de experiência criando interfaces com{" "}
        <span className="text-muted-foreground">
          React, Next.js e TypeScript.{" "}
        </span>
      </h1>

      <div className="w-full">
        <span></span>
        <section className="flex w-full flex-row items-center justify-baseline gap-4">
          {stacks.map((stack, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-2 text-xs text-muted-foreground"
            >
              {stack.component}
              <span className="uppercase">{stack.label}</span>
            </div>
          ))}
        </section>
        <span></span>
      </div>
    </div>
  )
}
