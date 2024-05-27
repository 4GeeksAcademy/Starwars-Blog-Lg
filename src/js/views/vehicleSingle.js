import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleSingle = (props) => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  useEffect(() => {
    actions.getVehicleProperties(theid);
  }, []);

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="row">
          <div className="col-md-5">
            <img
              src={`https://starwars-visualguide.com/assets/img/vehicles/${theid}.jpg`}
              className="card-img-top"
              alt={theid}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-7 p-4 d-flex flex-column justify-content-between singlePage">
            <div>
              <h2>{store.vehicleProperties?.name}</h2>
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
                    <h5 className="card-title">Manufacturer</h5>
                    <p className="card-text">
                      {store.vehicleProperties?.manufacturer}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card border-light">
                  <div className="card-body">
                    <h5 className="card-title">Cost in credits</h5>
                    <p className="card-text">
                      {store.vehicleProperties?.cost_in_credits}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card border-light">
                  <div className="card-body">
                    <h5 className="card-title">length</h5>
                    <p className="card-text">
                      {store.vehicleProperties?.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-4 mb-3">
                <div className="card border-light">
                  <div className="card-body">
                    <h5 className="card-title">Crew</h5>
                    <p className="card-text">{store.vehicleProperties?.crew}</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card border-light">
                  <div className="card-body">
                    <h5 className="card-title">Passengers</h5>
                    <p className="card-text">
                      {store.vehicleProperties?.passengers}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card border-light">
                  <div className="card-body">
                    <h5 className="card-title">Max atmosphering speed</h5>
                    <p className="card-text">
                      {store.vehicleProperties?.max_atmosphering_speed}
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

VehicleSingle.propTypes = {
  match: PropTypes.object,
};