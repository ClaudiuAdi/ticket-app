import React from 'react';

const AdminListTableHead = () => {
  return (
    <thead className="bg-gray-200">
      <tr className="text-xs text-black font-bold border-b">
        <td className="p-4 text-sm px-2 sm:px-8 w-5/12">Nume</td>
        <td className="p-4 text-sm px-2 sm:px-4 w-1/3">E-mail</td>
        <td className="p-4 text-sm px-2 sm:px-4 w-1/3">Rol</td>
        <td className="p-4 text-sm px-2 sm:px-4 w-full"></td>
      </tr>
    </thead>
  );
};

export default AdminListTableHead;
