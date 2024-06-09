import React from 'react';

const PendingPage = () => {
  return (
    <>
      <h1 className="mt-8 w-fit text-4xl">Vă mulțumim pentru comanda efectuată</h1>
      <p className="py-4">
        Comanda dumneavoastră a fost procesată cu succes. Veți primi confirmarea plății pe adresa de
        e-mail specificată în formularul de comandă.
      </p>
      <p className="py-4 text-left">
        * Procesarea comenzilor se face în termen de maxim 48 de ore de la efectuarea tranzacției.
      </p>
    </>
  );
};

export default PendingPage;
