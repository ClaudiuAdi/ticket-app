import { Button } from '@components';
import { useFormikContext } from 'formik';

const Submit = ({ children, isLoading, ...props }) => {
  const { isValid, validateOnMount } = useFormikContext();
  const disabled = isLoading || (validateOnMount && !isValid);

  return (
    <div className="flex items-center">
      <Button type="submit" className="button full primary" disabled={disabled} {...props}>
        {isLoading ? (
          <img src="/icons/loading.gif" alt="loading" className="w-10 mx-auto" />
        ) : (
          children
        )}
      </Button>
    </div>
  );
};

export default Submit;
