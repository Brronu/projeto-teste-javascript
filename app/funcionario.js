const fucionario ={
    nome="Joâo",
    idade:25,
    salario: 1300,

getSalario(){
    return this.salario
},
setSalario(valo){
    if (valor <=0){
        return false
    }else{
        this.salario = valor
        return
    }
}
}

module.exports = fucionario