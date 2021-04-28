import NavLogo from '../assets/ourtion-nav.png'
import { useHistory } from 'react-router-dom'

function Navbar () {
    let history = useHistory()

    const toHomePage = (event) => {
        event.preventDefault()
        history.push('/')
    }

    const toFavoritesPage = (event) => {
        event.preventDefault()
        history.push('/favorites')
    }


        return (
        <>
            <nav id="nav-bar" className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a onClick={(event) => toHomePage(event)} className="navbar-brand" href="true">
                <img src={NavLogo} alt="" width="110" className="d-inline-block align-top brand-radius"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a onClick={(event) => toHomePage(event)} className="nav-link active" aria-current="page" href="true"><i className="fas fa-globe-asia"></i> Home </a>
                </li>
                <li className="nav-item">
                    <a onClick={(event) => toFavoritesPage(event)} className="nav-link" href="true"><i className="far fa-flag"></i> My Favorite </a>
                </li>
            </ul>
            </div>
            </nav>
        </>
        )
}

export default Navbar