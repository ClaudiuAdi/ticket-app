import React from 'react';
import { useRouter } from 'next/router';
import Logo from './Logo';
import Link from './Link';
import { useDisclosure } from '../hooks';
import { classnames } from '../lib';

const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  const { isOpen, toggle } = useDisclosure();

  return (
    <div className="w-full bg-black/20 backdrop-blur-md z-20 md:py-6 py-5 px-4 font-universe">
      <div className="md:hidden block">
        <Logo />
      </div>
      <div onClick={toggle} className="absolute right-5 top-5 cursor-pointer md:hidden z-40">
        <i
          className={classnames(
            'text-white',
            isOpen ? 'fa-solid fa-xmark text-2xl' : 'fa-solid fa-bars text-xl'
          )}
        ></i>
      </div>
      <ul className={classnames('nav-ul md:hidden', isOpen ? 'opacity-100' : 'top-[-650px]')}>
        <Link
          className="flex items-center gap-4 hover:text-white md:p-0 py-7 px-4 w-full bg-black/50 md:bg-transparent"
          href="/acasa"
        >
          <i className="fa-solid fa-house"></i>
          <p>Acasă</p>
        </Link>
        <Link
          className="flex items-center gap-4 hover:text-white md:p-0 py-7 px-4 w-full bg-black/50 "
          href="/darul-universului"
        >
          <i className="fa-solid fa-gem"></i>
          <p>Darul universului</p>
        </Link>
        <Link
          className="flex items-center gap-4 hover:text-white md:p-0 py-7 px-4 w-full bg-black/50 "
          href="/formula-magica"
        >
          <i className="fa-solid fa-om"></i>
          <p>Formula magică</p>
        </Link>
        <Link
          className="flex items-center gap-4 hover:text-white md:p-0 py-7 px-4 w-full bg-black/50 "
          href="/testimoniale"
        >
          <i className="fa-solid fa-quote-right"></i>
          <p>Testimoniale</p>
        </Link>
        <Link
          className="flex items-center gap-4 hover:text-white md:p-0 py-7 px-4 w-full bg-black/50 "
          href="/despre-noi"
        >
          <i className="fa-solid fa-people-group"></i>
          <p>Despre Noi</p>
        </Link>
        <Link
          className="flex items-center gap-4 hover:text-white md:p-0 py-7 px-4 w-full bg-black/50 "
          href="/contact"
        >
          <i className="fa-solid fa-envelope"></i>
          <p>Contact</p>
        </Link>
      </ul>
      <div className="max hidden md:flex items-center justify-around font-universe text-sm lg:text-base">
        <div className="flex gap-10 tracking-wider font-bold">
          <Link className="text-stone-300 text-universe" href="/acasa">
            <p
              className={classnames(
                'text-stone-300 hover:text-white',
                pathname === '/acasa' && 'text-white'
              )}
            >
              Acasă
            </p>
          </Link>
          <Link href="/darul-universului" className="text-stone-300">
            <p
              className={classnames(
                'text-stone-300 hover:text-white',
                pathname === '/darul-universului' && 'text-white'
              )}
            >
              Darul universului
            </p>
          </Link>
          <Link href="/formula-magica" className="text-stone-300 hidden lg:inline-block">
            <p
              className={classnames(
                'text-stone-300 hover:text-white',
                pathname === '/formula-magica' && 'text-white'
              )}
            >
              Formula magică
            </p>
          </Link>
        </div>
        <Logo />
        <div className="flex items-center gap-10 tracking-wider font-bold font-universe">
          <Link href="/testimoniale" className="text-stone-300 hidden lg:inline-block">
            <p
              className={classnames(
                'text-stone-300 hover:text-white',
                pathname === '/testimoniale' && 'text-white'
              )}
            >
              Testimoniale
            </p>
          </Link>
          <Link href="/despre-noi" className="text-stone-300">
            <p
              className={classnames(
                'text-stone-300 hover:text-white',
                pathname === '/despre-noi' && 'text-white'
              )}
            >
              Despre Noi
            </p>
          </Link>
          <Link href="/contact" className="text-stone-300">
            <p
              className={classnames(
                'text-stone-300 hover:text-white',
                pathname === '/contact' && 'text-white'
              )}
            >
              Contact
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
