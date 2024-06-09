import { useRef } from 'react';
import { useOnClickOutside } from '../../hooks';

const AdminRowContextMenu = ({ hide, setModal }) => {
  const ref = useRef();

  useOnClickOutside(ref, () => {
    hide();
  });

  return (
    <>
      <ul className="flex flex-col py-2" ref={ref}>
        <li className="hover:bg-gray-100 ">
          <button
            className="px-4 py-2 text-gray-600 flex items-center no-underline"
            type="button"
            onClick={() => setModal('edit')}
          >
            Editeaza
          </button>
        </li>
      </ul>
    </>
  );
};

export default AdminRowContextMenu;
