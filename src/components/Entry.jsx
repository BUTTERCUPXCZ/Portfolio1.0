/* Title left, period right, aligned on tabular figures. There is no rule
   between them — the numerals hold the column. */
export default function Entry({ title, meta, subtitle, href, extraLinks, children }) {
  return (
    <article className="type-data">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-medium">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="print-url text-ink underline-offset-4 hover:underline"
            >
              {title} ↗
            </a>
          ) : (
            <span className="text-ink">{title}</span>
          )}
        </h3>
        <span className="tnum shrink-0 text-dim">{meta}</span>
      </div>

      {(subtitle || extraLinks?.length > 0) && (
        <p className="text-dim">
          {subtitle}
          {extraLinks?.map((link) => (
            <span key={link.href}>
              {' · '}
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="print-url underline-offset-4 hover:text-ink hover:underline"
              >
                {link.label}
              </a>
            </span>
          ))}
        </p>
      )}

      {children}
    </article>
  )
}
