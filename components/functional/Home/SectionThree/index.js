import { Container, Content, TextColumns } from '../../../styled/Home/SectionThree'
import { Button } from '../../../styled/Inputs/Button'

export default function SectionThree() {
    return (
        <Container>
            <Content>
                <h1>ABOUT OUR TEAM</h1>
                <h2>5000+ Professionals</h2>
                <TextColumns>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur
                    </p>                
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur
                    </p>
                </TextColumns>
                <Button>CONTACT US</Button>
            </Content>
        </Container>
    )
}