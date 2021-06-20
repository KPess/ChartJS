import React from 'react';
import './App.css';
import Charts from './components/BarChart';

class App extends React.Component {
  render() {
    return (
    <div>
     <h1 style={{textAlign: "center"}}>Temperature Chart</h1>
     <b><Charts/></b>
    </div>
   )
 };
}
export default App;