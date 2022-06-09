import { HeroContainer, HeroContent, Circle, Img, Card, ImgContainer } from '../../styled/Home'

export default function Home() {
    return (
        <HeroContainer>
            <HeroContent>
                <Img />
                <Card>
                    <h1>
                        Arch<br />Agency
                    </h1>
                    <p>
                    Duis ultricies lacus sed turpis tincidunt id aliquet risus. Bibendum est ultricies integer quis auctor. 
                    Id eu nisl nunc mi. Eget nunc scelerisque in aliquam. Malesuada proin libero nunc consequat interdum.
                    <br /><br />Image by 
                    </p>
                    <Circle />
                </Card>
            </HeroContent>
        </HeroContainer>
    )
}