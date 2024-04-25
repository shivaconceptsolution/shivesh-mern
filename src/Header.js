import { Link } from "react-router-dom";
function Header()
{
    return(
     <header>
        <div style={{float:'left'}}>
        <h1>Kangaroo Software</h1>
        </div>
        <div style={{float:'right'}}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/company">Company</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
     
    </header>)
}

export default Header;