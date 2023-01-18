//////////////////////////  IMPORTS  //////////////////////////
import { useState, useEffect } from "react";
import DisplayCards from "./DisplayCards";
import "./App.css";

function App() {
  ////////////  STATE  ////////////
  const [data, setData] = useState({ villagers: [] });
  const [search, setSearch] = useState("");
  let [filteredVillagers, setFilteredVillagers] = useState([]);
  let [faves, setFaves] = useState([]);


  ////////////  API CALL  ////////////
  useEffect(() => {
    fetch("http://acnhapi.com/v1/villagers/")
      .then((response) => response.json())
      .then((rdata) => {
        rdata = Object.values(rdata);
        setData({ villagers: rdata });
      });
  }, []);
  ///
  const villagerList = data.villagers.map((villager) => {
    return <li>{villager.name["name-USen"]}</li>;
  });
/////////////////
  const getFilteredVillagers = () => {
    if (search === "") {
      return data.villagers;
    }
    return data.villagers.filter((villager) => {
      return villager.name["name-USen"]
        .toLowerCase()
        .includes(search.toLowerCase());
    });
  };
//////////////////////////handle change////////
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  ////////////////handle click////////////////
  const handleClick = (villager) => {
    if (!faves.includes(villager)) {
      setFaves([...faves, villager]);
    }
  };

  return (
    <div className="App">
      <div>
      
        <DisplayCards villagers={faves} />
      </div>
      <div>
        <label htmlFor="villager-search">Search for villagers</label>
        <input
          id="villager-search"
          type="text"
          value={search}
          onChange={handleChange}
        />
      </div>
      
      <DisplayCards
        villagers={getFilteredVillagers()}
        handleClick={handleClick}
      />

      <h2>My Faves</h2>
    </div>
  );
}
export default App;
