import logo from '../logo.svg';
import clientsInfo from "./Clients.json";
import './NaviBanner.css';

import { Outlet, Link } from "react-router-dom";

const NaviBanner = () =>
{
    return(
        <div className="menuList">
            <img src={logo} className="menuLogo" alt="logo" />
            
            <div className="menuDrop">
                <p className="menuButton">
                    Portals
                </p>
                <div className='sublist'>
                    {clientsInfo.map(clientstuff =>(
                        <a className="menuLink" key={clientstuff.clientName} href={clientstuff.weblink} target="noreferrer">
                            {clientstuff.clientName}
                        </a>
                    ))}
                </div>
            </div>

            <div className="menuDrop">
                <p className="menuButton">
                    Form Filling
                </p>
                <div className='sublist'>
                    {/* <Link className="menuLink" to="/Holroyd">HH TEST</Link>
                    <Outlet /> */}
                </div>
            </div>

            <div className="menuFiller"></div>
        </div>
    )
}
export default NaviBanner