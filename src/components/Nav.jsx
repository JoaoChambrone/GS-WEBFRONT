import {Link} from 'react-router-dom'
import '../styles/nav.scss'

function Nav() {
 

  return (
    <>
      <header>
        <img className='logo' src="src/assets/IMG-20231122-WA0013-removebg-preview.png" alt="" />
        <div className='tit'>
          <h1>PANCEIA<br /> CARE</h1>
        </div>
        <nav>
          <Link to="/" className='oei'>LOGIN</Link>
        </nav>
      </header>
    </>
  )
}

export default Nav

