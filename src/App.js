import React from "react";
import { fetchPeople } from "./services/PeopleService";
import PeopleList from "./components/PeopleList";
import Filter from "./components/Filter";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        cities: [],
        gender: []
      },
      people: [],
      isLoading: true
    };
    this.fetchNewPeople=this.fetchNewPeople.bind(this)
    this.fetchNewPeople();
  }

  fetchNewPeople() {
    fetchPeople().then(data => {
      let citiesList=[];
      for (let i=0; i<data.results.length;i++){
        citiesList.push(data.results[i].location.city)
      }
      const filteredCities = citiesList.filter((item, index) => citiesList.indexOf(item) === index)
      this.setState({
        people: data.results,
        filters: {
          cities: filteredCities,
          gender: data.results.gender
        }
      });
    });
  }

  render() {
    return <div className="App">
    <PeopleList peopleData={this.state.people} filtersData={this.state.filters} />
    <Filter filteredCities={this.state.filters.cities}/>
    </div>;
  }
}

export default App;
