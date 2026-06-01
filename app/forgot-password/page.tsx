"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export default function ForgotPasswordPage() {
  const year = new Date().getFullYear()

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#03070d] px-6 py-10">
      <Image src="/login-bg.png" alt="" fill priority className="object-cover object-center opacity-90" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.64),rgba(0,0,0,0.2)_48%,rgba(0,0,0,0.48))]" />

      <div className="relative w-full max-w-[430px]">
        <section className="rounded-xl bg-[#1d2430]/38 p-3 shadow-[0_30px_110px_-48px_rgba(0,0,0,0.98)] backdrop-blur-2xl">
          <div className="rounded-lg bg-[#07101a]/62 px-6 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.045)]">
            <div className="flex size-12 items-center justify-center rounded-lg bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />

            <div className="mt-8 text-left">
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">Reset Password</h1>
              <p className="mt-1.5 text-sm text-muted-foreground">Enter your email and we&apos;ll send a reset link.</p>
            </div>

            <form className="mt-9 space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email/Username <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="mail@example.com"
                  className="login-input h-10 w-full rounded-lg border-0 bg-black/34 px-3.5 text-sm text-foreground shadow-[inset_0_1px_3px_rgba(0,0,0,0.74)] outline-none placeholder:text-muted-foreground/65"
                />
              </div>

              <button
                type="submit"
                className="h-10 w-full rounded-lg bg-[#e8eef8] text-sm font-semibold text-[#07101a] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_16px_34px_-24px_rgba(232,238,248,0.9)] transition-colors hover:bg-white"
              >
                Send Reset Link
              </button>
            </form>
          </div>

          <div className="flex items-center justify-between gap-4 px-2 pt-3 text-sm text-muted-foreground">
            <span>Remembered it?</span>
            <Link href="/login" className="inline-flex items-center gap-0.5 font-semibold text-foreground transition-colors hover:text-white">
              Sign In
              <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} strokeWidth={2} />
            </Link>
          </div>
        </section>

        <p className="mt-7 text-center text-xs font-medium text-white/55">
          &copy; ReviveCord {year}. All Rights Reserved.
        </p>
      </div>
    </main>
  )
}
