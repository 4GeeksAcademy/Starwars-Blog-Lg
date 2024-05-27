import React, { useContext, useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 
import { Context } from "../store/appContext";
import { Dropdown } from 'react-bootstrap';
import DropdownComponent from 'react-bootstrap/Dropdown'; 

import SearchBar from "./SearchBar";
import react from 'react';

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [totalFavorites, setTotalFavorites] = useState(0);

  useEffect(() => {
    // Calculate total number of favorites
    setTotalFavorites(
      store.favoritesPeople.length +
        store.favoritesVehicles.length +
        store.favoritesPlanets.length
    );
  }, [store.favoritesPeople, store.favoritesVehicles, store.favoritesPlanets]);

  const deleteFavorite = (type, id) => {
    switch (type) {
      case "people":
        actions.deleteFavoritePerson(id);
        break;
      case "vehicles":
        actions.deleteFavoriteVehicle(id);
        break;
      case "planets":
        actions.deleteFavoritePlanet(id);
        break;
      default:
        break;
    }
    // Update total number of favorites after deletion
    setTotalFavorites(totalFavorites - 1);
    // Re-enable the button/link by removing the disabled attribute
    document
      .querySelector(`[href="/single/${id}"]`)
      .removeAttribute("disabled");
  };

  return (
    <nav className="navbar navbar-light bg-dark mb-5 mx-4 fixed-top">
      {" "}
      {/* Added fixed-top class */}
      <Link to="/">
	  <img
        src="https://i.pinimg.com/originals/9e/4b/8c/9e4b8cd05a0e5c0b1e9237d9013417af.png"
        width="100"
        height="50"
        className="d-inline-block align-top logo"
        alt="Home Page"
      />
    </Link>
      <SearchBar
        options={[
          ...store.people.map((person) => person.name),
          ...store.planets.map((planet) => planet.name),
          ...store.vehicles.map((vehicle) => vehicle.name),
        ]}
        onSelect={(selected) => {
          const selectedPerson = store.people.find(
            (person) => person.name === selected
          );
          const selectedPlanet = store.planets.find(
            (planet) => planet.name === selected
          );
          const selectedVehicle = store.vehicles.find(
            (vehicle) => vehicle.name === selected
          );

          if (selectedPerson) {
            console.log("Person UID:", selectedPerson.uid);
            // Redirect for person
            window.location.href = `/single/${selectedPerson.uid}`;
          } else if (selectedPlanet) {
            console.log("Planet UID:", selectedPlanet.uid);
            // Redirect for planet
            window.location.href = `/planetSingle/${selectedPlanet.uid}`;
          } else if (selectedVehicle) {
            console.log("Vehicle UID:", selectedVehicle.uid);
            // Redirect for vehicle
            window.location.href = `/vehicleSingle/${selectedVehicle.uid}`;
          } else {
            // Handle if selected item is not found
            console.error("Selected item not found in store!");
          }
        }}
      />
      <div className="ml-auto">
        <Dropdown>
          <Dropdown.Toggle variant="warning" id="dropdown-basic">
            Favorites
            <span className="badge badge-pill badge-secondary ml-1">
              {totalFavorites}
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {store.favoritesPeople.map((favorite, index) => (
              <Dropdown.Item key={index} className="drop-menu">
                <Link to={`/single/${favorite.id}`} disabled>
                  {favorite.name}
                </Link>
                <i
                  className="fa fa-trash ml-2 position-absolute trash-icon"
                  onClick={() => deleteFavorite("people", favorite.id)}
                ></i>
              </Dropdown.Item>
            ))}
            {store.favoritesVehicles.map((favorite, index) => (
              <Dropdown.Item key={index} className="drop-menu">
                <Link to={`/vehicleSingle/${favorite.id}`}>
                  {favorite.name}
                </Link>
                <i
                  className="fa fa-trash ml-2 position-absolute trash-icon"
                  onClick={() => deleteFavorite("vehicles", favorite.id)}
                ></i>
              </Dropdown.Item>
            ))}
            {store.favoritesPlanets.map((favorite, index) => (
              <Dropdown.Item key={index} className="drop-menu">
                <Link to={`/planetSingle/${favorite.id}`}>{favorite.name}</Link>
                <i
                  className="fa fa-trash ml-2 position-absolute trash-icon"
                  onClick={() => deleteFavorite("planets", favorite.id)}
                ></i>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};
