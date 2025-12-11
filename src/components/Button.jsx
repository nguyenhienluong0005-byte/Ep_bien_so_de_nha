import { cn } from '../lib/cn'
import { ArrowRight } from 'lucide-react'

export default function Button({ as = 'a', href = '#', children, className, icon = false, ...props }) {
  const Comp = as
  return (
    <Comp
      href={href}
      className={cn(
        'inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-400/50 active:scale-[0.99] dark:border-neutral-800 dark:bg-white dark:text-neutral-900',
        className
      )}
      {...props}
    >
      {children} {icon && <ArrowRight className="h-4 w-4" />}
    </Comp>
  )
}
