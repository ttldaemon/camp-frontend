import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

const inputVariants = cva(
  'w-full font-sans transition-all duration-150 outline-none bg-surface-1 border border-border text-text placeholder:text-text-disabled focus:border-accent focus:ring-2 focus:ring-accent/10 disabled:opacity-40 disabled:cursor-not-allowed',
  {
    variants: {
      size: {
        sm: 'text-[12px] px-3 py-1.5 rounded-sm',
        md: 'text-[13px] px-3 py-2 rounded-md',
        lg: 'text-[14px] px-4 py-2.5 rounded-md',
      },
      state: {
        default: '',
        error:
          'border-danger focus:border-danger focus:ring-danger/15',
        success:
          'border-success focus:border-success focus:ring-success/15',
      },
    },
    defaultVariants: {
      size: 'md',
      state: 'default',
    },
  }
)

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string
  hint?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, size, state, label, hint, error, leftIcon, rightIcon, id, ...props },
    ref
  ) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
    const resolvedState = error ? 'error' : state

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-[12px] font-medium text-text-secondary"
          >
            {label}
          </label>
        )}
        <div className="relative w-full">
          {leftIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted flex items-center">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={inputVariants({
              size,
              state: resolvedState,
              className: [
                leftIcon  ? 'pl-9' : '',
                rightIcon ? 'pr-9' : '',
                className,
              ].join(' '),
            })}
            {...props}
          />
          {rightIcon && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted flex items-center">
              {rightIcon}
            </span>
          )}
        </div>
        {error ? (
          <span className="text-[11px] text-danger">{error}</span>
        ) : hint ? (
          <span className="text-[11px] text-text-muted">{hint}</span>
        ) : null}
      </div>
    )
  }
)

Input.displayName = 'Input'

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    Pick<InputProps, 'label' | 'hint' | 'error'> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, hint, error, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-[12px] font-medium text-text-secondary"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={[
            'w-full text-[13px] px-3 py-2 rounded-md',
            'bg-surface-1 border border-border',
            'text-text placeholder:text-text-disabled',
            'outline-none transition-all duration-150 resize-none',
            'focus:border-accent focus:ring-2 focus:ring-accent/10',
            error ? 'border-danger focus:ring-danger/15' : '',
            className,
          ].join(' ')}
          {...props}
        />
        {error ? (
          <span className="text-[11px] text-danger">{error}</span>
        ) : hint ? (
          <span className="text-[11px] text-text-muted">{hint}</span>
        ) : null}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export { Input, Textarea, inputVariants }
export type { InputProps, TextareaProps }