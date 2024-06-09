import { classnames } from '../../lib';
import { useDropdown } from '../../hooks';
import { OptionList } from '.';

const Dropdown = ({
  children,
  defaultSelected,
  placeholder,
  disabled,
  onSelect,
  icon,
  className,
  ...props
}) => {
  const { inputItems, ...downshift } = useDropdown({ children, onSelect, defaultSelected });

  return (
    <div className="relative">
      <div
        className={classnames(
          'dropdown',
          downshift.isOpen && 'rounded-b-none',
          disabled && 'bg-gray-200 pointer-events-none',
          className && className
        )}
        {...downshift.getToggleButtonProps()}
        {...props}
      >
        <input
          value={downshift.selectedItem?.label || ''}
          className="-my-2 outline-none w-full bg-transparent cursor-pointer"
          readOnly={true}
          placeholder={placeholder}
          disabled={disabled}
        />
        <span role="button" className={classnames(disabled && 'pointer-events-none')}>
          {icon || <i className="fas fa-chevron-down" />}
        </span>
      </div>
      <OptionList onSelect={onSelect} {...downshift}>
        {inputItems}
      </OptionList>
    </div>
  );
};

export default Dropdown;
