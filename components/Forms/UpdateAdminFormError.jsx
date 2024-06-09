import Button from '../Button';
import { Input } from '../Fields';

const UpdateAdminFormError = () => {
  return (
    <form className="flex gap-2">
      <div className="w-full flex flex-col gap-4 h-fit">
        <label className="w-full">
          Nume
          <Input disabled className="form-input bg-red-200 rounded w-full border-0" />
        </label>
        <label className="w-full">
          E-mail
          <Input disabled className="form-input bg-red-200 rounded w-full border-0" />
        </label>
        <label className="w-full">
          Parolă
          <Input disabled className="form-input bg-red-200 rounded w-full border-0" />
        </label>
        <label className="w-full mb-5">
          Confirmă parola
          <Input disabled className="form-input bg-red-200 rounded w-full border-0" />
        </label>
        <div className="flex justify-between">
          <Button
            disabled
            className="block w-fit border-1 border-indigo-600 rounded py-1 h-fit max-w-full text-base px-6 mt-7"
          >
            Anulează
          </Button>
          <Button
            disabled
            className="block w-fit bg-primary rounded py-1 h-fit max-w-full text-base px-6 mt-7 button-form"
          >
            Actualizează
          </Button>
        </div>
      </div>
    </form>
  );
};

export default UpdateAdminFormError;
