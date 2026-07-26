type MonoNightMoonMarkProps = {
  className?: string
  size?: number
}

export function MonoNightMoonMark({
  className,
  size = 24,
}: MonoNightMoonMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      height={size}
      viewBox="0 0 110 110"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M61 5C35 7 15 29 15 55C15 83 38 105 66 105C78 105 90 100 99 91C79 97 59 87 50 68C39 45 45 19 61 5Z"
        fill="currentColor"
      />
    </svg>
  )
}
