
import './App.css'
import Button from './Components/Button'
import Navbar from './Components/Navbar'

function App() {

  const handleClick = () =>{
    alert("click me!")
  }

  return (
    <div>
      <Navbar />
      <h1>Las Latas Cóctel.</h1>
      <Button txtBtn="Compra" handleClick={handleClick}/>
      <Button txtBtn="Tragos Especiales" handleClick={handleClick}/>
      <Button txtBtn="Lo Mejor" handleClick={handleClick}/>
      
      </div> 
  )
}

export default App
