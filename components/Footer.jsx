import { classnames } from '@lib';
import Logo from './Logo';

const Footer = ({ className }) => {
  return (
    <section
      className={classnames('w-full bg-primary backdrop-blur-2xl z-20', className && className)}
    >
      <div className="max mx-auto gap-4 text-white py-6 px-4 flex justify-center">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col items-center gap-2">
            <Logo />
            <p className="w-fit text-center">
              În cazul în care întâmpini orice problemă sau ai nevoie de asistență, suntem pregătiți
              să îți oferim sprijinul necesar.
            </p>
            <div className="flex flex-col items-center justify-center">
              <p className="font-semibold">Nr. telefon</p>
              <p>0755176277</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-semibold">Email</p>
              <p>comorasu.claudiuadrian@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-stone-500">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center max mx-auto p-4 md:py-2 text-white">
          <div className="flex flex-col">
            <strong className="text-sm">Copyright @ {new Date().getFullYear()} PsyChat</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
