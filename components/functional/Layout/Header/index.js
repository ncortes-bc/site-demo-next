import {
  Container,
  Content,
  SearchBar,
  BurgerMenu,
} from '../../../styled/Layout/Header';
import React from 'react';
import styledComponents from 'styled-components';

export default function Header() {
  return (
    <Container>
      <Content>
        <SearchBar />
        <BurgerMenu />
      </Content>
    </Container>
  );
}
