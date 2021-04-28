import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import CountryBorder from '../components/CountryBorder'
import LoadingPage from '../components/LoadingPage';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCountryAsync } from '../store/action';
import { addFavoriteAsync } from '../store/action';


function CountryDetail() {
    const country = useSelector(state => state.countriesReducer.country)
    const loadingDetail = useSelector(state => state.countriesReducer.loadingDetail)
    const errorDetail = useSelector(state => state.countriesReducer.errorDetail)
    const dispatch = useDispatch();
    const params = useParams()

    useEffect(() => {
        dispatch(setCountryAsync(params.name))
    },[dispatch, params.name])
    
    const addToFavorite = (event, payload) => {
        event.preventDefault()
        dispatch(addFavoriteAsync(payload[0]))
    }

    if (loadingDetail || country.length === 0) {
        return <LoadingPage/>
    } 
    
    if (errorDetail) {
        return <h1>Something Has Happened {errorDetail.message}</h1>
    }

    return (
        <>
        <section id="detail-page" className="scrollable-main">

        <div className="container">
            <div className="row pt-5">
                <div className="card col-lg-4 bg-transparent border-fix border-fix">
                    <h1 className="detail-title text-center">Official Flag</h1>
                    <img className="rounded nation-flag" src={country[0].flag} alt="" width="100%"/>
                    <p onClick={(event) => addToFavorite(event, country)} className="btn btn-outline-dark mt-3"><i className="fas fa-flag"></i> Favorite </p>
                    <h1 className="mt-3 detail-title">Neighbouring Country</h1>
                    <div className="d-flex justify-content-between">
                        <CountryBorder borders={country[0].borders}/>
                    </div>
                </div>
                <div className="card bg-transparent col-lg-8 border-fix">
                    <h1 className="detail-title text-center">{country[0].name}</h1>

                    <div className="row">
                        <div className="col-lg-3 mb-3">
                            <div className="card-box rounded shadow-sm py-5 px-4 height-card"><p className="text-center">
                                <i className="fas fa-passport icon-detail"></i>
                            </p>
                                <h5 className="mb-0 text-center">Also Know As</h5><p className="small text-center">{country[0].altSpellings.join(', ')}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 mb-3">
                            <div className="card-box rounded shadow-sm py-5 px-4 height-card"><p className="text-center">
                                <i className="fas fa-globe-europe icon-detail"></i>
                            </p>
                                <h5 className="mb-0 text-center">Continent</h5><p className="small text-center">{country[0].region}, {country[0].subregion}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 mb-3">
                            <div className="card-box rounded shadow-sm py-5 px-4 height-card"><p className="text-center">
                                <i className="fas fa-city icon-detail"></i>
                            </p>
                                <h5 className="mb-0 text-center">Capital</h5><p className="small text-center">{country[0].capital}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 mb-3">
                            <div className="card-box rounded shadow-sm py-5 px-4 height-card"><p className="text-center">
                                <i className="fas fa-money-bill icon-detail"></i>
                            </p>
                                <h5 className="mb-0 text-center">Currencies</h5><p className="small text-center">{country[0].currencies[0].code}, {country[0].currencies[0].name}, Symbol: {country[0].currencies[0].symbol}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 mb-3">
                            <div className="card-box rounded shadow-sm py-5 px-4 height-card"><p className="text-center">
                                <i className="fab fa-connectdevelop icon-detail"></i>
                            </p>
                                <h5 className="mb-0 text-center">Regional Blocs</h5><p className="small text-center">{country[0].regionalBlocs.length === 0 ? "Not in Allegiance" : country[0].regionalBlocs[0].acronym}, {country[0].regionalBlocs.length === 0 ? "No Alias" : country[0].regionalBlocs[0].name}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 mb-3">
                            <div className="card-box rounded shadow-sm py-5 px-4 height-card"><p className="text-center">
                                <i className="fas fa-landmark icon-detail"></i>
                            </p>
                                <h5 className="mb-0 text-center">Province (Gini)</h5><p className="small text-center">Province: {country[0].gini}, area covered: {new Intl.NumberFormat('de-DE').format(country[0].area)} km²</p>
                            </div>
                        </div>

                        <div className="col-lg-3 mb-3">
                            <div className="card-box rounded shadow-sm py-5 px-4 height-card"><p className="text-center">
                                <i className="fas fa-users icon-detail"></i>
                            </p>
                                <h5 className="mb-0 text-center">Population</h5><p className="small text-center">{new Intl.NumberFormat('de-DE').format(country[0].population)}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 mb-3">
                            <div className="card-box rounded shadow-sm py-5 px-4 height-card"><p className="text-center">
                                <i className="fas fa-language icon-detail"></i>
                            </p>
                                <h5 className="mb-0 text-center">Language</h5><p className="small text-center">
                                {
                                    country[0].languages.map((lang, i) => {
                                        if (i === country[0].languages.length - 1) {
                                            return `${lang.name}`
                                        } else {
                                            return `${lang.name}, `
                                        }
                                    })
                                }
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <MapContainer id="map" center={[country[0].latlng[0], country[0].latlng[1]]} zoom={5} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[country[0].latlng[0], country[0].latlng[1]]}>
                    <Popup>
                    {country[0].name}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    </section>
            </>
    )
}

export default CountryDetail