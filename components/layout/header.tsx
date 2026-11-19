"use client"

import SlideTextButton from "../kokonutui/slide-text-button"
import SwitchButton from "../kokonutui/switch-button"

export const Header = () => {
  return (
    <header className="border-b-divider border-b p-4">
      <div className="mx-auto flex max-w-5xl flex-row items-center justify-between gap-2">
        <h1 className="font-heading font-bold">Naianderson Bruno</h1>

        <nav className="flex flex-row items-center gap-4">
          <div className="font flex flex-row items-center gap-2">
            <span>pt</span>
            <span>/</span>
            <span className="text-muted-foreground">en</span>
          </div>

          <SwitchButton showLabel={false} />
          <SlideTextButton text="Fale comigo" hoverText="Fale comigo" />
        </nav>
      </div>
    </header>
  )
}
