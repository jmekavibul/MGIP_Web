import { Gradient } from '../Gradient/Gradient';
import { Container } from '../Container/Container';
import { Button } from '../Button/Button';
export default function Hero() {
    return (
      <div className="relative mt-28 pb-24 ml-4 mr-4">
        <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset " />
        <Container className="relative">

            
          <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
            <h1 className="font-display text-balance text-6xl/[0.9] font-semibold tracking-tight text-white sm:text-8xl/[0.8] md:text-7.5xl/[0.8]">
              MUNCY, GEISSLER OLDS & LOWE, P.C.
            </h1>
            <p className="mt-8 max-w-xl	 text-xl/7 font-medium text-white sm:text-2xl/8">
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