const funcionario = require("../funcionario")

test("Salario sera verdadeiro ao ser igual a um valor passado",()=>{
    expert(funcionario.getSalario()).toBe(1300)
})