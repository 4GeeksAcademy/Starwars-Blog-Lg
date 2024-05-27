import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardVehicles = () => {
  const { store, actions } = useContext(Context);
  const cardContainerRef = useRef(null);

  const addToFavorites = (id, name) => {
    // Check if the favorite already exists
    const isFavoriteExist = store.favoritesVehicles.find(
      (favorite) => favorite.name === name
    );

    if (!isFavoriteExist) {
      // Add to favorites if it doesn't exist
      actions.addToFavoritesVehicles(id, name);
    }
  };

  return (
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-12">
          <div className="card-slider">
            <h2 className="mainTitle">Vehicles</h2>
            <div className="card-container" ref={cardContainerRef}>
              {store.vehicles &&
                store.vehicles.map((el) => (
                  <div className="card" key={el.uid}>
                    <img
                      src={`https://starwars-visualguide.com/assets/img/vehicles/${el.uid}.jpg`}
                      className="card-img-top"
                      alt={el.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{el.name}</h5>
                      {store.vehicleDetails[el.uid] && (
                        <div>
                          <p className="card-text">
                            Model: {store.vehicleDetails[el.uid].model}
                          </p>
                          <p className="card-text">
                            Vehicle class:{" "}
                            {store.vehicleDetails[el.uid].vehicle_class}
                          </p>
                          <p className="card-text">
                            Crew members: {store.vehicleDetails[el.uid].crew}
                          </p>
                        </div>
                      )}
                      <Link
                        to={`/vehicleSingle/${el.uid}`}
                        className="btn btn-primary learn-more-btn"
                      >
                        Learn more!
                      </Link>
                      <button
                        className="btn btn-warning ml-2 favorite-btn"
                        onClick={() => addToFavorites(el.uid, el.name)}
                        disabled={store.favoritesVehicles.some(
                          (favorite) => favorite.name === el.name
                        )}
                      >
                        <i className="fa fa-star mr-2"></i>
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="slider-controls"></div>
        </div>
      </div>
    </div>
  );
};