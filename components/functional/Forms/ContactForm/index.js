import { Form } from '../../../styled/Forms/ContactForm';
import { Button } from '../../../styled/Inputs/Buttons';
import { black } from '../../../styled/Global';

export default function ContactForm() {
  return (
    <Form>
      <input placeholder='Enter your Name' />
      <input placeholder='Enter a valid email address' />
      <textarea placeholder='Enter your message' />
      <Button textColor='white' color={black}>
        SUBMIT
      </Button>
    </Form>
  );
}
