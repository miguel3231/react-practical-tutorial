import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './main-page.css';
import Header from "./header";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/HouseFromQuery";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouse";
import HouseContext from "../context/houseContext";
function App() {
  
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);
  

  return (
    <Router>
      <HouseContext.Provider value={allHouses}>
        <div className="container">
        <Header 
          subtitle="Providing houses all over the world"
          />
          <HouseFilter />
          <Switch>
            <Route path="/searchresults/:country">
              <SearchResults allHouses={allHouses} />
            </Route>
            <Route path="/house:id">
              <HouseFromQuery allHouses={allHouses} />
            </Route>
            <Route path="/">
              <FeaturedHouse house={featuredHouse}></FeaturedHouse>
            </Route>
          </Switch>
        </div>
       </HouseContext.Provider>
    </Router>
    
  );
}

export default App;
