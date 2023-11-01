import Link from './components/Link'
import Navbar from './components/Navbar'
export default function App() {
  return (
    <div>
      <Navbar> nav  navItem1 navItem2 navItem3 navItem4</Navbar>
      <div>
        <Link to="/button">Go to Button Page</Link>
        <Link to="/accordion">Go to Accordion Page</Link>
        <Link to="/navbar">Go to Navbar Page</Link>
      </div>
      App Page Routes Coming SOON
    </div>
  )
}
