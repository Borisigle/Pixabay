import React, {useState} from 'react';
import Error from './Error';


const Formulario = () => {

    const [termino, setTermino] = useState('')
    const [error, setError] = useState(false)

    const buscarImagenes = e => {
        e.preventDefault();

        if(termino.trim() === '') {
            setError(true);
            return;
        }

        setError(false);


    }

    return ( 
        <form
            onSubmit={buscarImagenes}
        >
            <div className='row'>
                <div className='form-group col-md-8'>
                    <input 
                        type='text'
                        className='form-control form-control-lg'
                        onChange={e => setTermino(e.target.value)}
                    />
                </div> 

                <div className='form-group col-md-4'>
                    <input 
                        type='submit'
                        className='btn btn-lg btn-danger btn-block'
                        value='Buscar'
                        

                    />
                </div>   

                {error ? <Error mensaje='Debes agregar un termino de busqueda' /> : null}

            </div>
            
            
        </form>
     );
}
 
export default Formulario;