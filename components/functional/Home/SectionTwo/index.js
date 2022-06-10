import { Container, Content, NumberedCard, Number, Detail, Link } from '../../../styled/Home/SectionTwo'

export default function SectionTwo(props){
    console.log(props);
    return(
    <Container>
        <Content>
        {
            props.articles?.map((article, idx) => {
                <NumberedCard>
                    <Number>{'0'+idx+'/'}</Number>
                    <Detail>{article.content}</Detail>
                    <Link href={article.link}>LEARN MORE</Link>
                </NumberedCard>
            })
        }
        </Content>
    </Container>
    )
}