import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function ButtonExample() {
  return (
    <Button variant="primary">
      Profile <Badge bg="secondary">1</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  );
}

export default ButtonExample;
