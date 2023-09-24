import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import FrontPage from './componets/frontpage';
import SignUp from './componets/signup';
import Profile from './componets/detailpage';
import Bvn from './componets/bankpage';
import MainBar from './componets/mainbar';

function App() {
  return (
    <div className="App">
      {/* <MainBar /> */}
{/* <FrontPage /> */}
{/* <SignUp /> */}
{/* <Profile /> */}
{/* <Bvn /> */}
<Router>
             
      
       
          <Routes>
          
          <Route path='/mainbar' Component={MainBar}  />

         <Route path='/signup' Component={SignUp} />

 
       </Routes>
       
       
 </Router>
    </div>
  );
}

export default App;
