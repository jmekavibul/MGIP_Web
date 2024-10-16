import { Gradient } from '../Gradient/Gradient';
import { Container } from '../Container/Container';
import { Button } from '../Button/Button';
import { NavBar } from '../NavBar/NavBar';
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { Link } from '../Link/Link';
export default function Hero() {
    return (
      <div className="relative">
        <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
        <Container className="relative">
        <NavBar
          banner={
            <Link
              href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-[hover]:bg-fuchsia-950/30"
            >
              Read our blog
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
            
          <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
            <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-7.5xl/[0.8]">
              MUNCY, GEISSLER OLDS & LOWE, P.C.
            </h1>
            <p className="mt-8 max-w-xl	 text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Intellectual Property Firm in Washington D.C. Metro Area. Specialize in Engineering, Science, and Law.
            </p>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button >Learn more</Button>

            </div>
          </div>
        </Container>
      </div>
    )
  }