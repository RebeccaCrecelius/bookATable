import './App.css'
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
    <header className="p-4 flex justify-between">
      <a href="" className="flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
          <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clipRule="evenodd" />
        </svg>

        <span className="font-bold text-xl">Book a Table</span>
      </a>
    
    <div className="flex gap-4 border border-black-400 rounded py-2 pl-6 pr-4 shadow-lg shadow-black-400 items-center">
      <div className="pt-1 pr-2">Cuisine</div>
      <div className="pt-4 pl-2 pr-2 border-l border-black-400"></div>
      <div className="pt-1">Availability</div>
      <div className="pt-4 pl-2 pr-2 border-l border-black-400"></div>
      <div className="pt-1 pr-4">Guests</div>

      <button className="text-blue-grey-900 bg-lightPrimary p-2 rounded-full">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

      </button>
    </div>
    
    <div className="flex gap-2 border border-black-400 rounded py-2 pl-5 pr-4 mr-2 shadow-lg items-center">
      <div className="pt-1 pl-0 pr-2">
        
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"   
        className="size-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </div>
      <div className="bg-lightPrimary text-white p-2 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

      </div>
    </div>
    
    </header>
    </div>
  )
}

export default App
