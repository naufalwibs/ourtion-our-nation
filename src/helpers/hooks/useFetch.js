// NOT USED ANYMORE

// import { useState, useEffect } from 'react'

// function useFetch(url) {

//     const [countries, setCountries] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         setLoading(true)
//         // setTimeout(() => {
//             fetch(url)
//           .then(res => res.json())
//           .then(countries => setCountries(countries))
//           .catch(err => setError(err))
//           .finally(_ => setLoading(false))    
//         // }, 20000)
//     }, [])
    
//     return {
//         countries,
//         loading,
//         error
//     }
    
// }

// export default useFetch