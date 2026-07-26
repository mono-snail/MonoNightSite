type PhoneFrameProps = {
  src: string
  alt: string
  priority?: boolean
  className?: string
}

export function PhoneFrame({
  src,
  alt,
  priority = false,
  className = '',
}: PhoneFrameProps) {
  return (
    <figure className={`phone-frame ${className}`}>
      <img
        src={src}
        alt={alt}
        width="1206"
        height="2622"
        loading={priority ? 'eager' : 'lazy'}
      />
    </figure>
  )
}
