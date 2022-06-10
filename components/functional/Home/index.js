import Hero from './Hero'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'

export default function Home(props) {
    console.log(props);
    return (
        <>
            <Hero />
            <SectionOne />
            <SectionTwo props={props}/>
        </>
    )
}