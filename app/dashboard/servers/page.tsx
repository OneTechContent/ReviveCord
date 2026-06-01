import { Add01Icon, Sad01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export default function ServersPage() {
  return (
    <section className="px-[72px] pt-12">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">Servers</h1>
        </div>

        <button
          type="button"
          className="inline-flex h-10 shrink-0 items-center gap-2 rounded-lg bg-[#2f7df6] px-3.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_28px_-22px_rgba(47,125,246,0.95)] transition-colors hover:bg-[#3d8cff]"
        >
          <HugeiconsIcon icon={Add01Icon} size={17} />
          Add new Server
        </button>
      </div>

      <div className="flex min-h-[calc(100vh-16rem)] items-center justify-center">
        <div className="flex max-w-sm flex-col items-center text-center">
          <div className="flex size-16 items-center justify-center rounded-xl bg-[#202020] text-muted-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.055)]">
            <HugeiconsIcon icon={Sad01Icon} size={30} />
          </div>

          <h2 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
            No Servers Yet
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">Add one to continue.</p>

          <button
            type="button"
            className="mt-5 inline-flex h-10 items-center gap-2 rounded-lg bg-[#2f7df6] px-3.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_28px_-22px_rgba(47,125,246,0.95)] transition-colors hover:bg-[#3d8cff]"
          >
            <HugeiconsIcon icon={Add01Icon} size={17} />
            Add new Server
          </button>
        </div>
      </div>
    </section>
  )
}
