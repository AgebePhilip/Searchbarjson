import React,{useState} from 'react';
import './searchBar.css';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

function SearchBar({placeholder,data}) {
    const [filteredData,setFilteredData]=useState([]);
    const [wordEntered,setWordEntered]=useState("");
   
            const handleFilter=(e)=>{
                const searchWord=e.target.value
                const newFilter=data.filter((value)=>{
                    return value.title.toLowerCase().include(searchWord.toLowerCase())
        
        });
        if(searchWord===""){
            setFilteredData([])
        }
        else{
            setFilteredData(newFilter);
        };
    };
   
        const clearInput=()=>{
            setFilteredData([]);
        setWordEntered("");
        }
    return (
      <div className='search'>
          <div className='searchInputs'>
              <input type='text' placeholder={placeholder} 
              value ={wordEntered} 
              onChange={handleFilter}/>
              <div className='searchIcon'>
                  {filteredData.length===0 ? <SearchIcon/> : <CloseIcon id="clearBtn" onClick={clearInput}/>}
                 
              </div>
          </div>
          {filteredData.length !==0 &&(
          <div className='dataResult'>
              {filteredData.slice (0,5).map((value,key)=>{
                  return(<a className='dataItem' href ={value.link} target='blank'>
                      
                     <p>{value.title}</p>
                      </a>
                  );
              })}
          </div>
          )}
      </div>
      
    );
}



export default SearchBar;