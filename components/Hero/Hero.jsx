import { Gradient } from '../Gradient/Gradient';
import { Container } from '../Container/Container';
import { Button } from '../Button/Button';
import { FadeIn } from '../FadeIn';

export default function Hero({ onLearnMoreClick }) {
  return (
    <div className="relative mt-28 pb-10 md:mt-32 md:ml-6 md:mr-6 lg:mt-32 lg:ml-8 lg:mr-8">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset" />
      <Container className="relative">
        <div className="pb-24 pt-40 sm:pb-32 sm:pt-48 md:pb-36 md:pt-26">
          <FadeIn>
            <h1 className="font-display text-balance text-6xl/[0.9] font-semibold tracking-tight text-white sm:text-8xl/[0.8] md:text-7.5xl/[0.8]">
              MUNCY, GEISSLER OLDS & LOWE, P.C.
            </h1>
            <p className="mt-8 max-w-xl text-xl/7 font-medium text-white sm:text-2xl/8">
              Intellectual Property Firm in Washington D.C. Metro Area. Specialize in Engineering, Science, and Law.
            </p>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <Button onClick={onLearnMoreClick}>Learn more</Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
}
