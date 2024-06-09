import { Button } from '@components';
import { Input } from '@components/Fields';

const AssignTicketFormError = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="space-y-6 w-full">
        <label className="w-full">
          <span>Persoană</span>
          <Input
            disabled
            className="input rounded-full backdrop-blur-sm w-full bg-red-200 h-[42px]"
          />
        </label>
      </div>
      <Button className="button full primary hover-transition w-full sm:w-fit text-black" disabled>
        Salvează schimbările
      </Button>
    </div>
  );
};

export default AssignTicketFormError;
