import { classnames } from '@lib';
import React from 'react';

const Checkbox = ({ children, className, ...props }) => {
  return (
    <div className="mt-2 ">
      <label className="inline-flex items-center ">
        <input
          type="checkbox"
          className={classnames('checkbox ', className && className)}
          {...props}
        />
        <span className="ml-2">{children}</span>
      </label>
    </div>
  );
};

export default Checkbox;
