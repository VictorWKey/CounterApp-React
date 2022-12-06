import PropTypes from 'prop-types';

const newMessage = 'Victor'; // Cuando esta variable es un arreglo, lo que hara es poner sus elementos, pero en el html cada elemento diferente estara entre comillas // Podemos enviar cualquier tipo de dato, excepto un objeto. Eso tirara un error. Para poderlo enviar tendriamos que mandarlo serializado // En el caso de los booleanos, no mostrara nada en la etiqueta pero no dara error
// Mientras las variables no dependan del componente, es recomendando ponerlas afuera, para que cada vez que se rendericen, no tengan volver a asignar valores a espacios en memoria

export const FirstApp = ( { title, subtitle } ) => {
    return (
        <> 
            <h1>{ title }</h1>
            <h2>{ subtitle }</h2>
        </>
    );
} 
// El Fragment nos sirve para meter elementos dentro de el y que los elementos dentro de el no tengan un padre, ya que para retornar varios elementos, es necesario que tenga un padre
// Las props se pasan dentro de la etiqueta del componente
// props siempre enviar un objeto, al cual le podemos agregar propiedades dentro de las etiquetas de los componentes
// Si queremos agregarle valores por defecto a las props, no es ideal que se las pongamos en el parametro, ya que si no vienen explicitamente en la etiqueta y son requeridas, aun asi nos tirara el error. En cambio, si usamos el metodo correcto, no nos tirara error ya que las propiedades "default" entran antes que las asignadas en la etiqueta. Y ocurre lo mismo con los tipos, si aqui le asignamos los valores por defecto pero que no sean del tipo que se les asigno abajo, este sera ignorado, en cambio con la manera correcta de hacerlo, si nos tirara el error
// Las props se envian desde el padre al componente

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
}
// Los proptypes nos ayudan a que los otros programadores que estan en nuestro proyecto, sepan como funcionan las props de nuestros componentes.
// Con el propTypes le asignamos de que tipo debe ser cada una de las props y tambien si deben ser requeridas o no. La aplicacion seguira funcionando pero nos tirara un warning. Tambien debemos utilizar el paquete prop-types. En caso de que no sea requerido pero le hayamos asignado un tipo y ademas no es asignada es propiedad en la etiqueta, no nos tirara ningun warning

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subtitle: 'No hay subtitulo'
}
// Esta es la manera correcta de asignarle valores por default a las props
