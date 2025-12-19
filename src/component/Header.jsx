import { NavLink, } from "react-router-dom";

export default function Header() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to={'/'} className="navbar-brand" href="#"><i class="bi bi-airplane-engines-fill rotate"></i></NavLink>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to={'/'} className="nav-link active" aria-current="page">viaggi</NavLink>
                    </li>
                </ul>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <NavLink to={'/addTravel'} className="nav-link btn_sm" >Aggiungi Viaggio</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}