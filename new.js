let mark1=90;
let mark2=35;
let mark3=95;
var sum=mark1+mark2+mark3;
console.log("Total mark =" +sum);
var percenatge=sum/300*100;
console.log("And percentage is =" +percenatge+ "%");
switch(true)
    {        
    case (percenatge>=85):console.log("He is eligble for 3 Goverment college ");
    break;
    case (percenatge>=75):console.log("He is eligble for 2 Goverment college ");
    break;
    case (percenatge>=65):console.log("He is eligble for 1 Goverment college ");
    break;
    case (percenatge>=55):console.log("He is eligble for 0 Goverment college ");
    break;
    default:console.log("not eligble");
    }
    

