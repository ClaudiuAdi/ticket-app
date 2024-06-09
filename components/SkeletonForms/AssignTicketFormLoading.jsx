import { Button } from '@components';
import { Dropdown } from '@components/Fields';

const AssignTicketFormLoading = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="space-y-6 w-full">
        <label className="w-full">
          <span>Persoană</span>
          <Dropdown disabled className="input rounded-full backdrop-blur-sm w-full animate-pulse" />
        </label>
      </div>
      <Button className="button full primary hover-transition w-full sm:w-fit text-black" disabled>
        Salvează schimbările
      </Button>
    </div>
  );
};

export default AssignTicketFormLoading;
