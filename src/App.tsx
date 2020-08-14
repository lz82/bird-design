import React from 'react';

import './style/index.scss';

import ButtonPreview from './views/button';
import MenuPreview from './views/menu';

function App() {
  return (
    <div className="App">
      <ButtonPreview />
      <MenuPreview />
    </div>
  );
}

export default App;
