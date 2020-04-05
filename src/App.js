import React, {useState} from 'react';
import './App.css';
import Search from './components/Search';
import 'font-awesome/css/font-awesome.min.css';
import Listing from './components/Listing';
import Popup from './components/Popup';
import axios from 'axios';

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  })
  // const ApiUrl = "https://api.themoviedb.org/3/movie/550?api_key=bd12db97465bbd8d9ab1405d7268dbce";
  // const ApiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=dfe6d885";
  const ApiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=923689fe";
  const search = (e) => {
    if(e.key === "Enter"){
      axios(ApiUrl + "&$=" + state.s).then(({data}) => {
        let results  = data;
        setState(prevState => {
          return{...prevState, results: results}
        })
        console.log("results",data);
      });
    }
  }
  const handleInput = (e) => {
    let s = e.target.value;
    setState(prevState => {
      return {...prevState, s:s}
    });
    console.log(state.s);
  }

  const openPopup = id => {
    axios(ApiUrl + "&$=" + id).then(({data}) => {
      let result = data;
      console.log(result);
      setState(prevState => {
        return{...prevState, selected: result}
      });
    });
  }

  const closePopup = (e) => {
    setState(prevState =>{
      return{...prevState, selected: {}}
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <Search handleInput={handleInput} search={search}/>
        <i className="fa fa-home home" aria-hidden="true"></i>
      </header>
      <Listing results={state.results} openPopup={openPopup}/>
      {(typeof state.selected.Title!= "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
    </div>
  );
}

export default App;
