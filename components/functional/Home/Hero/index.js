import { HeroContainer, HeroContent, Circle, Img, Card } from '../../../styled/Home/Hero'

export default function Hero() {
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
                    Id eu nisl nunc mi. Eget nunc scelerisque <a href="#">viverra mauris</a> in aliquam. Malesuada proin libero nunc consequat interdum.
                    <br /><br /><i>Image by</i> <a href="#">Freepik</a>
                    </p>
                    <Circle />
                </Card>
            </HeroContent>
        </HeroContainer>
    )
}