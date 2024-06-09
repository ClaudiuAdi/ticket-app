import { Bone } from '@components';

const DashboardStatsLoading = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-medium">Ultimele 30 de zile</h2>
      <div className="sm:grid grid-cols-3 flex flex-col gap-2 sm:gap-4">
        <div className="flex flex-col gap-2 bg-white overflow-hidden border rounded-md shadow-md">
          <div className="flex gap-4 items-center sm:p-3 p-4">
            <div className="flex justify-center items-center text-base text-white h-11 w-11 bg-indigo-600 rounded-lg">
              <i className="fa-solid fa-tags"></i>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-gray-500 font-medium">Tichete nealocate</p>
                <div className="flex items-end py-2 gap-3">
                  <Bone type="loading" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-6 p-3">
            <p className="text-indigo-700 cursor-pointer hover:text-indigo-500 font-medium">
              Vezi tot
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 bg-white overflow-hidden border rounded-md shadow-md">
          <div className="flex gap-4 items-center sm:p-3 p-4">
            <div className="flex justify-center items-center text-base text-white h-11 w-11 bg-indigo-600 rounded-lg">
              <i className="fa-solid fa-hourglass"></i>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-gray-500 font-medium">Tichete în proces</p>
                <div className="flex items-end py-2 gap-3">
                  <Bone type="loading" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-6 p-3">
            <p className="text-indigo-700 cursor-pointer hover:text-indigo-500 font-medium">
              Vezi tot
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 bg-white overflow-hidden border rounded-md shadow-md">
          <div className="flex gap-4 items-center sm:p-3 p-4">
            <div className="flex justify-center items-center text-base text-white h-11 w-11 bg-indigo-600 rounded-lg">
              <i className="fa-regular fa-circle-check"></i>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-gray-500 font-medium">Tichete închise</p>
                <div className="flex items-end py-2 gap-3">
                  <Bone type="loading" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-6 p-3">
            <p className="text-indigo-700 cursor-pointer hover:text-indigo-500 font-medium">
              Vezi tot
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStatsLoading;
