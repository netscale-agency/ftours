import React, { useMemo, useState } from "react";
import "../styles/pages/Putovanja.css";
import DestinationLayoutGrid from "../components/DestinationLayoutGrid";
import axios from "axios";

function EuropskaDaleka() {
  const [destinations, setDestinations] = useState([]);

  const dataCall = () => {
    axios.get("http://localhost:8000/").then((res) => {
      setDestinations(res.data);
    });
  };

  useMemo(async () => {
    await dataCall();
  }, []);

  return (
    <>
      {destinations &&
      destinations.filter((item) => item.categories === "Europska putovanja")
        .length ? (
        <div id="europska-putovanja" className="ftours-yellow">europska putovanja</div>
      ) : null}
      {destinations &&
      destinations.filter((item) => item.categories === "Europska putovanja")
        .length ? (
        <DestinationLayoutGrid
          destinationscards={destinations.filter(
            (item) => item.categories === "Europska putovanja"
          )}
        />
      ) : null}
      {destinations &&
      destinations.filter((item) => item.categories === "Daleka putovanja")
        .length ? (
        <div id="daleka-putovanja" className="ftours-red">daleka putovanja</div>
      ) : null}
      {destinations &&
      destinations.filter((item) => item.categories === "Daleka putovanja")
        .length ? (
        <DestinationLayoutGrid
          destinationscards={destinations.filter(
            (item) => item.categories === "Daleka putovanja"
          )}
        />
      ) : null}
      {destinations &&
      destinations.filter((item) => item.categories === "Nova godina")
        .length ? (
        <div id="nova-godina" className="ftours-blue">nova godina</div>
      ) : null}
      {destinations &&
      destinations.filter((item) => item.categories === "Nova godina")
        .length ? (
        <DestinationLayoutGrid
          destinationscards={destinations.filter(
            (item) => item.categories === "Nova godina"
          )}
        />
      ) : null}
      {destinations &&
      destinations.filter((item) => item.categories === "Krstarenja").length ? (
        <div id="krstarenja" className="ftours-purple">krstarenja</div>
      ) : null}
      {destinations &&
      destinations.filter((item) => item.categories === "Krstarenja").length ? (
        <DestinationLayoutGrid
          destinationscards={destinations.filter(
            (item) => item.categories === "Krstarenja"
          )}
        />
      ) : null}
    </>
  );
}

export default EuropskaDaleka;
