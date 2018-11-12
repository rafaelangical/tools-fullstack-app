import React, { Component } from 'react';
import './removeModal.css';
import axios from 'axios';

class RemoveModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      response: []
    }
  }

  handleRemove() {
    axios.delete(`http://localhost:3000/tools/${this.props.id}`)
    this.props.closeModal();
  }
  
  render() { 

    if (!this.props.show) {
      return null;
    }

    return (
      <div className="App-modal-remove">
        <div className="div-modal-remove-full">
          <div className="div-modal-remove-top">
            <h3><span>X</span> Remove Tool</h3>
            <p>Are you sure you want to remove ?</p>
          </div>
          <div className="div-modal-remove-bottom">
            <button onClick={() => this.props.closeModal()}>Cancel</button>
            <button className="remove-tool-button" onClick={() => this.handleRemove()}>Yes, remove</button>
          </div>
        </div>
      </div>
    )
  }
}

export default RemoveModal;
