import { useRef } from 'react';
import { ProfileSuccess, ProfileLoading, ProfileMenu } from '.';
import { useOnClickOutside, useDisclosure, useProfile } from '../hooks';

const Profile = () => {
  const { status, me } = useProfile();

  const { isOpen, hide, toggle } = useDisclosure();
  const ref = useRef();
  useOnClickOutside(ref, hide);

  return (
    <div ref={ref} className="flex items-center gap-4 relative">
      <div
        className="hidden md:flex items-center space-x-2 cursor-pointer"
        onClick={toggle}
        role="button"
      >
        <div className="flex items-center gap-2">
          {status === 'loading' && <ProfileLoading />}
          {status === 'success' && <ProfileSuccess {...me} />}
          <div className="w-10 h-10 rounded-full flex justify-center items-center bg-indigo-200">
            <i className="text-lg text-indigo-500 fas fa-user"></i>
          </div>
        </div>
        {isOpen ? (
          <i className="fas fa-chevron-up text-white"></i>
        ) : (
          <i className="fas fa-chevron-down text-white"></i>
        )}
      </div>
      {isOpen && <ProfileMenu role={me.role} />}
    </div>
  );
};

export default Profile;
