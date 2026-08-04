import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva(
  'inline-flex items-center font-medium rounded-xs transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-surface-3 text-text-secondary border border-border',
        accent:  'bg-accent/15 text-accent-soft',
        danger:  'bg-danger/15 text-danger',
        warning: 'bg-warning/12 text-warning',
        success: 'bg-success/12 text-success',
        info:    'bg-info/12 text-info',
        purple:  'bg-purple/12 text-purple',
      },
      size: {
        sm: 'text-[10px] px-1.5 py-0.5',
        md: 'text-[11px] px-2 py-0.5',
        lg: 'text-[12px] px-2.5 py-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

const STATUS_VARIANT = {
  todo:          'default',
  'in progress': 'info',
  review:        'warning',
  done:          'success',
  blocked:       'danger',
} as const

const PRIORITY_VARIANT = {
  low:      'success',
  medium:   'warning',
  high:     'danger',
  critical: 'accent',
} as const

type StatusKey   = keyof typeof STATUS_VARIANT
type PriorityKey = keyof typeof PRIORITY_VARIANT

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  status?:   StatusKey
  priority?: PriorityKey
}

function Badge({ className, variant, size, status, priority, children, ...props }: BadgeProps) {
  const resolvedVariant =
    (status   && STATUS_VARIANT[status])   ||
    (priority && PRIORITY_VARIANT[priority]) ||
    variant

  const resolvedLabel =
    status   ? status   :
    priority ? priority :
    children

  return (
    <span
      className={badgeVariants({
        variant: resolvedVariant as VariantProps<typeof badgeVariants>['variant'],
        size,
        className,
      })}
      {...props}
    >
      {resolvedLabel}
    </span>
  )
}

export { Badge, badgeVariants }
export type { BadgeProps, StatusKey, PriorityKey }