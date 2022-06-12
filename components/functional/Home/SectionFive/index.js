import {
  Container,
  ColorBlock,
  Content,
  CardRow,
  Card,
} from '../../../styled/Home/SectionFive';
import { Button, InvButton } from '../../../styled/Inputs/Buttons';
import { black } from '../../../styled/Global';

export default function SectionFive() {
  return (
    <Container>
      <ColorBlock />
      <h1>Our Projects</h1>
      <Content>
        <CardRow>
          <Card className='a'>
            <h1>Ecological Architecture</h1>
            <p>
              Leo a diam sollicitudin tempor id eu nisl nunc. Senectus et netus
              et malesuada fames ac turpis egestas sed. Amet consectetur
              adipiscing elit duis tristique sollicitudin nibh. Sit amet
              porttitor eget dolor morbi non arcu risus quis. Quis hendrerit
              dolor magna eget est lorem.
            </p>
            <InvButton textColor={black} color={black}>
              READ MORE
            </InvButton>
          </Card>
          <Card className='b'></Card>
        </CardRow>
        <CardRow>
          <Card className='c'></Card>
          <Card className='d'>
            <img src='images/quotes.svg' />
            <p2>
              Quis hendrerit dolor magna eget est lorem ipsum dolor. Risus
              viverra adipiscing at in tellus integer feugiat scelerisque.
              Congue eu consequat ac felis donec.
            </p2>
          </Card>
          <Card className='e'></Card>
        </CardRow>
        <CardRow>
          <Card className='f'></Card>
          <Card className='g'>
            <h1>Interior Architectural Designs</h1>
            <p>
              Leo a diam sollicitudin tempor id eu nisl nunc. Senectus et netus
              et malesuada fames ac turpis egestas sed. Amet consectetur
              adipiscing elit duis tristique sollicitudin nibh. Sit amet
              porttitor eget dolor morbi non arcu risus quis. Quis hendrerit
              dolor magna eget est lorem ipsum dolor. Images from Freepik
            </p>
            <Button color={black}>READ MORE</Button>
          </Card>
        </CardRow>
      </Content>
    </Container>
  );
}
