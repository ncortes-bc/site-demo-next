import Global from '../components/styled/Global'
import Header from '../components/functional/Layout/Header'
import Home from '../components/functional/Home'

export default function index() {
  return (
    <div>
      <Global />
      <Header />
      <Home />
    </div>
  );
}