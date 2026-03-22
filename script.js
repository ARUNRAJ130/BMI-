function bmi(){
    let heightcm =document.getElementById("heig").value;
    let weight =document.getElementById("weig").value;
    
    let heightm =parseFloat(heightcm/100);
    let total = weight / (heightm * heightm);
    
    let result =document.getElementById("result")

    result.innerHTML=`Yours BMI is ${total.toFixed(2)}`;
if(total < 18.5 ){
    result.style.color="red"
    result.innerHTML=`Yours BMI is ${total.toFixed(2)} Underweight`;

}
if(total >= 18.5 && total < 24.9 ){
    result.style.color="#6ce04e"
    result.innerHTML=`Yours BMI is ${total.toFixed(2)} safe`;
}
if(total > 25 && total < 29.9)
{
    result.style.color="orange"
    result.innerHTML=`Yours BMI is ${total.toFixed(2)} Overweight`;
}
if(total > 29.9){
     result.style.color="red"
    result.innerHTML=`Yours BMI is ${total.toFixed(2)} Obese`;
}

};
