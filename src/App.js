import Manage_profile from "./components/Manage_profile";
import Account_manager from "./components/Account_manager/Account_manager";
import Bank_details from "./components/Bank_details/Bank_details";
import Business_details from "./components/Business_details/Business_details";
import Calender from "./components/Calender/Calender";
import Manage_Partners from "./components/Manage_Partners/Manage_Partners";
import Manage_session from "./components/Manage_session/Manage_session";
import Manage_Users from "./components/Manage_Users/Manage_Users";
import Settings from "./components/Settings/Settings";
import User_account from "./components/User_account/User_account";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Button from "./components/Button";

function App() {
  return (
    <>
    <Router>
     <div className="App">
           
          <Manage_profile />
          <Switch>
            <Route path="/" exact component={Manage_profile}/>
            <Route path="/components/Account_manager/Account_manager" component={Account_manager} />
            <Route path="/components/Bank_details/Bank_details" component={Bank_details} />
            <Route path="/Business_details" component={Business_details} />
            <Route path="/Manage_Users" component={Manage_Users} />
            <Route path="/Calender" component={Calender} />
            <Route path="/Manage_Partners" component={Manage_Partners} />
            <Route path="/Settings" component={Settings} />
            <Route path="/Manage_session" component={Manage_session} />
            <Route path="/User_account" component={User_account} />
          </Switch>

      </div>
    </Router>

        {/* <div className="Account_manager">
         
    </div>

    <div className="Bank_details">
         
    </div>

    <div className="<Business_details">
        
    </div>

    <div className="<Manage_Users">
         
    </div>

    <div className="Calender">
         
    </div>

    <div className="Manage_Partners">
        
    </div>

    <div className="Manage_session">
         
    </div>

    <div className="Settings">
         
    </div>

    <div className="User_account">
         
    </div>

     */}
    </>
  );
}

const Home = () => (
  <div>
    <Manage_profile/>
  </div>
);
export default App;
