import logout from '@api/logout';
import { MenuItem } from '.';

const Pages = () => {
  return (
    <>
      <MenuItem href="/admin" level="1">
        <i className="fas fa-tachometer-alt mr-2 md:hidden" />
        Dashboard
      </MenuItem>
      <MenuItem href="/admin/tickets/view-tickets" level="1">
        <i className="fa-solid fa-ticket mr-2 md:hidden" />
        Tichete
      </MenuItem>
      <MenuItem href="/admin/team" level="1">
        <i className="fa-solid fa-people-group mr-2 md:hidden" />
        Echipă
      </MenuItem>
      <MenuItem href="/admin/my-profile" level="1">
        <i className="fa-regular fa-id-card mr-2 md:hidden" />
        Profil
      </MenuItem>
      <button
        className="md:hidden inline-flex menu-item font-medium  items-center px-3 py-2 cursor-pointer text-white rounded-md no-underline
        hover:bg-indigo-500"
        onClick={logout}
      >
        <i className="fa-solid fa-right-from-bracket mr-2 md:hidden" />
        Delogare
      </button>
    </>
  );
};

export default Pages;
