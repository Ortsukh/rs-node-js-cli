const { cipher }  = require('../cipher')


describe('Cipher', function() {
    test('check to correct algoritm C1',()=>{
        const strIn = 'This is secret. Message about "_" symbol!'
        const method = "C";
        const action = 1;
        const result = 'Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!'
expect(cipher(strIn, method, action)).toBe(result);
    })
    test('check to correct algoritm A',()=>{
        const strIn = 'This is secret. Message about "_" symbol!'
        const method = "A";
        
        const result = 'Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!'
expect(cipher(strIn, method)).toBe(result);
    })
    test('check to correct algoritm R0',()=>{
        const strIn = 'This is secret. Message about "_" symbol!'
        const method = "R";
        const action = 0;
        const result = 'Lzak ak kwujwl. Ewkksyw stgml "_" kqetgd!'
expect(cipher(strIn, method, action)).toBe(result);
    })
    
})