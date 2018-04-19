import React, { Component } from 'react';

import Modal from './Modal.js'

import Pagination from './Pagination.js'
class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active:1,
            noOfPages:Math.ceil(this.props.data.length/10),
            selectedRows: [],
            show:false
        }
        this.selectedEditObj = "";

    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.data && nextProps.data.length) {
            this.setState({
                active: 1,
                noOfPages:Math.ceil(nextProps.data.length/10),
                selectedRows:[]
            })
        }

    }

   deleteRowFromTable = (n,multiple) =>{


        this.props.deleteRow(n,multiple)
    }

    changeName = (obj)=>{
        //console.log(obj);
    }

    selectRow = (obj) => {

        let t = this.state.selectedRows

        if(t.includes(obj.id)){

             let index = t.indexOf(obj.id);
            t.splice(index,1)
        }
        else
            t = t.concat([obj.id]);



        this.setState({
           selectedRows : t
        })
    }

    changeName = (obj) => {
        this.selectedEditObj = obj;
        this.setState({
            show:true
        })
    }

    renderRows = () =>{
        let num = this.state.active;

        let d = this.props.data.slice((num-1)*10,num*10);
        d = d.map((obj)=> {
            obj.selected = this.state.selectedRows.includes(obj.id)
            return obj;
        })
        return d.map((obj) => {
            return (<tr>
                <td><input type="checkbox" checked={obj.selected} onChange={this.selectRow.bind(null, obj)}/></td>
                <td>{obj.name}</td>
                <td>{obj.type}</td>
                <td>{obj.lastSavedDate}</td>
                <td><span onClick={this.changeName.bind(null,obj)}><img className="edit"></img></span><span onClick={this.deleteRowFromTable.bind(null,obj.id,false)}><img className="delete"></img></span></td>
            </tr>)
        })
    }

    pageChanged = (n) => {
        this.setState({
            active: n,
        });
    }

    close = ()=>{
        this.setState({
            show:false
        })
    }


    render() {
        return (
           <div className="tableContainer">
               <div>
                   <button className="deleteMultiple" onClick={this.deleteRowFromTable.bind(null,this.state.selectedRows,true)}>Delete Multiple</button>
               </div>

               <table class="campaignTable">
                   
                   <thead>
                   <tr>
                       <th>Select</th>
                       <th>Campaign</th>
                       <th>Type</th>
                       <th>Last Saved</th>
                       <th>Action</th>
                   </tr>
                   </thead>
                   <tbody>
                   {this.renderRows()}

                   </tbody>

               </table>
               <Pagination active={this.state.active} length={this.state.noOfPages} onPageChange={this.pageChanged}/>
               <Modal show={this.state.show} name={this.selectedEditObj.name} onClose={this.close} />
           </div>
        );
    }
}

export default Table;