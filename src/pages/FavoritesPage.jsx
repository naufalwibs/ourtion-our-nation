import MainLogo from "../assets/ourtion-main-logo.png";
import FavoriteCard from "../components/FavoriteCard";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function FavoritesPage() {
  const favorites = useSelector((state) => state.favoritesReducer.favorites);
  let history = useHistory();

  const toMainPage = (event) => {
    event.preventDefault();
    history.push("/");
  };

  if (favorites.length === 0) {
    return (
      <>
        <section id="favorites-page">
          <div className="container-fluid d-flex justify-content-center mt-5">
            <div className="align-text-center main-logo animate-logo">
              <img src={MainLogo} alt="Ourtion" width="200px" />
            </div>
          </div>
          <div className="container-fluid text-center">
            <div className="col-lg">
              <h1 className="py-5">
                {" "}
                Upss There's No Favorite, Let's Rollin'{" "}
              </h1>
              <button
                onClick={(event) => toMainPage(event)}
                className="btn btn-dark"
              >
                Main Page
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <section id="favorites-page">
      <div className="container-fluid d-flex justify-content-center">
        <div className="align-text-center main-logo animate-logo">
          <img src={MainLogo} alt="Ourtion" width="200px" />
        </div>
      </div>
      <h1 className="text-center mb-5">My Favorite</h1>
      <div className="container scrollable">
        <div className="row row-country">
          {favorites.map((favorite) => {
            return <FavoriteCard key={favorite.name} favorite={favorite} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default FavoritesPage;
