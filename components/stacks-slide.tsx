import { Stacks } from "./icons"
import { InfiniteSlider } from "./motion-primitives/infinite-slider"

export const stacks = [
  { label: "typescript", component: Stacks.Typescript },
  { label: "laravel", component: Stacks.Laravel },
  { label: "livewire", component: Stacks.Livewire },
  { label: "nextJs", component: Stacks.NextJs },
  { label: "php", component: Stacks.PHP },
  { label: "react", component: Stacks.ReactJs },
  { label: "tailwind", component: Stacks.TailwindCSS },
]

export const StacksSlide = () => {
  return (
    <div className="relative my-8 flex w-full flex-row items-center gap-4 overflow-hidden border-t border-b py-4">
      <span className="font-bold text-chart-3 dark:text-chart-1">{"//"}</span>
      <InfiniteSlider className="flex h-full w-full items-center">
        {stacks.map((stack, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-2 text-2xl text-muted-foreground"
          >
            <stack.component />
            <span className="uppercase">{stack.label}</span>
          </div>
        ))}
      </InfiniteSlider>
      <span className="font-bold text-chart-3 dark:text-chart-1">{"//"}</span>
    </div>
  )
}
