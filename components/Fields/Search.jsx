import { debounce } from 'lodash';
import { useCallback, useRef } from 'react';

const Search = ({ setSearch, placeholder, defaultValue }) => {
  const ref = useRef();

  const request = debounce((value) => {
    if (typeof setSearch === 'function') {
      setSearch(value);
    }
  }, 500);

  const debounceRequest = useCallback((value) => request(value), []);

  const handleChange = (event) => {
    return debounceRequest(event.target.value);
  };

  const handleKeyUp = (event) => {
    event.keyCode === 13 && ref.current.blur();
  };

  const resetInputValue = () => {
    ref.current.value = '';
    if (typeof setSearch === 'function') {
      setSearch('');
    }
  };

  return (
    <div className="relative flex w-full items-center ">
      <input
        type="text"
        ref={ref}
        className="form-input border-gray-300 pl-8 rounded-md text-sm"
        placeholder={placeholder}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        defaultValue={defaultValue}
      />
      <div className="absolute left-2 px-1">
        <i className="fas fa-search text-gray-500"></i>
      </div>
      {ref?.current?.value && (
        <button
          tabIndex="-1"
          type="button"
          className="absolute right-0 top-0 z-30 px-3 py-2 text-gray-500 outline-none"
          onClick={resetInputValue}
        >
          <i className="fas fa-times"></i>
        </button>
      )}
    </div>
  );
};

export default Search;
