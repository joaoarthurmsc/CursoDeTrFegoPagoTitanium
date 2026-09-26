import type { ReactNode } from "react"
import AppIcon from "./AppIcon"

export function HomeHeading({
  level = 2,
  className = "",
  children,
}: {
  level?: 1 | 2 | 3
  className?: string
  children: ReactNode
}) {
  const Tag = `h${level}` as "h1"
  return <Tag className={className}>{children}</Tag>
}

export function ArrowIcon({ className = "size-5" }: { className?: string }) {
  return <AppIcon name="arrow" className={className} />
}

export function LockIcon() {
  return <AppIcon name="lock" size="sm" />
}

export function CheckIcon() {
  return <AppIcon name="check" size="sm" strokeWidth={1.8} />
}

export function HomeLink({
  to,
  onNavigate,
  className = "",
  children,
  disabled = false,
}: {
  to: string
  onNavigate: (path: string) => void
  className?: string
  children: ReactNode
  disabled?: boolean
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => !disabled && onNavigate(to)}
      className={`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-default ${className}`}
    >
      {children}
    </button>
  )
}

export function ActionButton({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  type = "button",
  className = "",
  ariaExpanded,
  ariaControls,
  ariaPressed,
  ariaLabel,
}: {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  variant?: "primary" | "secondary" | "quiet"
  type?: "button" | "submit"
  className?: string
  ariaExpanded?: boolean
  ariaControls?: string
  ariaPressed?: boolean
  ariaLabel?: string
}) {
  const variants = {
    primary:
      "border-gold bg-gold text-black hover:border-silver hover:bg-silver",
    secondary: "border-line bg-transparent text-paper hover:border-silver",
    quiet: "border-transparent bg-transparent text-muted hover:text-paper",
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      aria-pressed={ariaPressed}
      aria-label={ariaLabel}
      className={`inline-flex min-h-control items-center justify-center gap-2 border px-5 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:border-line disabled:bg-charcoal disabled:text-muted ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

export function StageMarkerButton({
  active,
  completed,
  disabled,
  label,
  onClick,
}: {
  active: boolean
  completed: boolean
  disabled: boolean
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-label={label}
      className={`h-1.5 flex-1 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
        active ? "bg-gold" : completed ? "bg-silver" : "bg-charcoal"
      }`}
    />
  )
}

export function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
}) {
  return (
    <label className="grid gap-2 text-sm text-silver">
      <span>{label}</span>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        rows={4}
        className="w-full resize-y border border-line bg-black px-4 py-3 text-paper outline-none transition placeholder:text-muted focus:border-gold"
      />
    </label>
  )
}

export function ProgressBar({
  value,
  className = "",
}: {
  value: number
  className?: string
}) {
  return (
    <div
      className={`h-1 overflow-hidden bg-paper/15 ${className}`}
      role="progressbar"
      aria-label={`${value}% concluído`}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-gold transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}
