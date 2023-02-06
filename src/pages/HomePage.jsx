import MainLogo from "../assets/ourtion-main-logo.png";
import CountryList from "../components/CountryList";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import LoadingPage from "../components/LoadingPage";
import { setTermAsync, setCountriesAsync } from "../store/action";

function HomePage() {
  const countries = useSelector((state) => state.countriesReducer.countries);
  const loadingHome = useSelector(
    (state) => state.countriesReducer.loadingHome
  );
  const errorHome = useSelector((state) => state.countriesReducer.errorHome);
  const search = useSelector((state) => state.countriesReducer.search);
  const dispatch = useDispatch();

  const editSearchTerm = (e) => {
    dispatch(setTermAsync(e.target.value));
  };

  useEffect(() => {
    dispatch(setCountriesAsync());
  }, [dispatch]);

  if (loadingHome || countries.length === 0) {
    return <LoadingPage />;
  }

  if (errorHome) {
    return <h1>Something Has Happened {errorHome.message}</h1>;
  }

  return (
    <section id="main-page">
      <div className="sticky-top wrapper-top pt-5">
        <div className="container-fluid d-flex justify-content-center">
          <div className="align-text-center main-logo animate-logo">
            <img src={MainLogo} alt="Ourtion" width="200px" />
          </div>
        </div>
        <div className="col-lg d-flex justify-content-center">
          <input
            type="text"
            className="form-control search-bar mb-3"
            placeholder="Search your favorite country here..."
            onChange={editSearchTerm}
          />
        </div>
      </div>
      {/* <div className="container scrollable"> */}
      <div className="container position-relative">
        <div className="row row-country">
          {search.map((country, i) => {
            return (
              <CountryList country={country} key={country.name}></CountryList>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomePage;
