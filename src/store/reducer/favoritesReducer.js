const initialState = {
    favorites: [],
    errorFavorites: null,
    loadingFavorites: false
}

function favoriteReducer(state = initialState, action) {
    const { type, payload } = action;

    if (type === 'favorites/addFavorite') {
        return {...state, favorites: [...state.favorites, payload]}

    } else if (type === 'favorites/deleteFavorite') {
        return {
            ...state,
            favorites: [...state.favorites.filter(favorite => favorite !== payload)]
        }
    }

    if (type === 'errorFavorites/setErrorFavorites') {
        return {
            ...state,
            errorFavorites: payload
        }
    }

    if (type === 'loadingFavorites/setLoadingFavorites') {
        return {
            ...state,
            loadingFavorites: payload
        }
    }

    return state
}

export default favoriteReducer