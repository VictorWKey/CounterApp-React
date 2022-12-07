import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {

    test('Debe retornar un string y un numero', () => {
        
        const [letters, numbers] = retornaArreglo();

        // Tambien se pueden comparar tipos
        expect( typeof letters ).toBe('string');
        expect( typeof numbers ).toBe('number');

        // Equivale a lo mismo qe lo de arriba
        expect( letters ).toEqual( expect.any(String) );
        expect( numbers ).toEqual( expect.any(Number) );

        // Se usa el toEqual cuando se quiere evaluar la iguald de condiciones (deep quality)
    })
})