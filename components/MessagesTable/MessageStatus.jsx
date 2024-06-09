import { classnames } from '../../lib';

const MessageStatus = ({ status }) => {
  return (
    <p
      className={classnames(
        'px-3 py-1 text-xs rounded-full font-medium text-center border',
        status === 'closed' && (status = 'Închis') && 'bg-red-50 text-red-600 border-red-200',
        status === 'in progress' &&
          (status = 'În proces') &&
          'bg-sky-100 text-blue-600 border-blue-200',
        status === 'unassigned' &&
          (status = 'Nealocat') &&
          'bg-green-100 text-green-700 border-green-300'
      )}
    >
      {status}
    </p>
  );
};

export default MessageStatus;
