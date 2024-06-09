import { useFormikContext } from 'formik';
import React from 'react';

const CancelResponseButton = ({ data, setShowButtons }) => {
  const { setFieldValue } = useFormikContext();

  const clickHandler = () => {
    setFieldValue('response', data.response || '');
    setShowButtons(false);
  };

  return (
    <button
      type="button"
      onClick={clickHandler}
      className="button full bg-neutral-200 border-none text-neutral-600 hover:bg-neutral-300 w-full sm:w-fit"
    >
      Anulează
    </button>
  );
};

export default CancelResponseButton;
