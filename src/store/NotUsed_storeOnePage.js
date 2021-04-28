import { createStore } from 'redux'

const initialState = {
    countries: [],
    country: [],
    favorites: [],
    loadingHome: false,
    errorHome: null,
    loadingDetail: false,
    errorDetail: null
}

function reducer (state = initialState, action) {
    const { type, payload } = action

    if (type === 'countries/setCountries') {
        return {...state, countries: payload}
    } else if (type === 'country/setCountry') {
        return {...state, country: payload}
    } else if (type === 'favorites/addFavorite') {
        return {...state, favorites: [...state.favorites, payload]}
    }

    if (type === 'loadingHome/setLoadingHome') {
        return {...state, loadingHome: payload}
    }

    if (type === 'loadingDetail/setLoadingDetail') {
        return {...state, loadingDetail: payload}
    }

    if (type === 'errorHome/setErrorHome') {
        return {...state, errorHome: payload}
    }

    if (type === 'errorDetail/setErrorDetail') {
        return {...state, errorDetail: payload}
    }

    return state;
}

const store = createStore(reducer)

export default store