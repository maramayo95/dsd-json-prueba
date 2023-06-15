import { useState, useEffect } from 'react'
import Form from './Form/Form'
import './App.css'

function App() {
  const [data, setData] = useState({})
  const [loading,setLoading] = useState(false)

  useEffect(()=> {
    fetch("http://localhost:3500/data")
    .then(res => res.json())
    .then(data => {
      setData(data)
      setLoading(true)
    })

  }, [])

 
  const handleDelete = id => {
    
    const opciones = {
      method: "DELETE",
      headers: {
      "Content-Type": "application/json"
       }
      }

    fetch(`http://localhost:3500/data/${id}`, opciones)
    .then(res => console.log(res))

  }

  useEffect(()=> {
    fetch("http://localhost:3500/data")
    .then(res => res.json())
    .then(data => {
      setData(data)
      setLoading(true)
    })

  }, [handleDelete])


 
 
 
  return (
    <>
       <Form/>
       
       {
        loading ? 
        data?.map(person => (<div key={person.id}>
            <button onClick={()=> handleDelete(person.id)}>X</button>
            <h3>{person.name}</h3>
            <h2>{person.subname}</h2>
            <p>{person.age}</p>
        </div>)) :
        <h1>Cargando...</h1>
      }
    </>
  )
}

export default App
