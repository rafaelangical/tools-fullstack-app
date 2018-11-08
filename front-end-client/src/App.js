import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { join } from 'upath';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      response: [],
      data: []
    }

    this.renderData = this.renderData.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/tools')
      .then(res => {
        this.setState({ data: res.data})
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  renderData() {
    const data = this.state.data;
    data.map((item,index)=> {
      return <div key={index}>
        <p>{item}</p>
        <h3>{item.description}</h3>
        {item.tags.map((item,index) => {
          return <ul key={index}>
            <li>{item}</li>
          </ul>
        })}
      </div>
    })
  }

  render() {
    const data = this.state.data;
    console.log(this.state.data);

    return (
      <div className="App">
        <main className="container">
          <section className="div-top-title">
            <h1>VUTTR</h1>
            <h3>Very Useful Tools to Remember</h3>
          </section>
          <section className="div-search-add">
            <div className="div-search-add-left">
              <input type="text" placeholder="search" className="search"/>
              <input type="radio"/><label>search in tags only</label>
            </div>
            <div className="div-search-add-right">
              <button>+ add</button>
            </div>
          </section>
          <section className="section-main">
              {data.map((item,index, data)=> {
                return <div className="div-tools" key={index} style={{border: "1px solid black"}}>
                  <div className="div-tools-top">
                    <a href="#">{item.title}</a>
                    <button>X remove</button>
                  </div>
                  <p>{item.description}</p>
                  {function() {
                    const tag = item.tags;
                    const newarray = new Array(tag).join('');
                    console.log(newarray);
                    return <p className="tags">Tags: {newarray}</p>
                  }()}
                </div>
              })
              }
          </section>
        </main>
      </div>
    )
  }
}

export default App;
