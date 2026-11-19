import { ReactNode } from "react"

interface Experience {
  companyName: string
  jobPosition: string
  period: { start: Date; end?: Date }
  description: ReactNode
  stack: string[]
  meta?: {
    demo?: string
    repo?: string
  }
}
export const Experiences = () => {
  const experiences: Experience[] = [
    {
      companyName: "acheiConsulta",
      jobPosition: "Sócio & desenvolvedor",
      description: (
        <p>
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
          <p>
            Manutenção e evolução da dashboard de administração e da plataforma
            white label, garantindo escala para que diversos clientes gerenciem
            conteúdos e dados com eficiência e segurança.
          </p>
        </div>
      ),
      period: { start: new Date(2022, 6) },
      stack: ["typescript", "react", "nextjs"],
    },
  ]
  return (
    <section className="grid grid-cols-8">
      <span className="col-span-2 text-lg font-bold">
        <span className="text-xs text-chart-3 dark:text-chart-1">01</span>{" "}
        Experiências
      </span>

      <div className="col-span-6 py-4"></div>
    </section>
  )
}
