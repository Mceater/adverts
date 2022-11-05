import React, { useState } from "react";
import "../styles/SearchBar.css"

function SearchBar({ data, setSearch }) {
  
  

  
  const [filteredData, setFilteredData] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [seeSearch, setSeeSearch] = useState(true)
  

  var colors = ['#FFEFD5', '#FFF1D0', '#FFF0B7'];

  const handleFilter = async (event) => {
    setSeeSearch(true)
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

  
    
const handlePopular= () =>{


  const newFilter = data.map((element) =>{
      return element.categories.map((element) =>{
              return element
            })
        })

  const amount = 0;
  const sortToOne = [];
  console.log(newFilter)
  for(let i= 0; i < newFilter.length; i++){
      for(let j=0; j< newFilter[i].length; j++){
          const newObject = {
              category:newFilter[i][j],
              amount : amount
          }
          sortToOne.push(newObject)
      }
  }

  let tmp4 = [];
  sortToOne.map((o) => {
      console.log(o)
      const existing = tmp4.find(e => e.category === o.category);
  if (existing) {
      existing.amount += 1;
      return true;
  } else {
      tmp4.push({category: o.category, amount: o.amount});
      return false;
  }
  });

  const final = tmp4.filter((element)=>{
      console.log(element.amount)
      if(element.amount === 0)
      {
          return undefined
      }
      else{
          return element
      }
  })
  setSeeSearch(false)
  setSearch("")
  setFilteredData(final)

}


 const changeInput = (event) =>{
 
  setSearchWord(event.target.value);
  setSearch(event.target.value);

 }

 const handleClick =(event) =>{
  console.log(event.target.value)
  setSearch(event.target.value);
}


  
  return (

      <>
        <div className="searchInputs">
              {seeSearch &&
              <input type="text" placeholder="Categories..." value={searchWord} onChange={handleFilter}/>    
              }
              {
                seeSearch && <button id="cbutton"onClick={handlePopular}>PopularCategories</button>
              }
              {
                seeSearch || <button id="dbutton"onClick={handleFilter}>Search Categories</button>
              }
        </div>
        {filteredData.length !== 0 && seeSearch && (
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
        {filteredData.length !== 0 && (seeSearch ||  (
        <div className="dataResult">
            {filteredData.map((value, key)=>{          
               return(
                <div id="order" key={key}>
                  <button id="datacategory" onClick={handleClick} style={{background: colors[Math.floor(Math.random() * colors.length)]}} value={value.category}>{value.category},Popularity:{value.amount}</button>
               </div>
              );
            })}
        </div>
        ))}
   </>
  );

}
export default SearchBar;