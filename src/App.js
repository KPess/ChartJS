import React from 'react';
import './App.css';
import Charts from './components/BarChart';

class App extends React.Component {
  render() {
    return (
    <div>
     <b>
       <h1 style={{textAlign: "center"}}>Temperature Chart</h1>
       <Charts />
     </b>
    </div>
   )
 };
}
export default App;