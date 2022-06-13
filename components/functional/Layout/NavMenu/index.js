import { Container, Block, List, Link } from '../../../styled/Layout/NavMenu';
import { VscChromeClose } from 'react-icons/vsc';

export default function NavMenu({ togNav }) {
  return (
    <Container>
      <Block>
        <VscChromeClose className='close' onClick={togNav} />
        <List>
          <Link>Home</Link>
          <Link>About Us</Link>
          <Link>Contact Us</Link>
          <Link>Resources</Link>
        </List>
      </Block>
    </Container>
  );
}
