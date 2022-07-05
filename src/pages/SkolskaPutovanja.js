import React, { useMemo, useState } from "react";
import "../styles/pages/Putovanja.css";
import DestinationLayoutGrid from "../components/DestinationLayoutGrid";
import axios from "axios";

function SkolskaPutovanja() {
  const [destinations, setDestinations] = useState([]);

  const dataCall = () => {
    axios.get(process.env.REACT_APP_API_RITAM_KEY).then((res) => {
      setDestinations(res.data);
    });
  };

  useMemo(async () => {
    await dataCall();
  }, []);

  if (destinations) {
    return (
      <>
        {destinations &&
        destinations.filter((item) => item.categories === "Izleti").length ? (
          <div id="izleti" className="ftours-yellow">
            izleti
          </div>
        ) : null}
        {destinations &&
        destinations.filter((item) => item.categories === "Izleti").length ? (
          <DestinationLayoutGrid
            destinationscards={destinations.filter(
              (item) => item.categories === "Izleti"
            )}
          />
        ) : null}
        {destinations &&
        destinations.filter((item) => item.categories === "Osnovne skole")
          .length ? (
          <div id="osnovne-skole" className="ftours-red">
            osnovne škole
          </div>
        ) : null}
        {destinations &&
        destinations.filter((item) => item.categories === "Osnovne skole")
          .length ? (
          <DestinationLayoutGrid
            destinationscards={destinations.filter(
              (item) => item.categories === "Osnovne skole"
            )}
          />
        ) : null}
        {destinations &&
        destinations.filter((item) => item.categories === "Srednje skole")
          .length ? (
          <div id="srednje-skole" className="ftours-purple">
            srednje škole
          </div>
        ) : null}
        {destinations &&
        destinations.filter((item) => item.categories === "Srednje skole")
          .length ? (
          <DestinationLayoutGrid
            destinationscards={destinations.filter(
              (item) => item.categories === "Srednje skole"
            )}
          />
        ) : null}
      </>
    );
  } else {
    return <></>;
  }
}

export default SkolskaPutovanja;
