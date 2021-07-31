import React from 'react'

const Calender = () => {
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
                      Calender
                      </div>
                      <br /> 
                      Manage Calender
                   </p>
               </div>         
            </div> <br /> <hr/>

            
        </div>
    )
}

export default Calender
