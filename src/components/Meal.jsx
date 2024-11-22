import React, { useEffect, useState } from 'react'
import "../style.css"
import axios from 'axios'
const Meal = () => {

    const [meals,SetMeals]=useState([])
    useEffect(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then((result)=>{
            // console.log(result.data.meals)
            SetMeals(result.data.meals)
        }).catch(err=>{
            console.log(err)
        })

    },[])
    const mealsList=meals.map(({strMeal,strMealThumb,idMeal} )=>{
        return(<section className='card'>
            <img src={strMealThumb} alt="" />
            <section className="content">
                <p>{strMeal}</p>
                <p>#{idMeal}</p>
            </section>
        </section>)
    })
  return (
    <div className='items-container'>
        {mealsList}
    </div>
  )
}

export default Meal