import React from 'react';

const RejectedPage = ({ reason }) => {
  return (
    <>
      <h1 className="mt-8 w-fit text-4xl">Ne pare rău...</h1>
      <p className="py-4">
        Tranzacția dumneavoastră nu a fost efectuată. Vă rugăm să încercați din nou mai târziu.
      </p>
      <p className="py-4">Motiv respingere: {reason}</p>
    </>
  );
};

export default RejectedPage;
