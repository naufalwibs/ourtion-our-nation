import Loader from "react-loader-spinner";

function LoadingPage() {
  return (
    <section id="loading-page">
      <div className="container-fluid justify-content-center">
        <div className="col-lg p-5 mt-5">
          <Loader
            className="loader-margin"
            type="Circles"
            color="#00BFFF"
            height={80}
            width={80}
          />
        </div>
        <div className="col-lg ">
          <p className="text-center">Please Wait...</p>
        </div>
      </div>
    </section>
  );
}

export default LoadingPage;
