import { classnames } from '@lib';
import Link from './Link';
import Logo from './Logo';

const Footer = ({ className }) => {
  return (
    <section
      className={classnames('w-full bg-black/50 backdrop-blur-2xl z-20', className && className)}
    >
      <div className="max mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 text-white py-6 px-4">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <Logo />
            <p className="w-fit sm:w-80">
              În cazul în care întâmpini orice problemă sau ai nevoie de asistență, suntem pregătiți
              să îți oferim sprijinul necesar.
            </p>
          </div>
          <div className="flex">
            <img className="w-3/4" src="/images/netopia-logo.png" alt="netopia logo" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="underline decoration-primary underline-offset-2 font-bold">Companie</h2>
          <div className="flex flex-col gap-1 items-start">
            <Link href="/despre-noi">
              <p className="hover:text-inherit hover:underline">Despre noi</p>
            </Link>
            <Link href="/contact">
              <p className="hover:text-inherit hover:underline">Contact</p>
            </Link>

            <Link href="/termeni-conditii">
              <p className="hover:text-inherit hover:underline">Termeni și Condiții</p>
            </Link>

            <Link href="/confidentialitate">
              <p className="hover:text-inherit hover:underline">Confidențialitate</p>
            </Link>
            <Link href="/gdpr">
              <p className="hover:text-inherit hover:underline">GDPR</p>
            </Link>
            <Link href="/cookies">
              <p className="hover:text-inherit hover:underline">Politica de cookie-uri</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="underline decoration-primary underline-offset-2 font-bold">
            Link-uri utile
          </h2>
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap gap-2 text-sm">
              <Link href="/">
                <p className="hover:text-inherit hover:underline">Începe acum</p>
              </Link>
              <span>|</span>
              <Link href="https://anpc.ro/">
                <p className="hover:text-inherit hover:underline">ANPC</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-stone-500">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-between max mx-auto p-4 md:py-2 text-white">
          <div className="flex flex-col">
            <strong className="text-sm">
              Copyright @ {new Date().getFullYear()} The server of the universe
            </strong>
          </div>
          <div className="flex gap-2">
            <Link href="https://anpc.ro/ce-este-sal/">
              <p className="hover:text-inherit hover:underline">
                <img className="w-36" src="/images/sal.svg" alt="netopia logo" />
              </p>
            </Link>
            <Link href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO">
              <p className="hover:text-inherit hover:underline">
                <img className="w-36" src="/images/sol.svg" alt="netopia logo" />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
