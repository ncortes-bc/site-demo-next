import {
  Container,
  Content,
  FormContainer,
  ContactInfo,
  ContactEntry,
  ImageWrapper,
  SocialBlock,
  Socials,
} from '../../../styled/Home/ContactUs';
import ContactForm from '../../Forms/ContactForm';
import Image from 'next/image';

export default function ContactUs() {
  return (
    <Container>
      <Content>
        <FormContainer>
          <h1>Contact Us</h1>
          <p>
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.
          </p>
          <ContactForm />
        </FormContainer>
        <ContactInfo>
          <ContactEntry>
            <img src='/images/mobile-phone.svg' alt='phone' />
            <p>
              234-9876-5400
              <br />
              888-0123-4567 (Toll Free)
            </p>
          </ContactEntry>
          <ContactEntry>
            <img src='/images/phone.svg' alt='phone' />
            <p>1-234-567-8900</p>
          </ContactEntry>
          <ContactEntry>
            <img src='/images/envelope.svg' alt='phone' />
            <p>hello@theme.com</p>
          </ContactEntry>
        </ContactInfo>
        <SocialBlock>
          <Socials></Socials>
        </SocialBlock>
      </Content>
    </Container>
  );
}
