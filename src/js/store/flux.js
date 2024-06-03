const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		people: [],
		peopleProperties: [],
		characterDetails: {
		  1: {
			height: "172",
			mass: "77",
			hair_color: "blond",
			skin_color: "fair",
			eye_color: "blue",
			birth_year: "19BBY",
			gender: "male",
			created: "2024-04-05T19:50:37.528Z",
			edited: "2024-04-05T19:50:37.528Z",
			name: "Luke Skywalker",
			homeworld: "https://www.swapi.tech/api/planets/1",
			url: "https://www.swapi.tech/api/people/1",
		  },
		  2: {
			height: "167",
			mass: "75",
			hair_color: "n/a",
			skin_color: "gold",
			eye_color: "yellow",
			birth_year: "112BBY",
			gender: "n/a",
			created: "2024-04-05T19:50:37.528Z",
			edited: "2024-04-05T19:50:37.528Z",
			name: "C-3PO",
			homeworld: "https://www.swapi.tech/api/planets/1",
			url: "https://www.swapi.tech/api/people/2",
		  },
		  3: {
			height: "96",
			mass: "32",
			hair_color: "n/a",
			skin_color: "white, blue",
			eye_color: "red",
			birth_year: "33BBY",
			gender: "n/a",
			created: "2024-04-05T19:50:37.528Z",
			edited: "2024-04-05T19:50:37.528Z",
			name: "R2-D2",
			homeworld: "https://www.swapi.tech/api/planets/8",
			url: "https://www.swapi.tech/api/people/3",
		  },
		  4: {
			height: "202",
			mass: "136",
			hair_color: "none",
			skin_color: "white",
			eye_color: "yellow",
			birth_year: "41.9BBY",
			gender: "male",
			created: "2024-04-05T19:50:37.528Z",
			edited: "2024-04-05T19:50:37.528Z",
			name: "Darth Vader",
			homeworld: "https://www.swapi.tech/api/planets/1",
			url: "https://www.swapi.tech/api/people/4",
		  },
		  5: {
			height: "150",
			mass: "49",
			hair_color: "brown",
			skin_color: "light",
			eye_color: "brown",
			birth_year: "19BBY",
			gender: "female",
			created: "2024-04-05T19:50:37.528Z",
			edited: "2024-04-05T19:50:37.528Z",
			name: "Leia Organa",
			homeworld: "https://www.swapi.tech/api/planets/2",
			url: "https://www.swapi.tech/api/people/5",
		  },
		  6: {
			height: "178",
			mass: "120",
			hair_color: "brown, grey",
			skin_color: "light",
			eye_color: "blue",
			birth_year: "52BBY",
			gender: "male",
			created: "2024-04-05T19:50:37.528Z",
			edited: "2024-04-05T19:50:37.528Z",
			name: "Owen Lars",
			homeworld: "https://www.swapi.tech/api/planets/1",
			url: "https://www.swapi.tech/api/people/6",
		  },
		  7: {
			height: "165",
			mass: "75",
			hair_color: "brown",
			skin_color: "light",
			eye_color: "blue",
			birth_year: "47BBY",
			gender: "female",
			created: "2024-04-05T19:50:37.528Z",
			edited: "2024-04-05T19:50:37.528Z",
			name: "Beru Whitesun lars",
			homeworld: "https://www.swapi.tech/api/planets/1",
			url: "https://www.swapi.tech/api/people/7",
		  },
		  8: {
			height: "97",
			mass: "32",
			hair_color: "n/a",
			skin_color: "white, red",
			eye_color: "red",
			birth_year: "unknown",
			gender: "n/a",
			created: "2024-04-05T19:50:37.528Z",
			edited: "2024-04-05T19:50:37.528Z",
			name: "R5-D4",
			homeworld: "https://www.swapi.tech/api/planets/1",
			url: "https://www.swapi.tech/api/people/8",
		  },
		  9: {
			height: "183",
			mass: "84",
			hair_color: "black",
			skin_color: "light",
			eye_color: "brown",
			birth_year: "24BBY",
			gender: "male",
			created: "2024-04-05T19:50:37.528Z",
			edited: "2024-04-05T19:50:37.528Z",
			name: "Biggs Darklighter",
			homeworld: "https://www.swapi.tech/api/planets/1",
			url: "https://www.swapi.tech/api/people/9",
		  },
		  10: {
			height: "182",
			mass: "77",
			hair_color: "auburn, white",
			skin_color: "fair",
			eye_color: "blue-gray",
			birth_year: "57BBY",
			gender: "male",
			created: "2024-04-05T19:50:37.528Z",
			edited: "2024-04-05T19:50:37.528Z",
			name: "Obi-Wan Kenobi",
			homeworld: "https://www.swapi.tech/api/planets/20",
			url: "https://www.swapi.tech/api/people/10",
		  },
		},
  
		planets: [],
		planetProperties: [],
		planetDetails: {
		  1: {
			diameter: "10465",
			rotation_period: "23",
			orbital_period: "304",
			gravity: "1 standard",
			population: "200000",
			climate: "arid",
			terrain: "desert",
			surface_water: "1",
			created: "2024-04-05T19:50:37.531Z",
			edited: "2024-04-05T19:50:37.531Z",
			name: "Tatooine",
			url: "https://www.swapi.tech/api/planets/1",
		  },
		  2: {
			diameter: "12500",
			rotation_period: "24",
			orbital_period: "364",
			gravity: "1 standard",
			population: "2000000000",
			climate: "temperate",
			terrain: "grasslands, mountains",
			surface_water: "40",
			created: "2024-04-05T19:50:37.531Z",
			edited: "2024-04-05T19:50:37.531Z",
			name: "Alderaan",
			url: "https://www.swapi.tech/api/planets/2",
		  },
		  3: {
			diameter: "10200",
			rotation_period: "24",
			orbital_period: "4818",
			gravity: "1 standard",
			population: "1000",
			climate: "temperate, tropical",
			terrain: "jungle, rainforests",
			surface_water: "8",
			created: "2024-04-05T19:50:37.531Z",
			edited: "2024-04-05T19:50:37.531Z",
			name: "Yavin IV",
			url: "https://www.swapi.tech/api/planets/3",
		  },
		  4: {
			diameter: "7200",
			rotation_period: "23",
			orbital_period: "549",
			gravity: "1.1 standard",
			population: "unknown",
			climate: "frozen",
			terrain: "tundra, ice caves, mountain ranges",
			surface_water: "100",
			created: "2024-04-05T19:50:37.531Z",
			edited: "2024-04-05T19:50:37.531Z",
			name: "Hoth",
			url: "https://www.swapi.tech/api/planets/4",
		  },
		  5: {
			diameter: "8900",
			rotation_period: "23",
			orbital_period: "341",
			gravity: "N/A",
			population: "unknown",
			climate: "murky",
			terrain: "swamp, jungles",
			surface_water: "8",
			created: "2024-04-05T19:50:37.531Z",
			edited: "2024-04-05T19:50:37.531Z",
			name: "Dagobah",
			url: "https://www.swapi.tech/api/planets/5",
		  },
		  6: {
			diameter: "118000",
			rotation_period: "12",
			orbital_period: "5110",
			gravity: "1.5 (surface), 1 standard (Cloud City)",
			population: "6000000",
			climate: "temperate",
			terrain: "gas giant",
			surface_water: "0",
			created: "2024-04-05T19:50:37.531Z",
			edited: "2024-04-05T19:50:37.531Z",
			name: "Bespin",
			url: "https://www.swapi.tech/api/planets/6",
		  },
		  7: {
			diameter: "4900",
			rotation_period: "18",
			orbital_period: "402",
			gravity: "0.85 standard",
			population: "30000000",
			climate: "temperate",
			terrain: "forests, mountains, lakes",
			surface_water: "8",
			created: "2024-04-05T19:50:37.531Z",
			edited: "2024-04-05T19:50:37.531Z",
			name: "Endor",
			url: "https://www.swapi.tech/api/planets/7",
		  },
		  8: {
			diameter: "12120",
			rotation_period: "26",
			orbital_period: "312",
			gravity: "1 standard",
			population: "4500000000",
			climate: "temperate",
			terrain: "grassy hills, swamps, forests, mountains",
			surface_water: "12",
			created: "2024-04-05T19:50:37.531Z",
			edited: "2024-04-05T19:50:37.531Z",
			name: "Naboo",
			url: "https://www.swapi.tech/api/planets/8",
		  },
		  9: {
			diameter: "12240",
			rotation_period: "24",
			orbital_period: "368",
			gravity: "1 standard",
			population: "1000000000000",
			climate: "temperate",
			terrain: "cityscape, mountains",
			surface_water: "unknown",
			created: "2024-04-05T19:50:37.531Z",
			edited: "2024-04-05T19:50:37.531Z",
			name: "Coruscant",
			url: "https://www.swapi.tech/api/planets/9",
		  },
		  10: {
			diameter: "19720",
			rotation_period: "27",
			orbital_period: "463",
			gravity: "1 standard",
			population: "1000000000",
			climate: "temperate",
			terrain: "ocean",
			surface_water: "100",
			created: "2024-04-05T19:50:37.531Z",
			edited: "2024-04-05T19:50:37.531Z",
			name: "Kamino",
			url: "https://www.swapi.tech/api/planets/10",
		  },
		},
		vehicles: [],
		vehicleProperties: [],
		vehicleDetails: {
		  4: {
			model: "Digger Crawler",
			vehicle_class: "wheeled",
			manufacturer: "Corellia Mining Corporation",
			cost_in_credits: "150000",
			length: "36.8 ",
			crew: "46",
			passengers: "30",
			max_atmosphering_speed: "30",
			cargo_capacity: "50000",
			consumables: "2 months",
			films: [],
			pilots: [],
			created: "2020-09-17T17:46:31.415Z",
			edited: "2020-09-17T17:46:31.415Z",
			name: "Sand Crawler",
			url: "https://www.swapi.tech/api/vehicles/4",
		  },
		  6: {
			model: "T-16 skyhopper",
			vehicle_class: "repulsorcraft",
			manufacturer: "Incom Corporation",
			cost_in_credits: "14500",
			length: "10.4 ",
			crew: "1",
			passengers: "1",
			max_atmosphering_speed: "1200",
			cargo_capacity: "50",
			consumables: "0",
			films: [],
			pilots: [],
			created: "2020-09-17T17:46:31.415Z",
			edited: "2020-09-17T17:46:31.415Z",
			name: "T-16 skyhopper",
			url: "https://www.swapi.tech/api/vehicles/6",
		  },
		  7: {
			model: "X-34 landspeeder",
			vehicle_class: "repulsorcraft",
			manufacturer: "SoroSuub Corporation",
			cost_in_credits: "10550",
			length: "3.4 ",
			crew: "1",
			passengers: "1",
			max_atmosphering_speed: "250",
			cargo_capacity: "5",
			consumables: "unknown",
			films: [],
			pilots: [],
			created: "2020-09-17T17:46:31.415Z",
			edited: "2020-09-17T17:46:31.415Z",
			name: "X-34 landspeeder",
			url: "https://www.swapi.tech/api/vehicles/7",
		  },
		  8: {
			model: "Twin Ion Engine/Ln Starfighter",
			vehicle_class: "starfighter",
			manufacturer: "Sienar Fleet Systems",
			cost_in_credits: "unknown",
			length: "6.4",
			crew: "1",
			passengers: "0",
			max_atmosphering_speed: "1200",
			cargo_capacity: "65",
			consumables: "2 days",
			films: [],
			pilots: [],
			created: "2020-09-17T17:46:31.415Z",
			edited: "2020-09-17T17:46:31.415Z",
			name: "TIE/LN starfighter",
			url: "https://www.swapi.tech/api/vehicles/8",
		  },
		  14: {
			model: "t-47 airspeeder",
			vehicle_class: "airspeeder",
			manufacturer: "Incom corporation",
			cost_in_credits: "unknown",
			length: "4.5",
			crew: "2",
			passengers: "0",
			max_atmosphering_speed: "650",
			cargo_capacity: "10",
			consumables: "none",
			films: [],
			pilots: [
			  "https://www.swapi.tech/api/people/1",
			  "https://www.swapi.tech/api/people/18",
			],
			created: "2020-09-17T17:46:31.415Z",
			edited: "2020-09-17T17:46:31.415Z",
			name: "Snowspeeder",
			url: "https://www.swapi.tech/api/vehicles/14",
		  },
		  16: {
			model: "TIE/sa bomber",
			vehicle_class: "space/planetary bomber",
			manufacturer: "Sienar Fleet Systems",
			cost_in_credits: "unknown",
			length: "7.8",
			crew: "1",
			passengers: "0",
			max_atmosphering_speed: "850",
			cargo_capacity: "none",
			consumables: "2 days",
			films: [],
			pilots: [],
			created: "2020-09-17T17:46:31.415Z",
			edited: "2020-09-17T17:46:31.415Z",
			name: "TIE bomber",
			url: "https://www.swapi.tech/api/vehicles/16",
		  },
		  18: {
			model: "All Terrain Armored Transport",
			vehicle_class: "assault walker",
			manufacturer:
			  "Kuat Drive Yards, Imperial Department of Military Research",
			cost_in_credits: "unknown",
			length: "20",
			crew: "5",
			passengers: "40",
			max_atmosphering_speed: "60",
			cargo_capacity: "1000",
			consumables: "unknown",
			films: [],
			pilots: [],
			created: "2020-09-17T17:46:31.415Z",
			edited: "2020-09-17T17:46:31.415Z",
			name: "AT-AT",
			url: "https://www.swapi.tech/api/vehicles/18",
		  },
		  19: {
			model: "All Terrain Scout Transport",
			vehicle_class: "walker",
			manufacturer:
			  "Kuat Drive Yards, Imperial Department of Military Research",
			cost_in_credits: "unknown",
			length: "2",
			crew: "2",
			passengers: "0",
			max_atmosphering_speed: "90",
			cargo_capacity: "200",
			consumables: "none",
			films: [],
			pilots: ["https://www.swapi.tech/api/people/13"],
			created: "2020-09-17T17:46:31.415Z",
			edited: "2020-09-17T17:46:31.415Z",
			name: "AT-ST",
			url: "https://www.swapi.tech/api/vehicles/19",
		  },
		  20: {
			model: "Storm IV Twin-Pod",
			vehicle_class: "repulsorcraft",
			manufacturer: "Bespin Motors",
			cost_in_credits: "75000",
			length: "7",
			crew: "2",
			passengers: "0",
			max_atmosphering_speed: "1500",
			cargo_capacity: "10",
			consumables: "1 day",
			films: [],
			pilots: [],
			created: "2020-09-17T17:46:31.415Z",
			edited: "2020-09-17T17:46:31.415Z",
			name: "Storm IV Twin-Pod cloud car",
			url: "https://www.swapi.tech/api/vehicles/20",
		  },
		  24: {
			model: "Modified Luxury Sail Barge",
			vehicle_class: "sail barge",
			manufacturer: "Ubrikkian Industries Custom Vehicle Division",
			cost_in_credits: "285000",
			length: "30",
			crew: "26",
			passengers: "500",
			max_atmosphering_speed: "100",
			cargo_capacity: "2000000",
			consumables: "Live food tanks",
			films: [],
			pilots: [],
			created: "2020-09-17T17:46:31.415Z",
			edited: "2020-09-17T17:46:31.415Z",
			name: "Sail barge",
			url: "https://www.swapi.tech/api/vehicles/24",
		  },
		},
  
		favoritesPeople: [],
		favoritesVehicles: [],
		favoritesPlanets: [],
	  },
  
	  actions: {
		addToFavoritesPeople: (id, name) => {
		  const { favoritesPeople } = getStore();
		  const isFavoriteExist = favoritesPeople.find(
			(favorite) => favorite.name === name
		  );
  
		  if (!isFavoriteExist) {
			const newFavorite = { id, name };
			setStore({ favoritesPeople: [...favoritesPeople, newFavorite] });
		  }
		},
  
		addToFavoritesVehicles: (id, name) => {
		  const { favoritesVehicles } = getStore();
		  const isFavoriteExist = favoritesVehicles.find(
			(favorite) => favorite.name === name
		  );
  
		  if (!isFavoriteExist) {
			const newFavorite = { id, name };
			setStore({ favoritesVehicles: [...favoritesVehicles, newFavorite] });
		  }
		},
  
		addToFavoritesPlanets: (id, name) => {
		  const { favoritesPlanets } = getStore();
		  const isFavoriteExist = favoritesPlanets.find(
			(favorite) => favorite.name === name
		  );
  
		  if (!isFavoriteExist) {
			const newFavorite = { id, name };
			setStore({ favoritesPlanets: [...favoritesPlanets, newFavorite] });
		  }
		},
  
		deleteFavoritePerson: (id) => {
		  const { favoritesPeople } = getStore();
		  const updatedFavorites = favoritesPeople.filter(
			(favorite) => favorite.id !== id
		  );
		  setStore({ favoritesPeople: updatedFavorites });
		},
  
		deleteFavoriteVehicle: (id) => {
		  const { favoritesVehicles } = getStore();
		  const updatedFavorites = favoritesVehicles.filter(
			(favorite) => favorite.id !== id
		  );
		  setStore({ favoritesVehicles: updatedFavorites });
		},
  
		deleteFavoritePlanet: (id) => {
		  const { favoritesPlanets } = getStore();
		  const updatedFavorites = favoritesPlanets.filter(
			(favorite) => favorite.id !== id
		  );
		  setStore({ favoritesPlanets: updatedFavorites });
		},
  
		getPeople: async () => {
		  const oldStore = getStore();
		  try {
			const peopleResponse = await fetch(
			  "https://www.swapi.tech/api/people"
			);
			const peopleData = await peopleResponse.json();
			setStore({ ...oldStore, people: peopleData.results });
		  } catch (error) {
			console.log("error fetching people -->", error);
		  }
		},
  
		getPlanets: async () => {
		  const oldStore = getStore();
		  try {
			const planetsResponse = await fetch(
			  "https://www.swapi.tech/api/planets"
			);
			const planetsData = await planetsResponse.json();
			setStore({ ...oldStore, planets: planetsData.results });
		  } catch (error) {
			console.log("error fetching planets -->", error);
		  }
		},
  
		getVehicles: async () => {
		  const oldStore = getStore();
		  try {
			const vehiclesResponse = await fetch(
			  "https://www.swapi.tech/api/vehicles"
			);
			const vehiclesData = await vehiclesResponse.json();
			setStore({ ...oldStore, vehicles: vehiclesData.results });
		  } catch (error) {
			console.log("error fetching vehicles -->", error);
		  }
		},
  
		getCharacterProperties: async (id) => {
			const oldStore = getStore();
	
			try {
			  const characterPropResponse = await fetch(
				"https://www.swapi.tech/api/people/" + id
			  );
			  const characterPropData = await characterPropResponse.json();
			  setStore({
				...oldStore,
				characterProperties: characterPropData.result.properties,
			  });
			} catch (error) {
			  console.log("error fetching character properties -->", error);
			}
		  },
  
		fetchPlanetDetails: async () => {
		  try {
			const updatedPlanetDetails = {};
			const { planets } = getStore();
			for (const planet of planets) {
			  const response = await fetch(planet.url);
			  const data = await response.json();
			  updatedPlanetDetails[planet.uid] = data.result.properties;
			}
			setStore({ planetDetails: updatedPlanetDetails });
		  } catch (error) {
			console.log("error fetching planet details -->", error);
		  }
		},
  
		fetchVehicleDetails: async () => {
		  try {
			const updatedVehicleDetails = {};
			const { vehicles } = getStore();
			for (const vehicle of vehicles) {
			  const response = await fetch(vehicle.url);
			  const data = await response.json();
			  updatedVehicleDetails[vehicle.uid] = data.result.properties;
			}
			setStore({ vehicleDetails: updatedVehicleDetails });
		  } catch (error) {
			console.log("error fetching vehicle details -->", error);
		  }
		},
  
		getPeopleProperties: async (id) => {
		  const oldStore = getStore();
  
		  try {
			const peoplePropRespons = await fetch(
			  "https://www.swapi.tech/api/people/" + id
			);
			const peoplePropData = await peoplePropRespons.json();
			setStore({
			  ...oldStore,
			  peopleProperties: peoplePropData.result.properties,
			});
		  } catch (error) {
			console.log("error fetching people -->", error);
		  }
		},
  
		getPlanetProperties: async (id) => {
		  const oldStore = getStore();
  
		  try {
			const planetPropResponse = await fetch(
			  "https://www.swapi.tech/api/planets/" + id
			);
			const planetPropData = await planetPropResponse.json();
			setStore({
			  ...oldStore,
			  planetProperties: planetPropData.result.properties,
			});
		  } catch (error) {
			console.log("error fetching planet properties -->", error);
		  }
		},
  
		getVehicleProperties: async (id) => {
		  const oldStore = getStore();
  
		  try {
			const vehiclePropResponse = await fetch(
			  "https://www.swapi.tech/api/vehicles/" + id
			);
			const vehiclePropData = await vehiclePropResponse.json();
			setStore({
			  ...oldStore,
			  vehicleProperties: vehiclePropData.result.properties,
			});
		  } catch (error) {
			console.log("error fetching vehicle properties -->", error);
		  }
		},
	  },
	};
  };
  
  export default getState;