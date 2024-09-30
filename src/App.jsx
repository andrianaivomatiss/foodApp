import { useState } from 'react'
import Search from './components/Search'
import FoodLIst from './components/FoodList'
import Nav from './components/Nav'
import"./app.css"
import Container from './components/Container'
import InnerContainer from './components/InnerContainer'
import FooDetails from './components/FoodDetails'


function App() {
  const[foodData,setFoodData]=useState([]);
  const[foodId,setFoodId]=useState("658615")
  return (
    <div className="App">
      <Nav/>
      <Search foodData={foodData} setFoodData={setFoodData}/>
      <Container>
        <InnerContainer>
        <FoodLIst setFoodId={setFoodId} foodData={foodData}/>
        </InnerContainer>
        <InnerContainer>
          <FooDetails foodId={foodId}/>
        </InnerContainer>
      </Container>
    </div>
  )
}

export default App
