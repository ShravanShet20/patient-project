import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import StorePS from './store/StorePS';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PatientSearch from './components/redux-demos/PatientSearch';
import CompNavBar from './components/CompNavBar';
import PatientSearchCountContainer from './components/redux-demos/PatientSearchCountContainer';
import PatientSearchContainer from './components/redux-demos/PatientSearchContainer';

function App() {
  return (
    <div>
      
        
        <p>
         <h1> <center> Patient Management System </center> </h1>
        </p>


        <Provider store={StorePS}>


        <BrowserRouter>

        <CompNavBar/>

        <PatientSearchCountContainer/>

        <Routes>

        <Route path="/Patient-Search" element={<PatientSearchContainer />} />
        
         
        
        </Routes>
      
        </BrowserRouter>

        </Provider>

     
    </div>
  );
}

export default App;
