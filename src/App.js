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
        genders: []
      },
      people: [],
      isLoading: true
    };
    this.fetchNewPeople=this.fetchNewPeople.bind(this);
    this.handleCheckboxCity = this.handleCheckboxCity.bind(this);
    this.fetchNewPeople();
  }

  fetchNewPeople() {
    fetchPeople().then(data => {
      let citiesList=[];
      for (let i=0; i<data.results.length;i++){
        citiesList.push(data.results[i].location.city)
      }
      const filteredCities = citiesList.filter((item, index) => citiesList.indexOf(item) === index)

      let genderList = [];
      for (let i=0; i<data.results.length;i++){
        genderList.push(data.results[i].gender)
      }
      const filteredGenders = genderList.filter((item, index) => genderList.indexOf(item) === index); 

      this.setState({
        people: data.results,
        filters: {
          cities: filteredCities,
          genders: filteredGenders,
        }
      });
    });
  }

  // handleCheckboxCity(event) {
  //   const city = event.currentTarget.value;
  //   this.setState({ filters: {cities: city} })
  // }

  render() {
    return <div className="App">
    <PeopleList peopleData={this.state.people} filtersData={this.state.filters} />
    <Filter 
      filteredCities={this.state.filters.cities} 
      filteredGenders={this.state.filters.genders}
      handleCheckboxCity={this.handleCheckboxCity}
    />
    </div>;
  }
}

export default App;
