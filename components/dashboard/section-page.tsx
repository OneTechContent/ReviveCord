type SectionPageProps = {
  description: string
  title: string
}

export function SectionPage({ description, title }: SectionPageProps) {
  return (
    <section className="px-[72px] pt-12">
      <div className="rounded-xl bg-[#202020] p-5">
        <p className="text-xs font-medium uppercase text-muted-foreground">Dashboard</p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground">{title}</h2>
        <p className="mt-1.5 max-w-2xl text-sm leading-6 text-muted-foreground">{description}</p>
      </div>
    </section>
  )
}
