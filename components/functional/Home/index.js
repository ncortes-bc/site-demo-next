import Hero from './Hero';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';
import ContactUs from './ContactUs';
import Footer from '../Layout/Footer';

export default function Home({ props }) {
  return (
    <>
      <Hero />
      <SectionOne />
      <SectionTwo props={props} />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <ContactUs />
      <Footer />
    </>
  );
}
