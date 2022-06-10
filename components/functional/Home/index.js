import Hero from './Hero'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'

export default function Home({ props }) {
    return (
        <>
            <Hero />
            <SectionOne />
            <SectionTwo props={props}/>
            <SectionThree />
        </>
    )
}