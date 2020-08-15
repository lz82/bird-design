import React from 'react';
import Button, { ButtonSize, ButtonType } from '../../components/button';

export default function index() {
  return (
    <div>
      <h1>Default Button</h1>
      <Button
        size={ButtonSize.Large}
        onClick={() => {
          alert('click');
        }}
      >
        large default button
      </Button>
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
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        large primary button
      </Button>
      &nbsp;
      <Button disabled btnType={ButtonType.Primary} size={ButtonSize.Large}>
        large primary button
      </Button>
      &nbsp;
      <Button btnType={ButtonType.Primary}>normal primary button</Button>
      &nbsp;
      <Button disabled btnType={ButtonType.Primary}>
        normal primary button
      </Button>
      &nbsp;
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
        small primary button
      </Button>
      &nbsp;
      <Button disabled btnType={ButtonType.Primary} size={ButtonSize.Small}>
        small primary button
      </Button>
      <br />
      <br />
      <h1>Danger Button</h1>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
        large Danger button
      </Button>
      &nbsp;
      <Button disabled btnType={ButtonType.Danger} size={ButtonSize.Large}>
        large Danger button
      </Button>
      &nbsp;
      <Button btnType={ButtonType.Danger}>normal Danger button</Button>
      &nbsp;
      <Button disabled btnType={ButtonType.Danger}>
        normal Danger button
      </Button>
      &nbsp;
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        small Danger button
      </Button>
      &nbsp;
      <Button disabled btnType={ButtonType.Danger} size={ButtonSize.Small}>
        small Danger button
      </Button>
      <br />
      <br />
      <h1>Link Button</h1>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" size={ButtonSize.Large}>
        large Link button
      </Button>
      &nbsp;
      <Button
        disabled
        btnType={ButtonType.Link}
        href="http://www.baidu.com"
        size={ButtonSize.Large}
      >
        large Link button
      </Button>
      &nbsp;
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">
        normal Link button
      </Button>
      &nbsp;
      <Button disabled btnType={ButtonType.Link} href="http://www.baidu.com">
        normal Link button
      </Button>
      &nbsp;
      <Button
        btnType={ButtonType.Link}
        size={ButtonSize.Small}
        href="http://www.baidu.com"
        onClick={() => {
          console.log('aaa');
        }}
      >
        small Link button
      </Button>
      &nbsp;
      <Button
        disabled
        btnType={ButtonType.Link}
        href="http://www.baidu.com"
        size={ButtonSize.Small}
        onClick={() => {
          console.log('aaa');
        }}
      >
        small Link button
      </Button>
    </div>
  );
}
