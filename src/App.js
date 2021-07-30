import {  Route, Switch } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Getdatafirebase from './components/Getdatafirebase';
import Loginform from './components/Loginform';
import Navbar from './components/Navbar';
import Oneinoutdatafirebase from './components/Oneinoutdatafirebase';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
  <Route  path='/Loginform' exact component={Loginform} />
  <Route path='/Calculator' exact component={Calculator} />
  <Route path='/formsubmit' exact component={Getdatafirebase} />
  <Route path='/singledata' exact component={Oneinoutdatafirebase} />
      </Switch>

    </div>
  );
}

export default App;
