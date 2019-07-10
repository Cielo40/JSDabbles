var johnHeight, johnMass, marcusHeight, marcusMass

johnHeight = 1.78; //Metres
johnMass = 78;

marcusHeight = 1.99;
marcusMass = 89;

var BMIjohn = johnHeight / (johnMass * johnMass);
var BMImarcus = marcusHeight / (marcusMass * marcusMass);

console.log(BMIjohn, BMImarcus)

if(BMImarcus > BMIjohn){
    console.log('Marcus\'s BMI is higher than Johns\'s')
}else{
    console.log('John\'s BMI is lower than Marcus\'s')
}
