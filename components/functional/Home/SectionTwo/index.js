import {
  OffsetBlock,
  Container,
  Content,
  Cards,
  NumberedCard,
  Img,
  CardDetail,
  Number,
  TextBox,
  Caption,
  Link,
  ConstrContainer,
  TextCard,
  Stripes,
  PictureCard,
  Dots,
  ComboCard,
} from '../../../styled/Home/SectionTwo';
import path from 'path';

export default function SectionTwo({ props }) {
  return (
    <Container>
      <OffsetBlock />
      <Content>
        <h1>Company Principles</h1>
        <p>
          Sample text. Click to select the text box. Images from <a>Freepik</a>
        </p>
        <Cards>
          {props.articles?.map((article, idx) => {
            return (
              <NumberedCard key={idx}>
                <Img src={path.join('images/', article.img)} />
                <CardDetail>
                  <Number>{'0' + (idx + 1) + ' /'}</Number>
                  <TextBox>
                    <Caption>{article.content}</Caption>
                    <Link href={article.link}>LEARN MORE</Link>
                  </TextBox>
                </CardDetail>
              </NumberedCard>
            );
          })}
        </Cards>
        <ConstrContainer>
          <TextCard>
            <img src='images/circles.svg' />
            <h1>Building Company</h1>
            <p>
              Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus
              quis elementum. Phasellus sed efficitur dolor, et ultricies
              sapien. Quisque fringilla sit amet dolor commodo efficitur.
              Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum
              iaculis sit amet.
              <br />
              <br /> Images from Freepik
            </p>
          </TextCard>
          <Stripes src='images/stripes.svg' />
          <PictureCard>
            <img src='images/construction-worker.jpeg' />
          </PictureCard>
          <Dots src='images/dots.svg' />
          <ComboCard>
            <div className='textbox'>
              <h1>About Us</h1>
              <p>
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit nullam nunc justo sagittis suscipit ultrices.
                <br />
                <br />
                LEARN MORE
              </p>
            </div>
            <div className='image' />
          </ComboCard>
        </ConstrContainer>
      </Content>
    </Container>
  );
}
