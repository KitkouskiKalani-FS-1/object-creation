class Car{
    constructor(){

    }
}

class Main{
    constructor(){
        this.cars = [];
        document.querySelector("#addBtn").addEventListener("click", e => this.addCar(e));
        document.querySelector("#displayBtn").addEventListener("click", e => this.displayCars(e));
        this.message = document.querySelector("#message")
    }
    addCar(e){
        
        this.message.style.opacity = "1";
    }

    displayCars(e){
        this.cars.forEach((car)=>{

        })
    }
    clearForm(){

    }
}

(()=>{
    const main = new Main();
})();