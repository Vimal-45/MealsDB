import React, { useState, useEffect } from 'react';

function Fetchapi() {
  const [meals, setMeals] = useState([]);
  let [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`).then()
    let data = await response.json();
    if (!data.meals) {      
     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
     data = await response.json();
      alert('No food found');    

         }
    setMeals(data.meals); 

  };

  const clearResults = () => {
    setMeals([]);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearResults();
    fetchMeals();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      clearResults();
      fetchMeals();
    }
  };

  return (
    <div>
      <div className="search container-fluid">
        <h2 style={{ color: 'aliceblue' }}>MealsDB</h2>
        <input
          type="text"
          id="inputField"
          placeholder="Enter a food name"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSubmit} className="btn" style={{ background: 'orangered', color: 'white' }}>
          Search
        </button>
      </div>
      <div className="container-fluid flex-container">
        {meals.map((meal) => (
          <div key={meal.idMeal}>
            <img src={meal.strMealThumb} alt="" />
            <p>{meal.strMeal}</p>
            <form action={meal.strYoutube} target="_blank">
              <input type="submit" value="Watch Video" />
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fetchapi;
