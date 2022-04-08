import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const handleStateChange = (state) => {
    setSelectedState((p) => {
      if (p != state) setSelectedState(state);
      else {
        setSelectedState(null);
      }
    });
    setSelectedCity(null);
  };

  const handleCityChange = (city) => {
    setSelectedCity((p) => {
      if (p != city) setSelectedCity(city);
      else {
        setSelectedCity(null);
      }
    });
  };
  return (
    <div id="main">
      {states.map((state, stateIdx) => {
        return (
          <>
            <div
              className="state"
              key={`state${stateIdx}`}
              onClick={() => {
                handleStateChange(state.name);
              }}
            >
              {stateIdx + 1} {". "}
              {state.name}
            </div>

            {selectedState === state.name &&
              state.cities.map((city, cityIdx) => (
                <>
                  <div
                    className="city"
                    key={`city${cityIdx}`}
                    onClick={() => handleCityChange(city.name)}
                  >
                    {`${stateIdx + 1}.${cityIdx + 1}. `}
                    {city.name}
                  </div>
                  {city.name === selectedCity &&
                    city.towns.map((town, townIdx) => (
                      <div key={`town${townIdx}`} className="town">
                        {" "}
                        {`${stateIdx + 1}.${cityIdx + 1}.${townIdx + 1}. `}
                        {town.name}
                      </div>
                    ))}
                </>
              ))}
          </>
        );
      })}
    </div>
  );
}

export default App;
