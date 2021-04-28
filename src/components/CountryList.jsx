import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addFavoriteAsync } from '../store/action';

function CountryList(props)  {
        const { country } = props
        let history = useHistory()
        const dispatch = useDispatch()

        const toCountryDetail = (event, name) => {
            event.preventDefault()
            history.push('/country/' + name)
          }

        const addToFavorite = (event, payload) => {
            event.preventDefault()
            dispatch(addFavoriteAsync(payload))
        }

        return (
            <>
                <div className="col-lg-3 mb-4">
                    <div className="card">
                        <img className="img-card-fix rounded nation-flag" src={country.flag} alt="country"/>
                        <div className="card-body card-body-main">
                            <h5 className="card-title"> {country.name} </h5>
                            <p className="card-text"><i className="fas fa-city"></i> Capital: {country.capital} </p>
                            <p className="card-text"><i className="fas fa-user-friends"></i> Population: {new Intl.NumberFormat('de-DE').format(country.population)} </p>
                            <div className="d-flex justify-content-around btn-card">
                                <p onClick={(event) => toCountryDetail(event, country.name)} className="btn btn-dark"><i className="fas fa-info-circle"></i> Detail </p>
                                <p onClick={(event) => addToFavorite(event, country)} className="btn btn-outline-dark"><i className="fas fa-flag"></i> Favorite </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
          )
        }

export default CountryList