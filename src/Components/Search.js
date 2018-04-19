import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props)
    }

    onChangeQuery = (evt) => {
        this.props.queryChanged(evt.target.value)
    }

    render() {
        return (
            <div className="searchBox">
          <input className="campaignSearch" type="test" placeholder="Search by Campaign Name" onChange={this.onChangeQuery} value={this.props.query}/>
            </div>
        );
    }
}

export default Search;