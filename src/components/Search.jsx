import { useEffect, useState } from "react";
import styles from "./search.module.css"
const URL="https://api.spoonacular.com/recipes/complexSearch"
const API_KEY="b497037c35f94b188c97fcac75ef40af"
export default function Search({foodData,setFoodData}){
    const [query,setQuery]=useState("pizza")
    useEffect(()=>{
        async function fetchFood(){
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data= await res.json();
            console.log(data.results);
            setFoodData(data.results)
        }
        fetchFood()
    },[query]);
    return(
        <div className={styles.searchContainer}>
            <input type="text"
            className={styles.input}
                   onChange={(e)=>setQuery(e.target.value)}
                   value={query}   
            />
        </div>
    )
}