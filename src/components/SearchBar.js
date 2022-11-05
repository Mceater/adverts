import React, { useState } from "react";
import "../styles/SearchBar.css"

function SearchBar({ data, setSearch }) {
  
  

  
  const [filteredData, setFilteredData] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  

  var colors = ['#FFEFD5', '#FFF1D0', '#FFF0B7'];

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

    const uniqueCategories =[];

    newFilter.map(element => {
       return element.filter((element) =>{
        const isDuplicate = uniqueCategories.includes(element);
        if(!isDuplicate){
          uniqueCategories.push(element);
          return true
        }
        return false;
       })
    })

          
    if(searchWord === ""){
      setFilteredData("")
    }
    else{
      setFilteredData(uniqueCategories)
    }

}


 const changeInput = (event) =>{
 
  setSearchWord(event.target.value);
  setSearch(event.target.value);

 }

  
  return (

    <div className="search">
        <div className="searchInputs">
              <input type="text" placeholder="Search For Categories" value={searchWord} onChange={handleFilter}/>    
        </div>
        {filteredData.length !== 0 && (
        <div className="dataResult">
            {filteredData.map((value, key)=>{
               return(
                <div id="order" key={key}>
                  <button id="datacategory" style={{background: colors[Math.floor(Math.random() * colors.length)]}} value={value} onClick={changeInput}>{value}</button>
               </div>
              );
            })}
        </div>
        )}
    </div>
  );

}
export default SearchBar;