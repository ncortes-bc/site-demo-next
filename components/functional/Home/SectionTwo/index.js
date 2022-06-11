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
} from "../../../styled/Home/SectionTwo";
import path from "path";

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
                <Img src={path.join("images/", article.img)} />
                <CardDetail>
                  <Number>{"0" + (idx + 1) + " /"}</Number>
                  <TextBox>
                    <Caption>{article.content}</Caption>
                    <Link href={article.link}>LEARN MORE</Link>
                  </TextBox>
                </CardDetail>
              </NumberedCard>
            );
          })}
        </Cards>
      </Content>
    </Container>
  );
}
