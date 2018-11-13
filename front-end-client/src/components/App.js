import React, { Component, Fragment } from 'react';
import './App.css';
import axios from 'axios';
import AddModal from './addModal.js';
import RemoveModal from './removeModal.js';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      search: '',
      id: 0,
      withTag: false,
      isOpen: false,
      isOpenAdd: false
    }
    this.closeModal = this.closeModal.bind(this);
    this.closeModalAdd = this.closeModalAdd.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/tools')
      .then(res => {
        this.setState({ data: res.data})
      })
      .catch(err => console.log(err))
  }

  remove(index) {
    this.setState({id: index});
    this.setState({isOpen: !this.state.isOpen})
  }

  closeModal() {
    this.setState({isOpen: !this.state.isOpen});
    this.componentDidMount();
  }
  
  closeModalAdd() {
    this.setState({isOpenAdd: !this.state.isOpenAdd});
    this.componentDidMount();
  }


  handleSearch(e) {
    if(e.length<1){
      this.componentDidMount();
    }
    this.setState({search: e});
    const search = this.state.search;
    if(this.state.withTag){
      axios.get(`http://localhost:3000/tools?tags_like=${search}`)
      .then(res => {
        this.setState({ data: res.data})
      })
      .catch(err => console.log(err))
    }else{
      axios.get(`http://localhost:3000/tools?q=${search}`)
      .then(res => {
        this.setState({ data: res.data})
      })
      .catch(err => console.log(err))
    }
  }

  handleSearchWithTags(e) {
    this.setState({search: e});
    const search = this.state.search;
    axios.get(`http://localhost:3000/tools?tags_like=${search}`)
      .then(res => {
        this.setState({ data: res.data})
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  render() {
    const data = this.state.data;
    return (
      <Fragment>
      <div className="App">
        <main className="container">
          <section className="div-top-title">
            <h1>VUTTR</h1>
            <h3>Very Useful Tools to Remember</h3>
          </section>
          <section className="div-search-add">
            <div className="div-search-add-left">
              <input type="text" placeholder="search" className="search" onChange={(e) => this.handleSearch(e.target.value)} value={this.state.search}/>
              <input type="checkbox" onChange={() => this.setState({withTag: true})}/>
              <label>search in tags only</label>
            </div>
            <div className="div-search-add-right">
              <button onClick={() => this.setState({isOpenAdd: !this.state.isOpenAdd})}>+ add</button>
            </div>
          </section>
          <section className="section-main">
              {data.map((item, data)=> {
                return <div className="div-tools"key={item.id} style={{border: "1px solid black"}}>
                  <div className="div-tools-top">
                    <a href={item.id}>{item.title}</a>
                    <button onClick={() => this.remove(item.id)}>X remove</button>
                  </div>
                  <p>{item.description}</p>
                  {function() {
                    const tag = item.tags;
                    const newarray = new Array(tag).join("");
                    return <p className="tags">Tags: {newarray}</p>
                  }()}
                </div>
              })
              }
          </section>
        </main>
        <AddModal 
          show={this.state.isOpenAdd}
          closeModalAdd={this.closeModalAdd}
        />
        <RemoveModal
          show={this.state.isOpen}
          closeModal={this.closeModal}
          id={this.state.id}
        /> 
        </div>
      </Fragment>
    )
  }
}

export default App;
