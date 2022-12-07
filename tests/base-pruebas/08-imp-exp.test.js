import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe retornar un heroe por Id', () => {
        
        const id = 1;
        const idTest = 1; // Este se crea ya que si comparamos la variable heroe y la variable heroeData, siempre valdran lo mismo, ya que los dos utilizarian la misma variable "id". Por eso hay que crear una para el test y que asi si haya una comparacion y en caso de un error depurarlo

        const hero = getHeroeById( id ); // Esta buscara una data con la variable id
        const heroeData = heroes.find( (heroe) => heroe.id === idTest ) // Esta buscara data con la variable idTest
        expect( hero ).toEqual( heroeData );
        // Lo siguiente equivale a lo anterior pero que pasaria si al heroe con el id 1 le cambiamos sus otras propiedades en su respectivo archivo, ya no seria flexible, por eso es mejor el metodo de arriba
        // expect( hero ).toEqual({ id: 1, name:'Batman', owner: 'DC'})
    })

    test('getHeroeById debe retornar undefined si no existe el Id', () => {
        
        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy(); // Esperara un valor null, undefined o false
    })

    // Tarea
    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const onwnerTest = 'DC'; // Es lo mismo que lo de arriba

        const heroesDC = getHeroesByOwner(owner);
        const heroesData = heroes.filter( (heroe) => heroe.owner === onwnerTest );
        
        expect( heroesDC.length ).toBe(3);
        expect( heroesDC ).toEqual( heroesData );
        // Lo siguiente es el mismo ejemplo que explique en el primer test
        // expect( heroes ).toEqual([
        //     { id: 1, name: 'Batman', owner: 'DC' },
        //     { id: 3, name: 'Superman', owner: 'DC' },
        //     { id: 4, name: 'Flash', owner: 'DC' }
        // ])
    })

    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {

        const owner = 'Marvel';
        const onwerTest = 'Marvel';

        const heroes = getHeroesByOwner(owner);
        const heroesData = heroes.filter( (heroe) => heroe.owner === onwerTest );
        
        expect( heroes ).toEqual( heroesData )
    })




})