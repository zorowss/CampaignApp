import React, { Component } from 'react';
import './filterableTable.css'
import Data from '../data.js'
import Search from './Search.js'
import Table from './Table.js'
window.localStorage.setItem('Data',JSON.stringify(Data))

export default class FilterableTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: '',
            selected: [],
            isPopupActive: false,
            data: Data
        }

    }

    changeSearchQuery = (text) => {
        let tempData = JSON.parse(window.localStorage.getItem('Data'))

        let data = tempData.filter((obj)=> (obj.name.toLowerCase()).includes(text.toLowerCase()))

        this.setState({
            searchText: text,
            data: data
        })


    }

    deleteRow = (id,multiple)=> {
        let tempData = JSON.parse(window.localStorage.getItem('Data'))
        if (!multiple) {
            tempData = tempData.filter((obj) => id !== obj.id);
        }
        else{
            tempData = tempData.filter((obj) => !id.includes(obj.id))
        }

        window.localStorage.setItem('Data',JSON.stringify(tempData))

        let data = JSON.parse(window.localStorage.getItem('Data'))

        this.setState({
            searchText:""
        })

/*        if(this.state.searchText){
            let data = tempData.filter((obj)=> obj.name.includes(text))
        }*/

       this.setState({
           data:data
       })
    }


    render() {

        return (
            <div className="filterTable">
            <Search query={this.state.searchText} queryChanged={this.changeSearchQuery} />

            <Table data={this.state.data} deleteRow={this.deleteRow}/>
            </div>

        )
    }
}