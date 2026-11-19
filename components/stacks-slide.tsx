import { ReactNode } from "react"
import { Stacks } from "./icons"
import { InfiniteSlider } from "./motion-primitives/infinite-slider"

interface StacksList {
  label: string
  component: ReactNode
}

export const StacksSlide = () => {
  const stacks: StacksList[] = [
    { label: "Typescript", component: Stacks.Typescript },
    { label: "Laravel", component: Stacks.Laravel },
    { label: "Livewire", component: Stacks.Livewire },
    { label: "NextJs", component: Stacks.NextJs },
    { label: "php", component: Stacks.PHP },
    { label: "React", component: Stacks.ReactJs },
    { label: "Tailwind", component: Stacks.TailwindCSS },
  ]

  return (
    <div className="relative my-8 flex w-full flex-row items-center gap-4 overflow-hidden border-t border-b py-4">
      <span className="font-bold text-chart-3 dark:text-chart-1">{"//"}</span>
      <InfiniteSlider className="flex h-full w-full items-center">
        {stacks.map((stack, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-2 text-2xl text-muted-foreground"
          >
            <span>{stack.component}</span>
            <span className="uppercase">{stack.label}</span>
          </div>
        ))}
      </InfiniteSlider>
      <span className="font-bold text-chart-3 dark:text-chart-1">{"//"}</span>
    </div>
  )
}
