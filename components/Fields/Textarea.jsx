import { classnames } from '@lib';
import React from 'react';

const Textarea = (props, className) => {
  return (
    <textarea
      rows="6"
      className={classnames('textarea input', className && className)}
      {...props}
    />
  );
};

export default Textarea;
