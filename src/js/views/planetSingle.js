import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const PlanetSingle = (props) => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  useEffect(() => {
    actions.getPlanetProperties(theid);
  }, []);

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="row">
          <div className="col-md-5">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${theid}.jpg`}
              className="card-img-top"
              alt={theid}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-7 p-4 d-flex flex-column justify-content-between singlePage">
            <div>
              <h2>{store.planetProperties?.name}</h2>
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
                    <h5 className="card-title">Diameter</h5>
                    <p className="card-text">
                      {store.planetProperties?.diameter}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card border-light">
                  <div className="card-body">
                    <h5 className="card-title">Rotation period</h5>
                    <p className="card-text">
                      {store.planetProperties?.rotation_period}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card border-light">
                  <div className="card-body">
                    <h5 className="card-title">Orbital period</h5>
                    <p className="card-text">
                      {store.planetProperties?.orbital_period}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-4 mb-3">
                <div className="card border-light">
                  <div className="card-body">
                    <h5 className="card-title">Climate</h5>
                    <p className="card-text">
                      {store.planetProperties?.climate}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card border-light">
                  <div className="card-body">
                    <h5 className="card-title">Surface water</h5>
                    <p className="card-text">
                      {store.planetProperties?.surface_water}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card border-light">
                  <div className="card-body">
                    <h5 className="card-title">Population</h5>
                    <p className="card-text">
                      {store.planetProperties?.population}
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

PlanetSingle.propTypes = {
  match: PropTypes.object,
};