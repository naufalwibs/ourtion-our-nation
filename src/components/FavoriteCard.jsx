import { useDispatch } from 'react-redux';
import { deleteFavoriteAsync } from '../store/action';
import { useHistory } from 'react-router-dom'

function FavoriteCard(props) {
    const favorite = props.favorite
    const dispatch = useDispatch()
    let history = useHistory()


    const deleteFromFavorites = (event, payload) => {
        event.preventDefault()
        dispatch(deleteFavoriteAsync(payload))
    }

    const toCountryDetail = (event, name) => {
        event.preventDefault()
        history.push('/country/' + name)
    }

    return (
        <>
            <div key={favorite.name} className="col-lg-3 mb-4">
                <div className="card">
                    <img className="img-card-fix rounded nation-flag" src={favorite.flag} alt="country"/>
                    <div className="card-body card-body-main">
                        <h5 className="card-title"> {favorite.name} </h5>
                        <p className="card-text"><i className="fas fa-city"></i> {favorite.capital} </p>
                        <p className="card-text"><i className="fas fa-user-friends"></i> Population: {new Intl.NumberFormat('de-DE').format(favorite.population)} </p>
                        <div className="d-flex justify-content-around btn-card">
                            <p onClick={(event) => toCountryDetail(event, favorite.name)} className="btn btn-dark"><i className="fas fa-info-circle"></i> Detail </p>
                            <p onClick={(event) => deleteFromFavorites(event, favorite)} className="btn btn-outline-dark"><i className="fas fa-eraser"></i> Remove Favorite</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default FavoriteCard