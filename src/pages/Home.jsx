import ButtonTransparent from '../components/buttonTransparent'
import {Link} from 'react-router-dom'


function Home() {
  
  return( 
  <>
  <h1>Página Inicial</h1>
  <Link to="/Login"><ButtonTransparent> GO LOGIN</ButtonTransparent></Link>
  
  </>
)
}
export default Home
