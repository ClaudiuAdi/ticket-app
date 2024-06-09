import React from 'react';

const UserInitialsAvatar = ({ name }) => {
  const initials = name
    .split(' ')
    .map((word) => word.charAt(0))
    .join('');

  return (
    <div className="w-16 h-16 mb-2 bg-indigo-400 rounded-full flex justify-center items-center text-white font-bold text-3xl">
      {initials}
    </div>
  );
};

export default UserInitialsAvatar;
