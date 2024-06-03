import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterSingle = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchData = async () => {
      await actions.getCharacterProperties(theid); // Await for the async action
      setLoading(false);
    };

    fetchData();
  }, [theid, actions]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="row">
          <div className="col-md-5">
            <img
              src={`https://starwars-visualguide.com/assets/img/people/${theid}.jpg`}
              className="card-img-top"
              alt={`Character ${store.characterProperties?.name}`}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-7 p-4 d-flex flex-column justify-content-between singlePage">
            <div>
              <h2>{store.characterProperties?.name}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                gravida ullamcorper nisi, id dictum ligula vestibulum vel.
                Mauris commodo faucibus nibh, non malesuada enim tempor non.
              </p>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-4 mb-3">
                <div className="card border-light">
                  <div className="card-body">
                    <h5 className="card-title">Height</h5>
                    <p className="card-text">
                      {store.characterProperties?.height}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card border-light">
                  <div className="card-body">
                    <h5 className="card-title">Mass</h5>
                    <p className="card-text">
                      {store.characterProperties?.mass}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card border-light">
                  <div className="card-body">
                    <h5 className="card-title">Hair Color</h5>
                    <p className="card-text">
                      {store.characterProperties?.hair_color}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-4 mb-3">
                <div className="card border-light">
                  <div className="card-body">
                    <h5 className="card-title">Skin Color</h5>
                    <p className="card-text">
                      {store.characterProperties?.skin_color}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card border-light">
                  <div className="card-body">
                    <h5 className="card-title">Eye Color</h5>
                    <p className="card-text">
                      {store.characterProperties?.eye_color}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card border-light">
                  <div className="card-body">
                    <h5 className="card-title">Birth Year</h5>
                    <p className="card-text">
                      {store.characterProperties?.birth_year}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-4 mb-3">
                <div className="card border-light">
                  <div className="card-body">
                    <h5 className="card-title">Gender</h5>
                    <p className="card-text">
                      {store.characterProperties?.gender}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CharacterSingle.propTypes = {
  match: PropTypes.object,
};