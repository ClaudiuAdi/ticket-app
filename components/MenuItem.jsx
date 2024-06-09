import { useRouter } from 'next/router';
import { Link } from '.';
import { classnames } from '../lib';

const MenuItem = ({ href, children }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Link
      href={href}
      className={classnames(
        'menu-item font-medium inline-flex items-center px-3 py-2 hover:bg-indigo-500 cursor-pointer text-white rounded-md no-underline',
        pathname === href && 'bg-indigo-700 hover:!bg-indigo-700'
      )}
    >
      {children}
    </Link>
  );
};

export default MenuItem;
