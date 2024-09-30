import Item from "./item"
export default function ItemList({food,isLoading}){
    return <div>
                {isLoading? <p>Loading...</p>:
                food.extendedIngredients.map((item)=>(
                    <Item key={item.item} item={item}/>
                 ))} 
         
    </div>
}