import Global from '../components/styled/Global'
import Header from '../components/functional/Layout/Header'
import Home from '../components/functional/Home'
import getArticles from '../lib/getArticles'

export default function index(props) {
  return (
    <div>
      <Global />
      <Header />
      <Home props={props}/>
    </div>
  );
}

export async function getStaticProps() {
  const articles = getArticles();
  return {
    props: { 
     articles: articles
    }
  } 
}