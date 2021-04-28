import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export function setCountries(payload) {
    return { type: 'countries/setCountries', payload }
}

export function setCountriesAsync() {
    return (dispatch) => {
        dispatch(setLoadingHome(true))
        fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(countries => {
        dispatch({ type: 'countries/setCountries', payload: countries })
      })
      .catch(err => {
        dispatch({ type: 'errorHome/setErrorHome', payload: err })
      })
      .finally(_ => {
        dispatch(setLoadingHome(false))
      })
    }
}

export function setCountry(payload) {
    return { type: 'country/setCountry', payload }
}

export function setCountryAsync(payload) {
    return (dispatch) => {
        dispatch(setLoadingDetail(true))
        fetch(`https://restcountries.eu/rest/v2/name/${payload}`)
          .then(res => res.json())
          .then(country => {
            dispatch(setCountry(country))
          })
          .catch(err => {
            dispatch({ type: 'errorDetail/setErrorDetail', payload: err })
          })
          .finally(_ => {
            dispatch({ type: 'loadingDetail/setLoadingDetail', payload: false })
          })
    }
}

export function setTermAsync(payload) {
    return (dispatch) => {
        dispatch({ type: 'countries/searchTerm', payload })
    }
}

export function setBorders(payload) {
    return { type: 'country/setBorders', payload }
}

export function addFavorite(payload) {
    return { type: 'favorites/addFavorite', payload }
}

export function addFavoriteAsync(payload) {
    return (dispatch, getState) => {
        const state = getState()

         if (state.favoritesReducer.favorites.length === 0) {
            dispatch({ type: 'favorites/addFavorite', payload })
             MySwal.fire({
                icon: 'success',
                title: 'Succesfully Added to Favorites!',
                text: 'Awesome, discover more',
                footer: '<p>With us, discover the world</p>'
            })
        } else if (state.favoritesReducer.favorites.length > 0) {
            for (let i = 0; i < state.favoritesReducer.favorites.length; i++) {
                if (state.favoritesReducer.favorites[i].name === payload.name) {
                    MySwal.fire({
                        icon: 'error',
                        title: 'Already on Favorite!',
                        text: 'Discover something else.',
                        footer: '<p>With us, discover the world</p>'
                    })
                    break;
                } else if (state.favoritesReducer.favorites[i].name !== payload.name && i === state.favoritesReducer.favorites.length - 1) {
                    dispatch({ type: 'favorites/addFavorite', payload })
                    MySwal.fire({
                        icon: 'success',
                        title: 'Succesfully Added to Favorites!',
                        text: 'Awesome, discover more',
                        footer: '<p>With us, discover the world</p>'
                    })
                }
            }
        }
    }
}

export function deleteFavorite(payload) {
    return { type: 'favorites/deleteFavorite', payload }
}

export function deleteFavoriteAsync(payload) {
    return (dispatch) => {
         MySwal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(deleteFavorite(payload))
                  MySwal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
            })
    }
}

export function setLoadingHome(payload) {
    return { type: 'loadingHome/setLoadingHome', payload }
}

export function setLoadingDetail(payload) {
    return { type: 'loadingDetail/setLoadingDetail', payload }
}

export function setLoadingFavorites(payload) {
    return { type: 'loadingFavorites/setLoadingFavorites', payload }
}

export function setErrorHome(payload) {
    return { type: 'errorHome/setErrorHome', payload }
}

export function setErrorDetail(payload) {
    return { type: 'errorDetail/setErrorDetail', payload }
}

export function setErrorFavorites(payload) {
    return { type: 'errorFavorites/setErrorFavorites', payload }
}