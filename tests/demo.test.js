// test('Esta prueba no debe fallar', () => {
//     if( 4 === 5) {
//         throw new Error('Los dos numeros son iguales');
//     }
// }) // 1st arg = titulo de la prueba // 2nd arg = callback 
// La prueba falla cuando se lanza un error con throw new Error


// describe sirve para agregar un subtitulo a los test del archivo y asi tener las pruebas mejor agrupadas. // No es necesario utilizarlo, es solo para agrupar y mas orden
describe('Pruebas en DemoComponent', () => {

    test('Esta prueba no debe fallar', () => {
        // 1.- Inicializacion
        const message1 = 'Hello World';
    
        // 2.- Estimulo
        const message2 = message1.trim();
    
        // 3.- Observar comportamiento
        expect( message1 ).toBe( message2 ); // Se espera que lo del primer parametro sea igual a lo del toBe, en caso de que no, tirara un error
    
    }) // test es basicamente lo que va testear jest, lo que este dentro, la prueba sera exitosa mientras no tire un error

})

