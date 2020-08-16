import React, { useState } from 'react';
import Button from '../../components/button';
import Transition from '../../components/transition';

export default function () {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h2>Transition</h2>
      <Button btnType="primary" onClick={() => setShow(!show)}>
        toggle
      </Button>
      <br />
      <br />
      <Transition timeout={300} in={show} animation="zoom-in-left" wrap>
        <Button size="lg">Primary</Button>
      </Transition>
    </div>
  );
}
