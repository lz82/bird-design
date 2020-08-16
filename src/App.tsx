import React from 'react';

import './style/index.scss';

import ButtonPreview from './views/button';
import MenuPreview from './views/menu';
import IconPreview from './views/icon';
import Transition from './views/transition';

function App() {
  return (
    <div className="App" style={{ padding: 10 }}>
      <ButtonPreview />
      <MenuPreview />
      <IconPreview />
      <Transition />
    </div>
  );
}

export default App;
