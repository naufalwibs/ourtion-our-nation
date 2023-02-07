// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux'

function CountryBorder(props) {
  // const borders = useSelector(state => state.borders)
  // const loadingDetail = useSelector(state => state.loadingDetail)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //     console.log(props)
  //     fetch(`https://restcountries.eu/rest/v2/alpha/`)
  // }, [])
  // console.log(props.borders)
  if (!props.borders && props.borders?.length === 0) {
    return <h1 className="text-center">There's No Neighbour Country</h1>;
  }

  return (
    <>
      <div className="col-lg row scrollable-border">
        {/* <img className="col-lg-4 rounded nation-flag px-2 pb-3" src="https://restcountries.eu/data/idn.svg" alt="1" width="30%"/>
            <img className="col-lg-4 rounded nation-flag px-2 pb-3" src="https://restcountries.eu/data/idn.svg" alt="1" width="30%"/>
            <img className="col-lg-4 rounded nation-flag px-2 pb-3" src="https://restcountries.eu/data/idn.svg" alt="1" width="30%"/>
            <img className="col-lg-4 rounded nation-flag px-2 pb-3" src="https://restcountries.eu/data/idn.svg" alt="1" width="30%"/>
            <img className="col-lg-4 rounded nation-flag px-2 pb-3" src="https://restcountries.eu/data/idn.svg" alt="1" width="30%"/>
            <img className="col-lg-4 rounded nation-flag px-2 pb-3" src="https://restcountries.eu/data/idn.svg" alt="1" width="30%"/> */}
        {props &&
          props.borders &&
          props.borders.map((border, i) => {
            return (
              <div key={i} className="col-lg-4">
                <h3 className="text-center">{border}</h3>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default CountryBorder;
