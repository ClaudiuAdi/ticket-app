import { useQuery } from '@hooks';
import { pick } from 'lodash';
import { Dropdown } from '.';
import { useEffect, useState } from 'react';
import { generateHash } from '@functions';

const Person = ({ person, onSelect, disabled }) => {
  const [key, setKey] = useState(generateHash());
  const { data, status } = useQuery('/admin/identities');

  useEffect(() => {
    setKey(generateHash());
  }, [person]);

  const showOptions = (identity) => {
    const optionValue = pick(identity, ['_id', 'name']);

    return (
      <option value={optionValue} key={identity._id}>
        {identity.name}
      </option>
    );
  };

  return (
    <Dropdown
      id="costCenter"
      placeholder="Alocă o persoană"
      defaultSelected={person}
      status={status}
      disabled={disabled}
      onSelect={onSelect}
      key={key}
    >
      {data?.map(showOptions)}
    </Dropdown>
  );
};

export default Person;
