import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './Shared/Header/NavMenu';
import './Layout.css';
export default props => (
  <div>
    <NavMenu />
    <Container>
      {props.children}
    </Container>
  </div>
);
