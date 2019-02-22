import React, { Component } from 'react'
import './App.css';
import { SampleList } from "./containers/sample-list"
import { AddItem } from "./containers/add-item"

class App extends Component {
  render() {
    return (
      <div id="container">
        <aside id="sidebar">Sidebar</aside>
        <section id="main">
          <SampleList />
          <section id="second-section">
            Second Section
            <AddItem/>
          </section>
        </section>
      </div>
    );
  }
}

export default App;
