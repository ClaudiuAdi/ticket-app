import { Option } from '.';
import { classnames } from '../../lib';

const OptionList = ({ children, getItemProps, getMenuProps, highlightedIndex, isOpen }) => {
  const showItems = (item, index) => {
    const props = getItemProps({ item, index });
    const isHover = highlightedIndex === index;

    return (
      <Option key={item.value} isHover={isHover} {...props}>
        {item.label}
      </Option>
    );
  };

  return (
    <ul
      className={classnames(
        'outline-none my-0 p-0 overflow-y-auto cursor-pointer',
        isOpen && children.length && 'dropdown-list'
      )}
      {...getMenuProps()}
    >
      {isOpen && children.map(showItems)}
    </ul>
  );
};

export default OptionList;
