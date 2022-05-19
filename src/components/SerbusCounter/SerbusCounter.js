import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import './SerbusCounter.css';

function SerbusCounter() {
  // Primer uporabe state hook
  const [count, setCount] = useState(0);

  return (
    <div className="SerbusCounter">
      <div>
        <h2>Serbus</h2>
        <p>Serbus counter : {count}</p>
        <button onClick={() => setCount(count + 1)}>
          <p>Pozdravi</p>
        </button>
      </div>
    </div>
  );
}

SerbusCounter.propTypes = {};

SerbusCounter.defaultProps = {};

export default SerbusCounter;
