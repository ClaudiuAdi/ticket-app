import OldPasswordField from './OldPasswordField';
import NewPasswordField from './NewPasswordField';
import ConfirmPasswordField from './ConfirmPasswordField';

const ChangePasswordForm = () => {
  return (
    <div className="space-y-4">
      <OldPasswordField />
      <NewPasswordField />
      <ConfirmPasswordField />
    </div>
  );
};

export default ChangePasswordForm;
