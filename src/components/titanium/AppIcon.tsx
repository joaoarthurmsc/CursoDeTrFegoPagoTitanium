import type { ReactNode } from "react"

export type AppIconName =
  | "arrow"
  | "lock"
  | "search"
  | "close"
  | "plus"
  | "check"

const paths: Record<AppIconName, ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14M14 7l5 5-5 5" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10" width="14" height="11" rx="1" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 5 5" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12M18 6 6 18" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  check: <path d="m5 12 4 4L19 6" />,
}

interface AppIconProps {
  name: AppIconName
  size?: "sm" | "md" | "lg"
  className?: string
  strokeWidth?: number
}

export default function AppIcon({
  name,
  size = "md",
  className,
  strokeWidth = 1.6,
}: AppIconProps) {
  return (
    <svg
      className={
        className ??
        (size === "sm" ? "size-4" : size === "lg" ? "size-6" : "size-5")
      }
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
