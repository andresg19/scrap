import { useState } from 'react'
import './App.css'

function App() {
const [product, setProduct] = useState('');
console.log(product)


  return (
    <>
    <h1>Scraping</h1>
    <form action="submit">
    <input type="text" onChange={(e)=> {setProduct(e.target.value)}} placeholder='Ingrese el producto que busca...' />
    <button type='submit'>Buscar</button>
    </form>
    </>
  )
}

export default App
