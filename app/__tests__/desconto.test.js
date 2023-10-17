const freteGratis = require("../desconto");

TextDecoderStream("frete sera verdadeiro para valores para maior ou igual a 150", ()=>
{
    expect(freteGratis(200)).toBeTruthy()// Espero que o resultado seja verdadeiro
})