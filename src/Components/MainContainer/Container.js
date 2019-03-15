import React, { Component } from 'react';
import axios from 'axios';


//My Components
import apiKey from '../../config.js';
import '../../App.css';
import SearchForm from '../../Components/Header/SearchForm';
import Navigation from '../../Components/Header/Navigation';
import Gallery from './Gallery';







class Container extends Component {
  constructor(props)
  {
  super(props);
  this.state= {
    photos: [],
    loading: true
  }
  }

//You can acces the data when the component is mounted to the DOM
   componentDidMount() {
   this.executeSearch();
  }

// executeSearch will fetch the data needed from the API or return an error if something went wrong
executeSearch= (query='mountain') => {

  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&page=1&format=json&nojsoncallback=1`)
  .then(response => {
    this.setState({
      photos: response.data.photos.photo,
      loading: false
    });
  })
  .catch(error => {
  console.log('Error fetching and parsing data', error);
  });
}





  render(props) {
    var title;
    var display = {display: 'none'};
    if(this.state.photos.length === 0){
      title = <div className="photo-container"><h4 style={display}>Images of {this.props.query}</h4></div>
    }
    else{
      title = <div className="photo-container"><h4> Images of {this.props.query}</h4></div>
    }



    return(
          <div>
            <div className="container">
              <SearchForm onSearch={this.executeSearch} />
              <Navigation />
            <div className="photo-container">
                 {title}
                {
                  (this.state.loading)
                  ? <p>Loading...</p>
                  : <Gallery data={this.state.photos} title={this.state.title} loading={this.state.loading}/>
                }
              </div>
            </div>
          </div>

         );
       }
     }



export default Container;
