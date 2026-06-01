"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Home01Icon,
  ClipboardListIcon,
  CloudServerIcon,
  Robot01Icon,
  Archive02Icon,
  UserIdVerificationIcon,
  UserGroupIcon,
  CreditCardIcon,
  CodeXmlIcon,
  Setting06Icon,
  Moon02Icon,
  Chatting01Icon,
  LifebuoyIcon,
  Search01Icon,
  CommandIcon,
  UnfoldMoreIcon,
  Link01Icon,
} from "@hugeicons/core-free-icons"

const modules = [
  { label: "Overview", href: "/dashboard/overview", icon: Home01Icon },
  { label: "Stat Reports", href: "/dashboard/stat-reports", icon: ClipboardListIcon },
  { label: "Servers", href: "/dashboard/servers", icon: CloudServerIcon },
  { label: "Bots", href: "/dashboard/bots", icon: Robot01Icon },
  { label: "Backups", href: "/dashboard/backups", icon: Archive02Icon },
  { label: "Members", href: "/dashboard/members", icon: UserIdVerificationIcon },
  { label: "Team Members", href: "/dashboard/team-members", icon: UserGroupIcon },
  { label: "Your Connections", href: "/dashboard/your-connections", icon: Link01Icon },
]

const footerLinks = [
  { label: "Plans & Billing", href: "/dashboard/plans-billing", icon: CreditCardIcon },
  { label: "Support", href: "/dashboard/support", icon: LifebuoyIcon },
]

export function Sidebar() {
  const closeTimerRef = useRef<number | null>(null)
  const pathname = usePathname()
  const [darkMode, setDarkMode] = useState(true)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [userMenuClosing, setUserMenuClosing] = useState(false)
  const [userMenuKey, setUserMenuKey] = useState(0)

  const userMenuItems = [
    { label: "Subscription", icon: CreditCardIcon },
    { label: "Developer", icon: CodeXmlIcon },
    { label: "Site Settings", icon: Setting06Icon },
    { label: "Help Center", icon: Chatting01Icon },
  ]

  const closeUserMenu = () => {
    if (!userMenuOpen || userMenuClosing) {
      return
    }

    setUserMenuClosing(true)
    closeTimerRef.current = window.setTimeout(() => {
      setUserMenuOpen(false)
      setUserMenuClosing(false)
    }, 180)
  }

  const toggleUserMenu = () => {
    if (userMenuOpen) {
      closeUserMenu()
      return
    }

    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }

    setUserMenuClosing(false)
    setUserMenuOpen(true)
    setUserMenuKey((current) => current + 1)
  }

  return (
    <aside className="flex h-full w-[252px] shrink-0 flex-col bg-sidebar px-3 pt-4">
      <div className="flex h-8 items-center gap-2 px-1 pb-6">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.055] text-xs font-semibold text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          R
        </span>
        <span className="text-sm font-semibold tracking-tight text-foreground">ReviveCord</span>
      </div>

      <button
        type="button"
        aria-label="Search"
        className="flex h-10 items-center gap-2 rounded-xl bg-[#202020] px-3 py-2 text-left text-[13px] text-muted-foreground shadow-[inset_0_1px_1px_rgba(0,0,0,0.18),inset_0_0_0_1px_rgba(255,255,255,0.025)] transition-[background-color,color,box-shadow] duration-200 hover:bg-[#242424] hover:text-foreground hover:shadow-[inset_0_1px_1px_rgba(0,0,0,0.14),inset_0_0_0_1px_rgba(255,255,255,0.045)]"
      >
        <HugeiconsIcon icon={Search01Icon} size={15} className="shrink-0" />
        <span className="flex-1">Search</span>
        <kbd className="flex items-center gap-0.5 rounded-md bg-[#151515] px-1.5 py-0.5 text-[0px] font-medium text-muted-foreground">
          <HugeiconsIcon icon={CommandIcon} size={11} />
          <span className="text-[11px]">K</span>
        </kbd>
      </button>

      <div className="h-6" />

      <nav className="flex flex-col gap-1.5">
        {modules.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.label}
              href={item.href}
              className={
                isActive
                  ? "flex items-center gap-2.5 rounded-lg bg-[#262626] px-3 py-2 text-[13px] font-medium text-foreground depth-out"
                  : "flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-[#202020] hover:text-foreground"
              }
            >
              <HugeiconsIcon icon={item.icon} size={17} className="shrink-0" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="flex-1" />

      <div className="-mx-3 mt-4">
        <div className="mx-3 mb-3 rounded-xl bg-[#202020] p-3">
          <p className="text-sm font-semibold tracking-tight text-foreground">Free Plan</p>
          <p className="mt-1 text-xs leading-4 text-muted-foreground">
            Unlock more servers, custom branding, and extra workspace perks.
          </p>
          <button
            type="button"
            className="mt-2.5 h-8 w-full rounded-lg bg-[#2f7df6] text-xs font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_28px_-22px_rgba(47,125,246,0.95)] transition-colors hover:bg-[#3d8cff]"
          >
            Upgrade Plan
          </button>
        </div>

        <div className="flex flex-col gap-0.5 px-3 pb-3">
          {footerLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-[#202020] hover:text-foreground"
            >
              <HugeiconsIcon icon={item.icon} size={17} className="shrink-0" />
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mx-3 h-[2px] rounded-full bg-[#2a2a2a] shadow-[0_1px_0_rgba(255,255,255,0.035)]" />

        <details open={userMenuOpen} className="group/user-menu relative">
          <summary
            aria-controls="user-menu"
            aria-expanded={userMenuOpen && !userMenuClosing}
            className="mx-3 mt-3 flex h-[60px] w-[calc(100%-1.5rem)] cursor-pointer list-none items-center gap-3 rounded-xl px-3 text-left transition-colors hover:bg-[#202020] group-open/user-menu:bg-[#202020] [&::-webkit-details-marker]:hidden"
            onClick={(event) => {
              event.preventDefault()
              toggleUserMenu()
            }}
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full border-0 bg-[#262626] text-foreground shadow-inner outline-none ring-0">
              <span className="text-sm font-semibold">AS</span>
            </div>
            <div className="min-w-0 flex-1 leading-tight">
              <p className="truncate text-sm font-semibold text-foreground">Account</p>
              <p className="truncate text-xs text-muted-foreground">alex@revivecord.io</p>
            </div>
            <HugeiconsIcon icon={UnfoldMoreIcon} size={16} className="shrink-0 text-muted-foreground" />
          </summary>

          <button
            type="button"
            aria-label="Close user menu"
            className="fixed inset-0 z-40 hidden cursor-default bg-transparent group-open/user-menu:block"
            onClick={closeUserMenu}
          />

          <div
            key={userMenuKey}
            id="user-menu"
            role="menu"
            data-state={userMenuClosing ? "closing" : "open"}
            className="user-dropdown-panel absolute bottom-[64px] left-3 right-3 z-50 overflow-hidden rounded-xl bg-[#0d0d0d] backdrop-blur-xl"
          >
            <div className="flex items-center justify-between gap-2 px-2 pb-2 pt-2.5">
              <button
                type="button"
                className="h-8 rounded-md px-3 text-xs font-semibold text-muted-foreground transition-colors hover:bg-[#1a1a1a] hover:text-foreground"
              >
                Feedback
              </button>
              <button
                type="button"
                className="h-8 rounded-md bg-[#242424] px-3 text-xs font-semibold text-foreground shadow-none transition-colors hover:bg-[#2b2b2b]"
              >
                Log out
              </button>
            </div>

            <div className="relative z-10 overflow-hidden rounded-xl bg-[#202020]">
              <div className="p-2">
                <button
                  type="button"
                  className="flex h-9 w-full items-center gap-2.5 rounded-lg px-2.5 text-left text-[13px] font-medium text-muted-foreground transition-colors hover:bg-[#2a2a2a] hover:text-foreground"
                  onClick={() => setDarkMode((current) => !current)}
                >
                  <HugeiconsIcon icon={Moon02Icon} size={16} />
                  <span className="flex-1">Dark Mode</span>
                  <span className="relative flex h-5 w-9 items-center overflow-hidden rounded-full bg-[#343434] p-0.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.58),inset_0_0_0_1px_rgba(255,255,255,0.045)]">
                    <span
                      className={
                        darkMode
                          ? "absolute inset-0 bg-[linear-gradient(135deg,#2f7df6,#69a8ff)] opacity-100 transition-opacity duration-200 ease-out"
                          : "absolute inset-0 bg-[linear-gradient(135deg,#2f7df6,#69a8ff)] opacity-0 transition-opacity duration-200 ease-out"
                      }
                    />
                    <span
                      className={
                        darkMode
                          ? "relative z-10 size-4 translate-x-4 rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.42)] transition-transform duration-200 ease-out"
                          : "relative z-10 size-4 rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.42)] transition-transform duration-200 ease-out"
                      }
                    />
                  </span>
                </button>

                {userMenuItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className="flex h-9 w-full items-center gap-2.5 rounded-lg px-2.5 text-left text-[13px] font-medium text-muted-foreground transition-colors hover:bg-[#2a2a2a] hover:text-foreground"
                  >
                    <HugeiconsIcon icon={item.icon} size={16} />
                    <span className="flex-1">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </details>
      </div>
    </aside>
  )
}
