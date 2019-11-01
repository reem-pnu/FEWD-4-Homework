var num=34;
function cheeckFactor(number){
    if(number%3==0)
    {
       document.writeln("Pling ");
    }
     if(number%5==0)
    {
       document.writeln("Plang ");
        
    } 
     if(number%7==0){
        document.writeln("Plong");
    }
    else if(number%7!==0 && number%5!==0 && number%3!==0)
    {
        document.writeln( "The number "+number+" does not contain 3, 5, or 7 as a factor");
        
    }
}
document.getElementById("demo").innerHTML= num;
cheeckFactor(num);
