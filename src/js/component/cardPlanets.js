import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const CardPlanet = () => {
  const { store, actions } = useContext(Context);
  const cardContainerRef = useRef(null);

  const addToFavorites = (id, name) => {
    // Check if the favorite already exists
    const isFavoriteExist = store.favoritesPlanets.find(
      (favorite) => favorite.name === name
    );

    if (!isFavoriteExist) {
      // Add to favorites if it doesn't exist
      actions.addToFavoritesPlanets(id, name);
    }
  };

  return (
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-12">
          <div className="card-slider">
            <h2 className="mainTitle">Planets</h2>
            <div className="card-container" ref={cardContainerRef}>
              {store.planets &&
                store.planets.map((el) => (
                  <div className="card" key={el.uid}>
                    <img
                      src={`https://starwars-visualguide.com/assets/img/planets/${el.uid}.jpg`}
                      className="card-img-top"
                      alt={el.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{el.name}</h5>
                      {store.planetDetails[el.uid] && (
                        <div>
                          <p className="card-text">
                            Population: {store.planetDetails[el.uid].population}
                          </p>
                          <p className="card-text">
                            Terrain: {store.planetDetails[el.uid].terrain}
                          </p>
                          <p className="card-text">
                            Gravity: {store.planetDetails[el.uid].gravity}
                          </p>
                        </div>
                      )}
                      <Link
                        to={`/planetSingle/${el.uid}`}
                        className="btn btn-primary learn-more-btn"
                      >
                        Learn more!
                      </Link>
                      <button
                        className="btn btn-warning ml-2 favorite-btn"
                        onClick={() => addToFavorites(el.uid, el.name)}
                        disabled={store.favoritesPlanets.some(favorite => favorite.name === el.name
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