import {
  Container,
  Content,
  CardContainer,
  Card,
  ColorBlock,
} from '../../../styled/Home/SectionFour';
import { InvButton } from '../../../styled/Inputs/Buttons';

export default function SectionFour() {
  return (
    <Container>
      <Content>
        <h1>About Company</h1>
        <CardContainer>
          <Card>
            <img src='images/office-man.jpeg' />
            <h1>Welcome</h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <InvButton>CONTACT US</InvButton>
          </Card>
          <img src='images/diverse-workers.jpeg' />
        </CardContainer>
      </Content>
      <ColorBlock />
    </Container>
  );
}
