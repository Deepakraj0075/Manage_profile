import Button from './Button'
import Nav from './Nav'
import { Link } from "react-router-dom";
import Account_manager from './Account_manager/Account_manager';

const Manage_profile = () => {
    return (
        
        <div>
            
           <div class="w-3/4 px-6 py-4 bg-indigo-200 rounded-lg">
               <div class="whitespace-normal font-flow text-indigo-500 text-3xl leading-5">
                   <p class="font-serif text-xl text-emerald-600 justify-start">
                       <div class="flex justify-start -m-0">
                      Home
                      <svg width="24"  height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7">
                          </path>
                      </svg> 
                      </div>
                      <br /> 
                      Manage Profile
                   </p>
               </div>         
            </div> <br /> <hr/><p class="font-serif text-xl text-emerald-600 justify-start px-6">Your account is ONBOARDING</p>
            

            <div class=" px-4 py-3"> 
              <div class="shadow-2xl h-36 w-62  bg-white font-medium rounded-lg flex items-center justify-center ">
                <div class="shadow-2xl w-1/6 h-36 w-20 bg-white font-bold rounded-lg px-3 py-5 items-center justify-center ">
                User Account
                <p class="text-6xl ... px-3 py-3 flex items-center justify-center">
                <i class="far fa-user flex items-center"></i></p>
                 </div>
                 <div class="shadow-2xl w-5/6 h-30 w-40 bg-white rounded-lg  px-6 py-4 items-center justify-center">
                   View your display information, pickup address, login details and primary details
                 </div>
                 <div class="px-5 py-10">
                     <Link to='/components/User_account/User_account'>
                        <Nav/>
                     </Link>
                 </div>
              </div>
            </div>

            <div class=" px-4 py-3"> 
              <div class="shadow-2xl h-36 w-62  bg-white font-medium rounded-lg flex items-center justify-center">
                <div class="shadow-2xl w-1/6 h-36 w-20 bg-white font-bold rounded-lg px-3 py-5 items-center justify-center">
                Account Manager
                  <p class="text-6xl ... px-3 py-3 flex items-center justify-center">
                  <i class="fas fa-user-shield"></i></p>
                 </div>
                 <div class="shadow-2xl w-5/6 h-30 w-40 bg-white rounded-lg  px-6 py-4 items-center justify-center">
                   View your account manager details
                 </div>
                 <div class="px-5 py-10">
                    <Link to='/components/Account_manager/Account_manager"'>
                        <Nav/>
                     </Link>
                  </div>
              </div>
            </div>


            <div class=" px-4 py-3"> 
              <div class="shadow-2xl h-36 w-62  bg-white font-medium rounded-lg flex items-center justify-center">
                <div class="shadow-2xl w-1/6 h-36 w-20 bg-white font-bold rounded-lg px-3 py-5 items-center justify-center">
                Bank Details
                  <p class="text-6xl ... px-3 py-3 flex items-center justify-center">
                  <i class="fas fa-money-check-alt"></i></p>
                 </div>
                 <div class="shadow-2xl w-5/6 h-30 w-40 bg-white rounded-lg  px-6 py-4 items-center justify-center">
                 View your bank details
                 </div>
                 <div class="px-5 py-10">
                    <Link to='/components/Bank_details/Bank_details"'>
                        <Nav/>
                    </Link>
                  </div>
              </div>
            </div>

            <div class=" px-4 py-3"> 
              <div class="shadow-2xl h-36 w-62  bg-white font-medium rounded-lg flex items-center justify-center">
                <div class="shadow-2xl w-1/6 h-36 w-20 bg-white font-bold rounded-lg px-3 py-5 items-center justify-center">
                Business Details
                  <p class="text-6xl ... px-3 py-3 flex items-center justify-center">
                  <i class="fas fa-business-time"></i></p>
                 </div>
                 <div class="shadow-2xl w-5/6 h-30 w-40 bg-white rounded-lg  px-6 py-4 items-center justify-center">
                 View your business details and KYC documents
                 </div>
                 <div class="px-5 py-10">
                    <Link to='/components/Business_details/Business_details'>
                        <Nav/>
                     </Link>
                  </div>
              </div>
            </div>

            <div class=" px-4 py-3"> 
              <div class="shadow-2xl h-36 w-62  bg-white font-medium rounded-lg flex items-center justify-center">
                <div class="shadow-2xl w-1/6 h-36 w-20 bg-white font-bold rounded-lg px-3 py-5 items-center justify-center">
                  Settings 
                  <p class="text-6xl ... px-3 py-3 flex items-center justify-center">
                  <i class="fas fa-cogs"></i></p>
                 </div>
                 <div class="shadow-2xl w-5/6 h-30 w-40 bg-white rounded-lg  px-6 py-4 items-center justify-center">
                   Manage your logistics and FBF settings
                 </div>
                 <div class="px-5 py-10">
                    <Link to='/components/Settings/Settings'>
                        <Nav/>
                     </Link>
                  </div>
              </div>
            </div>

            <div class=" px-4 py-3"> 
              <div class="shadow-2xl h-36 w-62  bg-white font-medium rounded-lg flex items-center justify-center">
                <div class="shadow-2xl w-1/6 h-36 w-20 bg-white font-bold rounded-lg px-3 py-5 items-center justify-center">
                  Calender 
                  <p class="text-6xl ... px-3 py-3 flex items-center justify-center">
                  <i class="far fa-calendar-alt"></i></p>
                 </div>
                 <div class="shadow-2xl w-5/6 h-30 w-40 bg-white rounded-lg  px-6 py-4 items-center justify-center">
                   View your working hours, Holidays list and vacation plans
                 </div>
                 <div class="px-5 py-10">
                    <Link to='/components/Calender/Calender'>
                        <Nav/>
                     </Link>
                  </div>
              </div>
            </div>

            <div class=" px-4 py-3"> 
              <div class="shadow-2xl h-36 w-62  bg-white font-medium rounded-lg flex items-center justify-center">
                <div class="shadow-2xl w-1/6 h-36 w-20 bg-white font-bold rounded-lg px-3 py-5 items-center justify-center">
                Manage Users
                  <p class="text-6xl ... px-3 py-3 flex items-center justify-center">
                  <i class="fas fa-users"></i></p>
                 </div>
                 <div class="shadow-2xl w-5/6 h-30 w-40 bg-white rounded-lg  px-6 py-4 items-center justify-center">
                   Manage your employees, add, edit, delete roles and permission given to access dashboard
                 </div>
                 <div class="px-5 py-10">
                    <Link to='/components/Manage_Users/Manage_Users'>
                        <Nav/>
                     </Link>
                  </div>
              </div>
            </div>

            <div class=" px-4 py-3"> 
              <div class="shadow-2xl h-36 w-62  bg-white font-medium rounded-lg flex items-center justify-center">
                <div class="shadow-2xl w-1/6 h-36 w-20 bg-white font-bold rounded-lg px-3 py-5 items-center justify-center">
                Manage Partners
                  <p class="text-6xl ... px-3 py-3 flex items-center justify-center">
                  <i class="fas fa-handshake"></i></p>
                 </div>
                 <div class="shadow-2xl w-5/6 h-30 w-40 bg-white rounded-lg  px-6 py-4 items-center justify-center">
                   Manage your partners, add, edit, delete roles and permission given to access dashboard
                 </div>
                 <div class="px-5 py-10">
                    <Link to='/components/Manage_Partners/Manage_Partners'>
                        <Nav/>
                     </Link>
                  </div>
              </div>
            </div>

            <div class=" px-4 py-3"> 
              <div class="shadow-2xl h-36 w-62  bg-white font-medium rounded-lg flex items-center justify-center">
                <div class="shadow-2xl w-1/6 h-36 w-20 bg-white font-bold rounded-lg px-3 py-5 items-center justify-center">
                  Manage Session
                  <p class="text-6xl ... px-3 py-3 flex items-center justify-center">
                  <i class="fas fa-history"></i></p>
                 </div>
                 <div class="shadow-2xl w-5/6 h-30 w-40 bg-white rounded-lg  px-6 py-4 items-center justify-center">
                   Manage your sessions, view IP Address and delete sessions.
                 </div>
                 <div class="px-5 py-10">
                    <Link to='/components/Manage_session/Manage_session'>
                        <Nav/>
                     </Link>
                  </div>
              </div>
            </div>
     
     <footer>

     </footer>
    </div>
    )
}

function Home() {
    return (
      <div>
        <Account_manager />
      </div>
    );
  }
export default Manage_profile
