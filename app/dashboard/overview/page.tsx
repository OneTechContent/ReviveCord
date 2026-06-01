const userName = "Alex Stone"

function formatDateRange() {
  const endDate = new Date()
  const startDate = new Date(endDate)
  startDate.setDate(endDate.getDate() - 6)

  const formatter = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  return `${formatter.format(startDate)} to ${formatter.format(endDate)}`
}

export default function OverviewPage() {
  const dateRange = formatDateRange()

  return (
    <section className="px-[72px] pt-16">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">
        Welcome back, {userName}!
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        All events and updates for your server from {dateRange}.
      </p>
    </section>
  )
}
