import { cva, type VariantProps } from 'class-variance-authority'

const avatarVariants = cva(
  'rounded-full flex items-center justify-center font-medium shrink-0 select-none text-white',
  {
    variants: {
      size: {
        xs: 'w-5 h-5 text-[9px]',
        sm: 'w-6 h-6 text-[10px]',
        md: 'w-8 h-8 text-[12px]',
        lg: 'w-10 h-10 text-[14px]',
        xl: 'w-12 h-12 text-[16px]',
      },
    },
    defaultVariants: { size: 'md' },
  }
)

const AVATAR_COLORS = [
  '#FF4D2E', '#5282FF', '#A78BFA',
  '#34D399', '#FFBE32', '#F472B6',
  '#38BDF8', '#FB923C',
]

function getAvatarColor(name: string): string {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length]
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

type PresenceStatus = 'online' | 'away' | 'offline'

const PRESENCE_CLASSES: Record<PresenceStatus, string> = {
  online:  'bg-success',
  away:    'bg-warning',
  offline: 'bg-surface-3',
}

const PRESENCE_SIZE: Record<NonNullable<VariantProps<typeof avatarVariants>['size']>,string> = {
  xs: 'w-1.5 h-1.5',
  sm: 'w-2 h-2',
  md: 'w-2.5 h-2.5',
  lg: 'w-3 h-3',
  xl: 'w-3.5 h-3.5',
}

interface AvatarProps extends VariantProps<typeof avatarVariants> {
  name:       string
  src?:       string
  presence?:  PresenceStatus
  className?: string
}

function Avatar({ name, src, size = 'md', presence, className }: AvatarProps) {
  const color    = getAvatarColor(name)
  const initials = getInitials(name)

  return (
    <div className="relative inline-flex shrink-0">
      {src ? (
        <img
          src={src}
          alt={name}
          className={avatarVariants({ size, className })}
        />
      ) : (
        <div
          className={avatarVariants({ size, className })}
          style={{ background: color }}
          title={name}
          aria-label={name}
        >
          {initials}
        </div>
      )}
      {presence && (
        <span
          className={[
            'absolute bottom-0 right-0 rounded-full border-2 border-background',
            PRESENCE_SIZE[size ?? 'md'],
            PRESENCE_CLASSES[presence],
          ].join(' ')}
          aria-label={`Status: ${presence}`}
        />
      )}
    </div>
  )
}

interface AvatarGroupProps {
  users: { name: string; src?: string }[]
  max?:  number
  size?: VariantProps<typeof avatarVariants>['size']
}

function AvatarGroup({ users, max = 4, size = 'md' }: AvatarGroupProps) {
  const visible  = users.slice(0, max)
  const overflow = users.length - max

  return (
    <div className="flex items-center">
      {visible.map((user, i) => (
        <div
          key={user.name}
          className="relative"
          style={{ marginLeft: i === 0 ? 0 : '-8px', zIndex: visible.length - i }}
        >
          <Avatar
            name={user.name}
            src={user.src}
            size={size}
            className="ring-2 ring-background"
          />
        </div>
      ))}
      {overflow > 0 && (
        <div
          className={[
            avatarVariants({ size }),
            'ring-2 ring-background bg-surface-3 text-text-muted -ml-2',
          ].join(' ')}
          style={{ zIndex: 0 }}
        >
          +{overflow}
        </div>
      )}
    </div>
  )
}

export { Avatar, AvatarGroup, avatarVariants }
export type { AvatarProps, AvatarGroupProps, PresenceStatus }