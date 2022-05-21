import React from 'react';

interface Props {
  name: string;
}

const Greetings: React.FC<Props> = ({ name }) => {
  return (
    <div>
      Hello <strong>{name}</strong>
    </div>
  );
};

export default Greetings;
