import React, { Component } from 'react';
import './addModal.css';
import axios from 'axios';

class AddModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      link: '',
      tags: []
    }
    this.createTool = this.createTool.bind(this); 
  }

  createTool() {
    axios.post('http://localhost:3000/tools' , {
      title: this.state.title,
      link: this.state.link,
      description: this.state.description,
      tags: this.state.tags
    })
    .then(resp => {
      console.log(resp)
      this.props.closeModalAdd();
    })
    .catch(err => console.log(err))
  }

  render() {

    if (!this.props.show) {
      return null;
    }

    return (
      <div className="App-modal-add">
        <div className="div-modal-add-full">
          <div className="div-modal-add-top">
            <h3>+ Add new tool</h3>
          </div>
          <div className="div-modal-add-middle">
            <label>Tool Name</label>
            <input type="text" value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}/>
            <label>Tool Link</label>
            <input type="text" value={this.state.link} onChange={(e) => this.setState({link: e.target.value})}/>
            <label>Tool Description</label>
            <textarea type="text" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})}/>
            <label>Tags</label>
            <input type="text" value={this.state.tags} onChange={(e) => this.setState({tags: e.target.value})}/>
          </div>
          <div className="div-modal-add-bottom">
            <button onClick={this.createTool}>Add tool</button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddModal;
