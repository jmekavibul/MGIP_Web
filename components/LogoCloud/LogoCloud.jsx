import { clsx } from 'clsx'

export function LogoCloud({ className }) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
      )}
    >
      <img
        alt="Patent"
        src="../../pictures/patent.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      ></img>
              <img
        alt="Copyright"
        src="../../pictures/copyright.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="TradeMark"
        src="../../pictures/TradeMark.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
    </div>
  )
}
