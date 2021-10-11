class Car{
    constructor(make, model, weight){
        this.make = make;
        this.model = model;
        this.weight = weight;
        this.scrapWeight = Utility.scrapWeight(weight);
    }
    scrapRemoved(){
        return this.weight - this.scrapWeight;
    }
}

class Main{
    constructor(){
        this.cars = [];
        document.querySelector("#addBtn").addEventListener("click", e => this.addCar(e));
        document.querySelector("#displayBtn").addEventListener("click", e => this.displayCars(e));
        this.message = document.querySelector("#message");
        this.result = document.querySelector("#result");
    }
    addCar(e){
        let make = document.querySelector("#cMake");
        let model = document.querySelector("#cModel");
        let weight = document.querySelector("#cWeight");
        if(make.checkValidity() && model.checkValidity() && weight.checkValidity()){
            this.message.style.opacity = "1";
            let userCar = new Car(make.value, model.value, weight.value);
            this.cars.push(userCar);
            console.log(this.cars);
            make.value = "";
            model.value = "";
            weight.value = "";
        }
    }

    displayCars(e){
        e.preventDefault();
        this.result.innerHTML ="";
        this.message.style.opacity = "0";
        this.cars.forEach((car)=>{
            this.result.innerHTML +=`<p>Make: ${car.make} <br>Model: ${car.model} <br>Weight: ${car.weight} lbs <br>Scrap Weight: ${car.scrapWeight} lbs <br> The amount before scrapping will be ${car.scrapRemoved()} lbs<br>----------------------------</p>`;
        })
    }
}

(()=>{
    const main = new Main();
})();