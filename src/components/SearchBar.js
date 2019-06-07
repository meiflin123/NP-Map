import React from 'react';


class SearchBar extends React.Component {
  state = { term: ''} 

  onInputChange = async (e) => {
    await this.setState({ term: e.target.value })
  }

  onClick = e => {
    console.log(this.state.term);
  }

  render () {
    return (
      <div>
         <label>Search a park </label>
         <input className="input-control" type="text" value={this.state.term} onChange={this.onInputChange}/>
         <button onClick={this.onClick}>Go!</button>
      </div>
       
    )
  }
}

export default SearchBar;