import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        // console.log(user); // Lo mostrara en la misma consola de JEST

        expect( user ).toEqual( testUser); // No podemos utilizar toBe() para evaluar objetos, ya que no los puede comparar debido a que los objetos apuntan a un espacio en memoria diferente. Para eso hay que usar toEqual() o toEstrictEqual()
    })

    test('getUsuarioActivo debe retornar un objeto', () => {
        const nombre = 'Victor';

        const usuario = getUsuarioActivo( nombre );

        expect( usuario ).toStrictEqual({
            uid: 'ABC567',
            username: nombre,
        });

        // expect(received).toEqual(expeced). // Basicamente se leeria como, se espera que este valor recibido sea igual a este otro valor esperado
        // Cuando hacemos el testing, nos devolvera el objeto que estamos comparando. Dependiendo del color, las propiedades perteneceran al valor recibido o esperado, y los que estan de color significa que tiene una propiedad de mas o diferente con respecto al otro
    })

})