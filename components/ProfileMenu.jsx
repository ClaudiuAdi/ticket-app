import { useRef } from 'react';
import { useOnClickOutside, useDisclosure } from '@hooks';
import { logout } from '../api';
import { router } from '@lib';

const ProfileMenu = ({ role }) => {
  const { hide } = useDisclosure();
  const ref = useRef();
  useOnClickOutside(ref, hide);
  const handleProfileClick = (e) => {
    e.preventDefault();
    router.push(`/${role}/my-profile`);
  };

  return (
    <div className="flex flex-col py-0.5 w-32 absolute top-12 right-0 border bg-white rounded-md shadow-xl z-50">
      <button
        className="px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center no-underline"
        onClick={handleProfileClick}
      >
        Profilul meu
      </button>
      <button
        className="px-4 py-2 hover:bg-gray-100 text-gray-800 flex items-center no-underline"
        onClick={logout}
      >
        Deconectare
      </button>
    </div>
  );
};

export default ProfileMenu;
