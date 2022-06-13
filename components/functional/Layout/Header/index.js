import {
  Container,
  Content,
  SearchBar,
  BurgerMenu,
} from '../../../styled/Layout/Header';
import React, { useState } from 'react';
import styledComponents from 'styled-components';
import NavMenu from '../NavMenu';

export default function Header() {
  const [nav, setNav] = useState(false);

  const togNav = () => setNav(!nav);

  return (
    <Container>
      {nav && <NavMenu togNav={togNav} />}
      <Content>
        <SearchBar />
        <BurgerMenu onClick={togNav} />
      </Content>
    </Container>
  );
}
