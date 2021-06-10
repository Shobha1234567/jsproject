document.write("<h1> I am an External javascript</h1>");
function showDate(){
	document.getElementById('Datep').innerHTML = Date();
   
}
document.write("<h1> I am an Internal javascript</h1>");
function calculateInterest(){
	let principal = document.getElementById('p').value;

	let time = document.getElementById('t').value;
	
	let rate = document.getElementById('r').value;
    
	let si = principal*time*rate / 100;
	document.getElementById('info').innerHTML = si;
	alert(si);
}
   let a = 50;
   let b = 10;
   let sum = a + b;
   let mul = a*b;
   let div = a/b;
   let mod = a%b;
   /*document.write(sum);
   Alert User
   alert ("I am Shova");
   */
   //console.log(sum);
   /*let fname = "Shova ";
   let lname = "Pandey";
   document.write(fname + " " + lname);
   
   document.write();*/
   
   // condition//
   
   
   /*let myAge = 20;
   
   if(myAge > 18){
	   document.write("You are voter");
   }
   else{
	   document.write("You are not voter<br>");
   }*/
  /*
  
  // loop //
  //for loop//
  
   for(let i= 1;i<=100;i++){
	   document.write("<br> Shova");
   }*/
   //while loop//
   /*let i=1;
   while(i<=100){
	   document.write("<br>" +i);
	   i++;
   }*/
   //Do while loop//
   /*Let a=0;
   do{
	document.write(a++);
	
   }while(a<=100);*/
   
   //array//
   
   let student1 = "hari sharma";
   let student2 = "shova Pandey";
   
   const days = ['Sunday', 'Monday'];
   document.write(days[0]);
   
   
   