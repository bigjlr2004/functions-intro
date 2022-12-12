const fillGasTank = (gallons) => {
    if(gallons > 15){
        console.log("You can not put more than 15 gallons of gas.");
    } else{
    console.log(`I filled the tank with ${gallons} gallons of gas`)
}
}

fillGasTank(1215)