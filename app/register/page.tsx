"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { EyeIcon, EyeOffIcon } from "lucide-react"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
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
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">Create Account</h1>
              <p className="mt-1.5 text-sm text-muted-foreground">Please enter your details to get started.</p>
            </div>

            <form className="mt-9 space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="mail@example.com"
                  className="login-input h-10 w-full rounded-lg border-0 bg-black/34 px-3.5 text-sm text-foreground shadow-[inset_0_1px_3px_rgba(0,0,0,0.74)] outline-none placeholder:text-muted-foreground/65"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="••••••••"
                    className="login-input h-10 w-full rounded-lg border-0 bg-black/34 px-3.5 pr-10 text-sm text-foreground shadow-[inset_0_1px_3px_rgba(0,0,0,0.74)] outline-none placeholder:text-muted-foreground/65"
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((current) => !current)}
                    className="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
                  >
                    {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="confirm-password" className="text-sm font-medium text-foreground">
                  Confirm Password <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <input
                    id="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="••••••••"
                    className="login-input h-10 w-full rounded-lg border-0 bg-black/34 px-3.5 pr-10 text-sm text-foreground shadow-[inset_0_1px_3px_rgba(0,0,0,0.74)] outline-none placeholder:text-muted-foreground/65"
                  />
                  <button
                    type="button"
                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                    onClick={() => setShowConfirmPassword((current) => !current)}
                    className="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
                  >
                    {showConfirmPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 h-10 w-full rounded-lg bg-[#e8eef8] text-sm font-semibold text-[#07101a] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_16px_34px_-24px_rgba(232,238,248,0.9)] transition-colors hover:bg-white"
              >
                Register
              </button>
            </form>

            <div className="my-5 flex items-center gap-3 text-xs font-medium text-muted-foreground">
              <div className="h-[2px] flex-1 rounded-full bg-white/10" />
              <span>OR</span>
              <div className="h-[2px] flex-1 rounded-full bg-white/10" />
            </div>

            <div>
              <button
                type="button"
                className="flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-white/[0.11] text-sm font-medium text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_28px_-24px_rgba(0,0,0,0.95)] transition-colors hover:bg-white/[0.16]"
              >
                <Image src="/google-g-tight.png" alt="" width={24} height={24} className="size-6 object-cover object-[center_45%]" />
                Google
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 px-2 pt-3 text-sm text-muted-foreground">
            <span>Already have an account?</span>
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
