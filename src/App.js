import React from 'react';
import SearchBar from './Components/SearchBar';
import BookData from "./Data.json";
function App() {
    return (
        <div className='search'>
            <SearchBar placeholder= 'Enter Keyword..' data={BookData}/>
        </div>
    );
}

export default App;



