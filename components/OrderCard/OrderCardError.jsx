import { Bone } from '@components';
import { useEffect } from 'react';
import { toaster } from '../../lib';

const OrderCardError = () => {
  useEffect(() => {
    toaster.error('Eroare! Datele nu au putut fi încărcate!');
  }, []);

  return (
    <div className="flex flex-col gap-4 bg-white rounded shadow-lg p-4">
      <div className="flex gap-2 items-center mb-4">
        <Bone type="error" extraClass="w-32 mb-2 h-16" />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <div className="border-b">
            <p className="font-semibold mb-2">Data primirii</p>
            <Bone type="error" extraClass="w-32 mb-2" />
          </div>
          <div className="border-b">
            <p className="font-semibold mb-2">Persoană desemnată</p>
            <Bone type="error" extraClass="w-32 mb-2" />
          </div>
          <div className="border-b">
            <p className="font-semibold mb-2">Adresă email</p>
            <Bone type="error" extraClass="w-32 mb-2" />
          </div>
          <div>
            <p className="font-semibold mb-2">Mesaj</p>
            <Bone type="error" extraClass="w-full mb-2" />
            <Bone type="error" extraClass="w-full mb-2" />
            <Bone type="error" extraClass="w-full mb-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCardError;
