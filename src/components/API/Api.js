import React from 'react';
import StylesSettings from '../Styles/StylesSettings';
import QRCodeGenerator from '../QRCodeGenerator/QRCodeGenerator';

const Api = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h1>API Playground</h1>
        <StylesSettings />
      </div>
      <div>
        <QRCodeGenerator />
      </div>
    </div>
  );
}

export default Api;
