import {
  Container,
  ColorBlock,
  Content,
  CardRow,
  Card,
} from '../../../styled/Home/SectionFive';
import { Button, InvButton } from '../../../styled/Inputs/Buttons';

export default function SectionFive() {
  return (
    <Container>
      <ColorBlock />
      <Content>
        <CardRow>
          <Card className='a'></Card>
          <Card className='b'></Card>
        </CardRow>
        <CardRow>
          <Card className='c'></Card>
          <Card className='d'></Card>
          <Card className='e'></Card>
        </CardRow>
        <CardRow>
          <Card className='f'></Card>
          <Card className='g'></Card>
        </CardRow>
      </Content>
    </Container>
  );
}
