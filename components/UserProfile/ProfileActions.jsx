import { MyProfileChangePassword } from '@components/Forms';
import { useState } from 'react';
import { classnames } from '../../lib';

const ProfileActions = ({ uuid }) => {
  const [action, setAction] = useState('password');

  return (
    <div className="col-span-2 flex flex-col gap-2 bg-white rounded-xl sm:p-6 p-4 shadow ">
      <div className="flex gap-4 border-b text-base text-gray-500">
        <div
          className={classnames(
            'px-3 cursor-pointer transition',
            action === 'password' && 'border-b-2 text-indigo-600 font-medium border-indigo-600'
          )}
          onClick={() => setAction('password')}
        >
          Parolă
        </div>
      </div>
      <div className="p-3">
        <div className="flex flex-col gap-4">
          <div className="sm:max-w-xs">
            {action === 'password' && <MyProfileChangePassword uuid={uuid} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileActions;
