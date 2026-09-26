import type { ReactNode } from "react"
import { navigate } from "../../app/navigation"
import AppIcon from "./AppIcon"

interface HeadingProps {
  level?: 1 | 2 | 3 | 4
  className?: string
  children: ReactNode
}

export function Heading({
  level = 2,
  className = "",
  children,
}: HeadingProps) {
  const Tag = `h${level}` as "h1"
  return <Tag className={className}>{children}</Tag>
}

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  type?: "button" | "submit"
  variant?: "primary" | "secondary" | "ghost" | "icon"
  className?: string
  ariaLabel?: string
}

export function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  ariaLabel,
}: ButtonProps) {
  const styles = {
    primary: "bg-gold text-black hover:bg-silver border-gold",
    secondary: "bg-transparent text-paper border-line hover:border-silver",
    ghost:
      "bg-transparent text-muted border-transparent hover:text-paper hover:bg-charcoal",
    icon: "bg-charcoal text-paper border-line hover:border-silver",
  }
  return (
    <button
      aria-label={ariaLabel}
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-sm border px-4 py-2.5 text-sm font-semibold tracking-tight transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

interface InputProps {
  label: string
  name: string
  value: string
  onChange: (value: string) => void
  type?: string
  placeholder?: string
}

export function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
}: InputProps) {
  return (
    <label className="grid gap-2 text-sm text-silver">
      <span>{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-sm border border-line bg-black px-3.5 py-3 text-paper outline-none transition placeholder:text-muted focus:border-gold"
      />
    </label>
  )
}

interface TextAreaProps {
  label: string
  name: string
  value: string
  onChange: (value: string) => void
}

export function TextArea({
  label,
  name,
  value,
  onChange,
}: TextAreaProps) {
  return (
    <label className="grid gap-2 text-sm text-silver">
      <span>{label}</span>
      <textarea
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={3}
        className="w-full resize-y rounded-sm border border-line bg-black px-3.5 py-3 text-paper outline-none transition focus:border-gold"
      />
    </label>
  )
}

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="relative max-w-xl">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">
        <AppIcon name="search" />
      </span>
      <label>
        <span className="sr-only">Buscar na biblioteca</span>
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Buscar materiais"
          className="w-full border border-line bg-graphite py-3.5 pl-12 pr-4 text-sm text-paper outline-none placeholder:text-muted focus:border-gold"
        />
      </label>
    </div>
  )
}

interface AppLinkProps {
  to: string
  children: ReactNode
  className?: string
}

export function AppLink({
  to,
  children,
  className = "",
}: AppLinkProps) {
  return (
    <button
      type="button"
      onClick={() => navigate(to)}
      className={`text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${className}`}
    >
      {children}
    </button>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-label text-gold">
      {children}
    </p>
  )
}

interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading
        level={1}
        className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
      >
        {title}
      </Heading>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          {description}
        </p>
      )}
    </div>
  )
}

interface SectionHeaderProps {
  title: string
  action?: ReactNode
}

export function SectionHeader({
  title,
  action,
}: SectionHeaderProps) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <Heading
        level={2}
        className="font-display text-2xl font-semibold tracking-tight md:text-3xl"
      >
        {title}
      </Heading>
      {action}
    </div>
  )
}

export function ProgressBar({ value }: { value: number }) {
  return (
    <div
      className="h-1.5 overflow-hidden rounded-full bg-charcoal"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full bg-gold transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}

interface StatusProps {
  locked?: boolean
  text: string
}

export function Status({ locked = false, text }: StatusProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide ${
        locked ? "text-muted" : "text-gold"
      }`}
    >
      {locked && <AppIcon name="lock" size="sm" />}
      {text}
    </span>
  )
}
