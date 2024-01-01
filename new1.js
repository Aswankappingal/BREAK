var a=93;
var b=103;
var c=83;
var sum=a+b+c;
console.log("the sum is" +sum);
var percentage=(sum/300)*100;
console.log("the percentage is"+percentage+"%");
if(percentage>=90){
    console.log("students is eligble for 3 college");
}
else if(percentage>=80){
    console.log("student is eligble for 2 college");
}
else if(percentage>=70){
    console.log("student is eligble for 1 college");
}
else if(percentage>=60){
    console.log("student is eligble for 0 college");
}
else{
    console.log("not eligble for any college")
}
