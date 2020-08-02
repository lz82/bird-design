import React from 'react';

import Button, { ButtonSize, ButtonType } from './components/button';

import './App.css';

import './style/index.scss';

function App() {
  return (
    <div className="App">
      <h1>Primary Button</h1>
      <Button size={ButtonSize.Large}>large default button</Button>
      &nbsp;
      <Button disabled size={ButtonSize.Large}>
        large default button
      </Button>
      &nbsp;
      <Button>normal default button</Button>
      &nbsp;
      <Button disabled>normal default button</Button>
      &nbsp;
      <Button size={ButtonSize.Small}>small default button</Button>
      &nbsp;
      <Button disabled size={ButtonSize.Small}>
        small default button
      </Button>
      <br />
      <br />
      <h1>Primary Button</h1>
      <Button type={ButtonType.Primary} size={ButtonSize.Large}>
        large primary button
      </Button>
      &nbsp;
      <Button disabled type={ButtonType.Primary} size={ButtonSize.Large}>
        large primary button
      </Button>
      &nbsp;
      <Button type={ButtonType.Primary}>normal primary button</Button>
      &nbsp;
      <Button disabled type={ButtonType.Primary}>
        normal primary button
      </Button>
      &nbsp;
      <Button type={ButtonType.Primary} size={ButtonSize.Small}>
        small primary button
      </Button>
      &nbsp;
      <Button disabled type={ButtonType.Primary} size={ButtonSize.Small}>
        small primary button
      </Button>
      <br />
      <br />
      <h1>Danger Button</h1>
      <Button type={ButtonType.Danger} size={ButtonSize.Large}>
        large Danger button
      </Button>
      &nbsp;
      <Button disabled type={ButtonType.Danger} size={ButtonSize.Large}>
        large Danger button
      </Button>
      &nbsp;
      <Button type={ButtonType.Danger}>normal Danger button</Button>
      &nbsp;
      <Button disabled type={ButtonType.Danger}>
        normal Danger button
      </Button>
      &nbsp;
      <Button type={ButtonType.Danger} size={ButtonSize.Small}>
        small Danger button
      </Button>
      &nbsp;
      <Button disabled type={ButtonType.Danger} size={ButtonSize.Small}>
        small Danger button
      </Button>
      <br />
      <br />
      <h1>Link Button</h1>
      <Button type={ButtonType.Link} size={ButtonSize.Large}>
        large Link button
      </Button>
      &nbsp;
      <Button disabled type={ButtonType.Link} size={ButtonSize.Large}>
        large Link button
      </Button>
      &nbsp;
      <Button type={ButtonType.Link}>normal Link button</Button>
      &nbsp;
      <Button disabled type={ButtonType.Link}>
        normal Link button
      </Button>
      &nbsp;
      <Button type={ButtonType.Link} size={ButtonSize.Small}>
        small Link button
      </Button>
      &nbsp;
      <Button disabled type={ButtonType.Link} size={ButtonSize.Small}>
        small Link button
      </Button>
    </div>
  );
}

export default App;
