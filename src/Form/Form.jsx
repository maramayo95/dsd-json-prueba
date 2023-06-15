import  { useState  } from "react";

// eslint-disable-next-line react/prop-types
const Formulario = () => {
    
    // Estado para almacenar como objeto los datos del formulario
    const [datos, setDatos] = useState({
        name: '',
        subname: '',
        age: ''
    })
    // Estado para indicar si el formulario se ha llenado

    // onChange
    const manejoCambioTexto = (event) => {
        // event.target.name = Hace referencia al atributo
        // event.target.value = Hace referencia al valor del atributo
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })

    }
    // onSubmit
    const enviarDatos = event => {
        event.preventDefault()
        const url = "http://localhost:3500/data";
        const enviarDatos = {
            id: Date.now(),
            ...datos
        }
        
        const opciones = {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
             },
            body: JSON.stringify(enviarDatos)
    };

   
        fetch(url, opciones)
        .then(function(response) {
        // Verificar el estado de la respuesta
        if (response.ok) {
         return response.json();
        } else {
         throw new Error("Error en la solicitud: " + response.status);
        }
        })
   
    }
    
    // En el condicional con el operador ternario, si el formulario se ha llenado, se mostrará el mensaje
    return (
        <>
           

                <form className="row" onSubmit={enviarDatos}>
                    <div className="col-md-4">
                        <input 
                        type="text" 
                        placeholder="Nombre" 
                        className="form-control" 
                        onChange={manejoCambioTexto} 
                        name="name" />
                    </div>
                    <div className="col-md-4">
                        <input 
                        type="text" 
                        placeholder="Apellido" 
                        className="form-control" 
                        onChange={manejoCambioTexto} 
                        name="subname" />
                    </div>
                    <div className="col-md-4">
                        <input 
                        type="text" 
                        placeholder="Edad" 
                        className="form-control" 
                        onChange={manejoCambioTexto} 
                        name="age" />
                    </div>
                    <div className="col-md-4">
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </div>
                </form>
        
        </>
        )
    }
    
    export default Formulario