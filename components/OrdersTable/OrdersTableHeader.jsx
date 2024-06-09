import React from 'react';

const OrdersTableHeader = () => {
  return (
    <thead className="bg-indigo-900">
      <tr className="text-sm text-white">
        <th className="sm:p-4 p-2 py-4 w-8 sm:w-10">Nr. comandă</th>
        <th className="sm:p-4 p-2 w-2/3 sm:w-auto cursor-pointer py-2">Plătitor</th>
        <th className="sm:p-4 p-2">Plasată pe</th>
        <th className="sm:p-4 p-2">Total (lei)</th>
        <th className="sm:p-4 p-2">Status</th>
      </tr>
    </thead>
  );
};

export default OrdersTableHeader;
