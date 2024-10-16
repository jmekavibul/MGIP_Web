
import { clsx } from 'clsx'

export function Gradient({ className, ...props }) {
  return (
    
    <div>    
        <div
            {...props}
            className={clsx(
            className,
            'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#589A93] from-[13%] via-[#577C8E] via-[50%] to-[#2F4157] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]',
            )}
        />
    </div>

  )
}

export function GradientBackground() {
    return (
      <div className="relative mx-auto max-w-7xl">
        <div
          className={clsx(
            'absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0',
            'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#6EE7B7] from-[28%] via-[#3B82F6] via-[70%] to-[#1E3A8A]',
            'rotate-[-10deg] rounded-full blur-3xl',
          )}
        />
      </div>
    )
  }