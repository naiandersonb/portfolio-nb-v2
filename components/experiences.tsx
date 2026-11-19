"use client"

import {
  SquaresFourIcon,
  UsersThreeIcon,
  VideoIcon,
} from "@phosphor-icons/react"
import { ReactNode } from "react"
import { stacks } from "./stacks-slide"

interface Experience {
  companyName: string
  jobPosition: string
  period: { start: Date; end?: Date }
  description: ReactNode
  stack: string[]
  responsibilities?: () => ReactNode
  meta?: {
    demo?: string
    repo?: string
  }
}
export const Experiences = () => {
  const experiences: Experience[] = [
    {
      companyName: "AcheiConsulta",
      jobPosition: "Sócio & desenvolvedor",
      description: (
        <p className="text-sm">
          SaaS de agenda e agendamento online 24h para profissionais de saúde:
          vitrine profissional, pagamento antecipado das consultas e gestão
          financeira em uma única plataforma.
        </p>
      ),
      period: { start: new Date(2022, 6) },
      stack: ["php", "laravel", "liveware"],
      meta: {
        demo: "https://acheiconsulta.com.br",
      },
    },
    {
      companyName: "TheMembers",
      jobPosition: "Desenvolvedor front-end",
      description: (
        <div>
          <p className="text-sm">
            Manutenção e evolução da dashboard de administração e da plataforma
            white label, garantindo escala para que diversos clientes gerenciem
            conteúdos e dados com eficiência e segurança.
          </p>
        </div>
      ),
      period: { start: new Date(2022, 6) },
      responsibilities: () => {
        const responsibilities = [
          {
            icon: <SquaresFourIcon size={32} />,
            title: "Dashboard admin & white label",
            description:
              "TypeScript e Next.js para vários clientes na mesma base.",
          },
          {
            icon: <UsersThreeIcon size={32} />,
            title: "Comunidade interativa",
            description:
              "Rede social interna com posts multimídia e reações no estilo LinkedIn.",
          },
          {
            icon: <VideoIcon size={32} />,
            title: "Player de vídeo",
            description:
              "Player customizado sobre a Plyr, adaptado ao consumo de aulas.",
          },
          {
            icon: <SquaresFourIcon size={32} />,
            title: "Dashboard de pós-venda",
            description:
              "Fluxos autônomos de reembolso e cancelamento com shadcn/ui.",
          },
        ]
        return (
          <div className="mt-4 flex flex-col gap-4">
            {responsibilities.map((responsibility, index) => (
              <div key={index} className="flex flex-row items-center gap-2">
                <span className="text-chart-3 dark:text-chart-1">
                  {responsibility.icon}
                </span>
                <div>
                  <h5 className="font-bold">{responsibility.title}</h5>
                  <p className="text-sm text-muted-foreground">
                    {responsibility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )
      },
      stack: ["typescript", "react", "nextjs"],
    },
  ]
  return (
    <section className="grid grid-cols-8">
      <span className="col-span-2 text-lg font-bold">
        <span className="text-xs text-chart-3 dark:text-chart-1">01</span>{" "}
        Experiências
      </span>

      <div className="col-span-6 flex flex-col gap-10 py-4">
        {experiences.map((experience) => {
          const expStacks = stacks.filter((stack) =>
            experience.stack.includes(stack.label)
          )
          return (
            <article key={experience.companyName}>
              <div className="flex w-full flex-row items-start gap-2">
                <div className="flex-1">
                  <h4 className="text-2xl">{experience.companyName}</h4>
                  <p className="text-sm text-muted-foreground">
                    {experience.jobPosition}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-chart-3 dark:text-chart-1">
                    {experience.period.start.toLocaleDateString("pt-BR")}
                    {" - "}
                    {experience.period?.end
                      ? experience.period.end.toLocaleDateString("pt-BR")
                      : "presente"}
                  </span>
                </div>
              </div>
              <div className="mt-6">{experience.description}</div>

              <div className="mt-4 flex flex-row items-center gap-2">
                <span className="text-sm text-muted-foreground">Stack:</span>
                <div className="flex flex-row items-center gap-4">
                  {expStacks.map((stack, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center gap-2 text-xs"
                    >
                      <stack.component size={20} />
                      <span className="uppercase">{stack.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {experience?.responsibilities && experience.responsibilities()}
            </article>
          )
        })}
      </div>
    </section>
  )
}
