import { UserInitialsAvatar } from '..';
import { getUserRole, time } from '@functions';

const UserDetailsCard = ({ name, role, email, createdAt }) => {
  return (
    <div className="flex flex-col items-center gap-6 bg-white rounded-xl shadow p-8">
      <div className="flex flex-col items-center">
        <UserInitialsAvatar name={name} />
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-gray-500">{getUserRole(role)}</p>
        </div>
      </div>
      <div className="flex flex-col divide-y-2">
        <div className="flex items-center py-2">
          <i className="text-indigo-400 fa-solid fa-envelope w-7"></i>
          <p>{email}</p>
        </div>
        <div className="flex items-center py-2">
          <i className="text-indigo-400 fa-solid fa-user-check w-7"></i>
          <div className="flex gap-1">
            <p>Membru din </p>
            <p className="font-medium">{time(createdAt, 'dd.MM.yyyy')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsCard;
