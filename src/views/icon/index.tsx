import React from 'react';
import Icon from '../../components/icon';

export default function index() {
  return (
    <div>
      <h2>Icon</h2>
      <Icon theme="primary" icon="coffee" size="10x" />
      <Icon theme="danger" icon="coffee" size="10x" />
      <Icon theme="warning" icon="coffee" size="10x" />
    </div>
  );
}
