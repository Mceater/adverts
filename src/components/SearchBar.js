import React, { useState } from "react";
import "../styles/SearchBar.css"

function SearchBar({ placeholder, data, setSearch }) {
  
  

  
  const [filteredData, setFilteredData] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  



  const handleFilter = async (event) => {
    

   
    setSearchWord( event.target.value)
    const searchWord = event.target.value;
    setSearch(searchWord)
    
    const newFilter = data.map((element) =>{
      return element.categories.filter((element) =>{
              if(element.toLowerCase().includes(searchWord.toLowerCase()) === true)
                {
                    return element
                }
                else{
                  return undefined
                }
            })
        })
          
    if(searchWord === ""){
      setFilteredData("")
    }
    else{
      setFilteredData(newFilter)
    }

}


 const changeInput = (event) =>{
 
  setSearchWord(event.target.value);
  setSearch(event.target.value);

 }

  
  return (

    <div className="search">
        <div className="searchInputs">
            <input type="text" value={searchWord} onChange={handleFilter}/>    
        </div>
        {filteredData.length !== 0 && (
        <div className="dataResult">
            {filteredData.map((value, key)=>{
               return(
                <div id="order" key={key}>
                  {
                    value.map((categories, keys) => {
                      return <div key={keys}><button id="datacategory" value={categories} onClick={changeInput}>{categories}</button></div>
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