class Counter{
    static generalCounter = 0

    constructor(responsable){
        this.counter = 0
        this.responsable = responsable
        console.log("constructor ejecutado")
        
    }

    getResponsable () {
        return this.responsable
    }

    count (){
        this.counter++
        Counter.generalCounter++ //pertenece a la clase no a la instancia
    }

    getrIndividualAccount(){
        return this.counter
    }

    getGlobalAccount (){
        return Counter.generalCounter
    }
}
    const counter1 = new Counter("Carlos")
    const counter2 = new Counter("Carolina")

    counter1.count()
    counter2.count()

    console.log(couter1.getrIndividualAccount)
    console.log(count2.getrIndividualAccount)
    console.log(count1.getGlobalAccount)