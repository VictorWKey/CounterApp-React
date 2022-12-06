import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ( { value }) => {

    // Hooks
    const [counter, setCounter] = useState( value ); // Entre parentesis va el valor inicial de ese Hook, y se encuentra en la primera posicion del arreglo que devuelve esta funcion useState 
    // Cuando mandamos a llamar un setCounter lo que hace es decirle a react, que el estado de lo que tenemos arriba cambio, por consecuencia tiene que volver a ejecutar la renderizacion del componente 

    const handleAdd = (e) => { 
        // value = 1000; // Este cambio se realizara pero no lo actualizara react, para eso se necesitara el useState Hook
        setCounter( counter + 1 ); // El nuevo estado sera lo que viene entre parentesis
        // setCounter( (c) => c + 1 ); // Tambien se le puede mandar un callback. Lo que retorne ese callback sera el nuevo estado y por lo tanto se actualizara. En ese callback podriamos pasarle un argumento, el cual se refiere al valor inicial del Hook, en este caso es 0
    }; // Si este no va usara ninguna prop, lo ideal seria ponerla fuera del componente, ya aqui asi no vuelve a asignar un espacio en memoria en esta funcion
    // Basicamente, las props no nos sirven para actualizar automaticamente un valor y mostrarlo en pantalla, en cambio los hooks si, ya que estos los podemos controllar
    //Claramente el Hook utilizado aqui, solo cambiara el estado de este componente 
    // Cuando el estado cambia, se vuelve a renderizar el componente, vuelve a mandarlo a llamar. // Si pusieramos un console.log en el componente nos podriamos dar cuenta de eso, ya que cuando cambia el estado, se volvera a hacer otro console.log. // El hecho de que al cambiar el estado, se vuelva a renderizar el componente, puede llegar a ser malo, ya que, imaginemos que vamos a hacer un un post, este se va ejecutar cada vez que haya un cambio de estado, lo cual no es bueno y se puede controlar con otros hooks que veremos a continuacion
    // En resumen, el hook hace un cambio en el state y cuando este cambia, se vuelve a renderizar todo el componente y se va guardando el valor del state cambiado
    // Que quede claro que "vite" es independiente de lo que hace el hook. Vite detecta cambios en el archivo de jsx (cuando guardamos), mientras que el hook detecta cambios en el state. Osea que el hook no actualiza la pagina, sino que hace el cambio en tiempo real por asi decirlo


    const handleDecrement = () => {
        setCounter( counter - 1);
    };

    const handleReset = () => {
        setCounter( value );
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleDecrement }> -1 </button>
            <button onClick={ handleReset }> Reset </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}