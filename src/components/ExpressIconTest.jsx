import React from 'react';
import { DiExpress } from 'react-icons/di';

// Simple component to test if DiExpress exists
const ExpressIconTest = () => {
  return (
    <div>
      <h2>Testing Express Icon</h2>
      {DiExpress ? <DiExpress size={40} /> : <p>Icon not found</p>}
    </div>
  );
};

export default ExpressIconTest;
