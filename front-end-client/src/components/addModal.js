import React, { Component } from 'react';
import './addModal.css';
import axios from 'axios';

class AddModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      response: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/tools')
      .then(res => {
        this.setState({ data: res.data})
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App-modal-add">
        <div className="div-modal-add-full">
          <p>addModal</p>
        </div>
      </div>
    )
  }
}

export default AddModal;
