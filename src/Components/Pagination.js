import React, { Component } from 'react';

class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activePage: this.props.active
        }
    }


    pageChanged = (n) => {
        this.setState({activePage: n});
        console.log(n)
        this.props.onPageChange(n)
    }
    renderPageNo = () => {
        const len = this.props.length
        const pagesArray = []
        for(let i=0;i<len;i++) {
            pagesArray.push({
                n: i + 1,
                isActive: i + 1 == this.state.activePage
            })
        }

        return pagesArray.map((obj) => {
            if(obj.isActive) {
                return (<a href="#" onClick={this.pageChanged.bind(null, obj.n)} className="pag-number active">{obj.n}</a>)
            } else {
                return (<a href="#" onClick={this.pageChanged.bind(null, obj.n)} className="pag-number">{obj.n}</a>)
            }

        })
    }

    render() {
        return (
            <div className="pagination pag-border">
                {this.renderPageNo()}
            </div>
        );
    }
}

export default Pagination;