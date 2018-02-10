import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ''};

    // this.onInputChange = this.onInputChange.bind(this);
    // If you ever pass this in a callback function you have to bind it
    // Commented out in this example though...
  }

  onInputChange(event){
    this.setState({term: event})
    // this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''})
  }

  render(){
    return (
      <form className="input-group" onSubmit={(event) => this.onFormSubmit(event)}>
        <input
          placeholder='Get a five-day forecast in your favorite cities!'
          className='form-control'
          value={this.state.term}
          onChange={ (event) => this.onInputChange(event.target.value)}
          // onChange={this.onInputChange}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProp(dispatch){
  return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProp)(SearchBar)
