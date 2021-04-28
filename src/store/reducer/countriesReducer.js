const initialState = {
    countries: [],
    country: [],
    borders: [],
    search: [],
    loadingHome: false,
    errorHome: null,
    loadingDetail: false,
    errorDetail: false
}

function countriesReducer(state = initialState, action) {
    const { type, payload } = action

    if (type === 'countries/setCountries') {
        return {...state, countries: payload, search: payload}
    } else if (type === 'country/setCountry') {
        return {...state, country: payload}
    } else if (type === 'country/setBorders') {
        return {...state, borders: payload}
    }

    if (type === 'countries/searchTerm') {
        return {...state, search: [...state.countries.filter(country => country.name.toLowerCase().includes(payload.toLowerCase()))]}
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

    return state
}

export default countriesReducer