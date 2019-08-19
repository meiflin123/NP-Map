import React from 'react';


class SearchBar extends React.Component {
  state = { term: ''} 

  onInputChange = async (e) => {
    await this.setState({ term: e.target.value })
  }

  onClick = e => {
    this.props.handleSearch(this.state.term);
  }

  render () {
    return (
      <div className="SearchBar">
         <label>Search National Park </label>
         <input className="input-control" type="text" value={this.state.term} onChange={this.onInputChange}/>
         <button onClick={this.onClick}>Go!</button>
      </div>
       
    )
  }
}

export default SearchBar;