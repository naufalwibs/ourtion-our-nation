
// const initialState = {
//     countries: [],
//     country: [],
//     favorites: [],
//     borders: [],
//     loadingHome: false,
//     errorHome: null,
//     loadingDetail: false,
//     errorDetail: false
// }

// function reducer (state = initialState, action) {
//     const { type, payload } = action;

//     if (type === 'countries/setCountries') {
//         return {...state, countries: payload}
//     } else if (type === 'country/setCountry') {
//         return {...state, country: payload}
//     } else if (type === 'favorites/addFavorite') {

//         // console.log(state.favorites.indexOf(payload))
//         // if (state.favorites.indexOf(payload) === -1) {
//         //     return {...state, favorites: [...state.favorites, payload]}
//         // }

//         if (state.favorites.length === 0) {
//             return {...state, favorites: [...state.favorites, payload]}
//         } else if (state.favorites.length > 0) {
//             for (let i = 0; i < state.favorites.length; i++) {
//                 if (state.favorites[i].name === payload.name) {
//                     return state
//                 } else if (state.favorites[i].name !== payload.name && i === state.favorites.length - 1) {
//                     return {...state, favorites: [...state.favorites, payload]}
//                 }
//             }
//         }
        

//     } else if (type === 'favorites/deleteFavorite') {
//         return {
//             ...state,
//             favorites: [...state.favorites.filter(favorite => favorite !== payload)]
//         }

//     } else if (type === 'country/setBorders') {
//         return {...state, borders: [...state.borders, payload]}
//         // return {...state, borders: payload}
//     }

//     if (type === 'loadingHome/setLoadingHome') {
//         return {...state, loadingHome: payload}
//     }

//     if (type === 'loadingDetail/setLoadingDetail') {
//         return {...state, loadingDetail: payload}
//     }

//     if (type === 'errorHome/setErrorHome') {
//         return {...state, errorHome: payload}
//     }

//     if (type === 'errorDetail/setErrorDetail') {
//         return {...state, errorDetail: payload}
//     }

//     return state;
// }

// export default reducer;