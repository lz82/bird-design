import React from 'react';
import Button from '../../components/button';

export default function index() {
  return (
    <div>
      <h1>Default Button</h1>
      <Button
        size="lg"
        onClick={() => {
          alert('click');
        }}
      >
        large default button
      </Button>
      &nbsp;
      <Button disabled size="lg">
        large default button
      </Button>
      &nbsp;
      <Button>normal default button</Button>
      &nbsp;
      <Button disabled>normal default button</Button>
      &nbsp;
      <Button size="sm">small default button</Button>
      &nbsp;
      <Button disabled size="sm">
        small default button
      </Button>
      <br />
      <br />
      <h1>Primary Button</h1>
      <Button btnType="primary" size="lg">
        large primary button
      </Button>
      &nbsp;
      <Button disabled btnType="primary" size="lg">
        large primary button
      </Button>
      &nbsp;
      <Button btnType="primary">normal primary button</Button>
      &nbsp;
      <Button disabled btnType="primary">
        normal primary button
      </Button>
      &nbsp;
      <Button btnType="primary" size="sm">
        small primary button
      </Button>
      &nbsp;
      <Button disabled btnType="primary" size="sm">
        small primary button
      </Button>
      <br />
      <br />
      <h1>Danger Button</h1>
      <Button btnType="danger" size="lg">
        large Danger button
      </Button>
      &nbsp;
      <Button disabled btnType="danger" size="lg">
        large Danger button
      </Button>
      &nbsp;
      <Button btnType="danger">normal Danger button</Button>
      &nbsp;
      <Button disabled btnType="danger">
        normal Danger button
      </Button>
      &nbsp;
      <Button btnType="danger" size="sm">
        small Danger button
      </Button>
      &nbsp;
      <Button disabled btnType="danger" size="sm">
        small Danger button
      </Button>
      <br />
      <br />
      <h1>Link Button</h1>
      <Button btnType="link" href="http://www.baidu.com" size="lg">
        large Link button
      </Button>
      &nbsp;
      <Button disabled btnType="link" href="http://www.baidu.com" size="lg">
        large Link button
      </Button>
      &nbsp;
      <Button btnType="link" href="http://www.baidu.com">
        normal Link button
      </Button>
      &nbsp;
      <Button disabled btnType="link" href="http://www.baidu.com">
        normal Link button
      </Button>
      &nbsp;
      <Button
        btnType="link"
        size="sm"
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
        btnType="link"
        href="http://www.baidu.com"
        size="sm"
        onClick={() => {
          console.log('aaa');
        }}
      >
        small Link button
      </Button>
    </div>
  );
}
