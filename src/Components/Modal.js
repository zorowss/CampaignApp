import React, { Component } from 'react';


class Modal extends Component {
    render() {
        // Render nothing if the "show" prop is false
        if(!this.props.show) {
            return null;
        }







        return (
            <div className="backdrop">
                <div className="modal" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Change the Campaign Name</h4>
                            <hr/>
                        </div>
                        <div clasName="modal-body">
                            <input type="text" value={this.props.name} />
                        </div>

                        <div className="modal-footer" >
                            <button className="btn-default" onClick={this.props.save}>
                                Save
                            </button>
                            <button className="btn-default" onClick={this.props.onClose}>
                                Close
                            </button>
                        </div>
                    </div>  


                </div>
            </div>
        );
    }
}



export default Modal;