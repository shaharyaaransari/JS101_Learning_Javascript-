let bill=4000;
let base_price =3999;
let dis=0;

if(bill>=base_price){
dis=bill*0.1;
  bill=bill-dis;
  console.log("the new bill",bill);
}
else{
  console.log("Not eligible")
}