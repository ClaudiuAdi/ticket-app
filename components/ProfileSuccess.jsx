import React from 'react';

const ProfileSuccess = ({ name, role = 'Admin' }) => {
  return (
    <div className="flex flex-col text-right text-white">
      <h4 className="text-teal-300 font-semibold text-sm">{name}</h4>
      <p className="text-xs font-semibold capitalize">{role}</p>
    </div>
  );
};

export default ProfileSuccess;
