import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function AddressLabel() {
  return (
    <div>
      <div>FullName</div>
      <div>Adddress</div>
      <div>Area</div>
    </div>
  )
}

const Stamp = () => (
  <div>
    <div>Stamp</div>
  </div>
);

function Envelope() {
  return (
    <div>
      <div className="sender">
        <AddressLabel />
      </div>
      <div className="receiver">
        <AddressLabel />
      </div>
      <div className="stamp">
        <Stamp />
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Envelope />
  </React.StrictMode>,
  document.getElementById('root')
);
