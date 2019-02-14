// items = {
//     bread:100,
//     cookies:80,
//     sweet:20,
//     garri:50,
//     chicken:500,
//     fanta:250,
//     pizza:2000
//  }
//  cart = []
//  total = 0
//  position = 0
//  action = ""
//  qtys = 0
//  function run() {
//     action = "add"
//     item = prompt("Please enter an item: ")
//     if(items[item])
//     {
//      if (cart.length > 0) {
//         for (i = 0; i < cart.length; i++) {
//             if (cart[i]['item'] == item) {
//                 position = i
//                 action = "update"
//                 break;
//             }
//         }
//     }
//     if (action == "add")
//     {
//         add(item)
//     }else if(action == "update"){
//         update(position)
//     }
//     check = prompt("Do you want to add more items? y/n")
//     if (check == 'n') {
//         pay()
//     } else {
//         run()
//     }
//     }else{
//        run()
//     }
//  }
//  function add(item){
//     data = {
//         item: item,
//         qty: 1
//     }
//     cart.push(data)
//     // console.log(cart)
//  }
//  function update(position){
//     cart[position]['qty']++
//     // console.log(cart)
//  }
//  function display(pay){
//     // console.log(cart)
//     // delete_me = prompt("Do you want to delete an item ")
//     // if (delete_me != "n")
//     // {
//     //     delete_item(delete_me)
//     // }
//     console.log("item \t qty \t total")
//     console.log("-------------------------------------------")
//     for (i=0; i < cart.length;i++){
//      total = total + (items[cart[i]['item']] * cart[i]['qty'])
//      qtys += cart[i]['qty']
//         console.log(cart[i]['item'] + "\t " + cart[i]['qty']+" \t " + items[cart[i]['item']] * cart[i]['qty'])
//      }
//      console.log("-------------------------------------------")
//      console.log("Total \t "+ qtys +" \t "+total)
//      console.log("Paid: "+pay)
//      change = pay - total
//      console.log("Your change is "+ change);
//  }
//  function pay() {
//     subtotal = 0
//     for (i = 0; i < cart.length; i++) {
//         subtotal = subtotal + (items[cart[i]['item']] * cart[i]['qty'])
//     }
//     pay = parseInt(prompt("Your total amount is N"+subtotal+ " please add payment: "))
//     display(pay)
//  }
//  function clear(){
//     cart = []
//     action = ""
//     position = 0
//  }
//  function delete_item(item){
//     for (i=0; i<cart.length;i++){
//         if (cart[i]['item'] == item)
//         {
//             cart.splice(i,1)
//             alert("deleted")
//             console.log(cart)
//         }
//     }
//  }
//  run()
 
// function prime(num){
//     var ore=prompt('WRITE A NUMBER TO RETURN MAYBE IT IS TRUE OR FALSE')
//     for(i=2; i< num; i++)
//     {
//         if(num%i==0){
//             ans:'Not a prime'
//         }
//     }
// }
// function prime(){
//     var num = prompt("enter a number");
//     if (num == 1)
//     {
//       console.log("not a prime")
//     }else if(num == 2){
//       console.log("prime")
//     }else{
    
//     for(i = 2;i<num;i++){
//       if(num%i == 0){
//         console.log("not a prime")
//         break
//       }
//       if(num-1 == i)
//       {
//         console.log("prime")
//       }
//     }
  
//     }
//     }
//   prime();
  
var age
var school
var username
var pin
var firstname;
var lastname
var store = []
var counter = 1
function register(){
   firstname = prompt("enter your first name")
   lastname = prompt("enter your last name:")
   age = prompt("Enter your  age")
   school = prompt("Enter your class")
   username = prompt("Enter your username")
   pin = prompt("Enter your password")

   var data ={
       firstname :firstname,
       lastname :lastname,
       age :age,
       school : school,
       username:username,
       pin:pin
   }
   store.push(data)
    check = prompt("Do you want to enter more data (y/n)")
    if (check == "y"){
       counter++
       register();
   }else{
    login();
   }

   function login(){
   username1 = prompt("Verify your username");
   pin1 = prompt("Verify your password");
   for(i=0; i < counter; i++){
   if(username1 == store[i]['username'] && pin1 == store[i]['pin']){
       alert("Your name is " + store[i]['firstname'] +" " +  store[i]['lastname'] + " you are " + store[i]['age'] + " years old and you are in " + store[i]['school']);
       break;
   }
   if(i == counter.length-1)
   {
       alert("incorrect")
   }
   }
}
}
register()