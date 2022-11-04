import React, { useState } from "react";
import "../styles/SearchBar.css"

function SearchBar({ placeholder, data, setSearch }) {
  
  

  
  const [filteredData, setFilteredData] = useState([]);
  const [changeFilter, setChangeFilter ] = useState([]);




  const handleFilter = (event) => {
    setChangeFilter([])

    const searchWord = event.target.value;
    setSearch(searchWord)
    for(let i = 0; i<data.length; i++){
    const newFilter = data[i].categories.filter((value)=>{
               
                return value.toLowerCase().includes(searchWord.toLowerCase())
            })
    
    setChangeFilter(oldArray => [...oldArray, newFilter])

};
    if(searchWord === ""){
      setFilteredData("")
    }
    else{
      setFilteredData(changeFilter)
    }

}

  
  return (

    <div className="search">
        <div className="searchInputs">
            <input type="text" placeholder={placeholder} onChange={handleFilter}/>
           
        </div>
        {filteredData.length !== 0 && (
        <div className="dataResult">
            {filteredData.map((value, key)=>{
              return(
                <div key={key}>
                  {
                    value.map((categories, keys) => {
                      return <div key={keys}><p>{categories}</p></div>
                  })}
               </div>
              );
            })}
        </div>
        )}
    </div>
  );

}
export default SearchBar;