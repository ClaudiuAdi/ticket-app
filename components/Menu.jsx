import useSwipeable from '@hooks/use-swipeable';
import { Logo, Pages, Profile } from '.';

const Menu = () => {
  const { inputRef, navRef, onTouchStart, onTouchMove, onTouchEnd } = useSwipeable();
  return (
    <>
      <input
        type="checkbox"
        id="menu"
        className="hidden"
        aria-label="Menu open/close"
        ref={inputRef}
      />
      <label
        htmlFor="menu"
        aria-label="Menu open/close"
        className="backdrop bg-gray-300 fixed md:hidden h-screen w-screen inset-0"
      />
      <nav
        className="nav-menu md:w-full bg-indigo-600"
        ref={navRef}
        onTouchStart={(e) => onTouchStart(e.touches[0].clientX)}
        onTouchMove={(e) => onTouchMove(e.touches[0].clientX)}
        onTouchEnd={onTouchEnd}
      >
        <div className="max p-4 md:px-8 md:flex-row flex flex-col items-start md:justify-between gap-4">
          <div className="flex flex-col w-full md:w-auto md:flex-row gap-4">
            <div className="flex items-center md:mr-10 mb-6 md:mb-0">
              <Logo
                logoSize="text-sm md:text-lg text-center"
                classNames={'md:hidden'}
                href={'/admin'}
              />
              <i className="text-2xl text-indigo-200 fa-brands fa-servicestack hidden md:inline"></i>
            </div>
            <Pages />
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Profile />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
