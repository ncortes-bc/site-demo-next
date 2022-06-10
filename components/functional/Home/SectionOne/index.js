import { Container, ColorBlock, Content, DefCard, ShadowCard, TextBox } from '../../../styled/Home/SectionOne'
import { InvButton } from '../../../styled/Inputs/InvButton'

export default function SectionOne() {
    return (
        <Container>
            <ColorBlock />
            <Content>
                <DefCard />
                <ShadowCard/>
                <TextBox>
                    <h1>
                        Future City
                    </h1>
                    <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                    anim id est laborum. <br /><br /> Image by <a>Freepik</a>
                    </p>
                    <InvButton>
                        CONTACT US
                    </InvButton>
                </TextBox>
            </Content>
        </Container>
    )
}