import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{height: "100%"}}>
		<Layout style={{height: "100%"}}>
		</Layout>
      </div>
    );
  }
}

export default App;
