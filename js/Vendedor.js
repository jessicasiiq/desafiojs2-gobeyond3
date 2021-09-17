class Vendedor {
    constructor (nomeVendedor, salarioFixo, totalVendas, salarioTotal){
        this.nomeVendedor = nomeVendedor;
        this.salarioFixo = salarioFixo;
        this.totalVendas = totalVendas;
        this.salarioTotal = salarioTotal;
    }

    getNomeVendedor(){
        return this.nomeVendedor;
    }

    setNomeVendedor(nomeVendedor){
        this.nomeVendedor = nomeVendedor;
    }

    getSalarioFixo(){
        return this.salarioFixo;
    }

    setSalarioFixo(salarioFixo){
        this.salarioFixo = salarioFixo;
    }

    getTotalVendas(){
        return this.totalVendas;
    }

    setTotalVendas(totalVendas){
        this.totalVendas = totalVendas;
    }

    getSalarioTotal(){
        return this.salarioTotal;
    }

    setSalarioTotal(salarioTotal){
        this.salarioTotal = salarioTotal;
    }
}