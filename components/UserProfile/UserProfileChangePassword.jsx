import { MyProfileChangePassword } from '../Forms';

const UserProfileChangePassword = ({ uuid }) => {
  return (
    <div className="col-span-2 flex flex-col gap-2 bg-white rounded-xl sm:p-6 p-4 shadow">
      <div className="flex gap-4 border-b text-base">
        <div className="text-black font-medium border-b-2 border-black px-3 pb-1 cursor-pointer">
          Parolă
        </div>
        <div className="text-black font-medium border-b-2 border-black px-3 pb-1 cursor-pointer">
          Parolă
        </div>
      </div>
      <div className="p-3">
        <div className="flex flex-col gap-4 sm:max-w-xs">
          <MyProfileChangePassword uuid={uuid} />
        </div>
      </div>
    </div>
  );
};

export default UserProfileChangePassword;
