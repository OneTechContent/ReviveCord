import Link from "next/link"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <Link
        href="/dashboard"
        className="group inline-flex items-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-medium text-foreground depth-out transition-colors hover:bg-accent"
      >
        Visit Dashboard
        <HugeiconsIcon
          icon={ArrowRight01Icon}
          size={18}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </Link>
    </main>
  )
}
