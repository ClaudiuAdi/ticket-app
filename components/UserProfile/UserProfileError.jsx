import { useEffect } from 'react';
import { Bone } from '..';
import { toaster } from '../../lib';

const UserProfileError = () => {
  useEffect(() => {
    toaster.error('Eroare! Datele nu au putut fi încărcate!');
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 bg-white rounded-xl shadow p-8">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 mb-2 bg-indigo-400 rounded-full flex justify-center items-center text-white font-bold text-3xl" />
        <div className="flex flex-col items-center gap-1">
          <Bone type="error" extraClass="w-32 mb-1" />
          <Bone type="error" extraClass="w-20 mb-1" />
        </div>
      </div>
      <div className="flex flex-col divide-y-2">
        <div className="flex items-center py-2">
          <i className="text-indigo-400 fa-solid fa-envelope w-7"></i>
          <Bone type="error" extraClass="w-full" />
        </div>
        <div className="flex items-center py-2">
          <i className="text-indigo-400 fa-solid fa-user-check w-7"></i>
          <div className="flex gap-1">
            <p>Membru din </p>
            <Bone type="error" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileError;
/* auto-generated by robocode v0.4.3 */
