function Order () {
  this.size = "";
  this.toppings = [];
  this.cost = 0;
}

Order.prototype.calculateCost = function() {
  // this.cost += this.toppings.length;
  // this.size.forEach(function() {
  // for (var size in Order) {
  //   if(Order.hasOwnProperty(size)){
  //     console.log("yes");
  //   }
// array.forEach(function() {
  if (this.size === "8-inch Small Thin Crust- $9.00" || this.size === "8-inch Small Original Crust- $9.00") {
    this.cost += 9;
  }
  else if (this.size === "12-inch Medium Thin Crust- $12.00" || this.size === "12-inch Medium Original Crust- $12.00") {
    this.cost += 12;
  }
  else if (this.size === "16-inch Large Thin Crust- $15.00" || this.size === "16-inch Large Original Crust- $15.00") {
    this.cost += 15;

}
}



function Contact (name, street, [], phone) {
  this.name = name;
  this.street = street;
  this.address = [];
  this.phone = phone;
}
function Address (city, state, zip) {
  this.city = city;
  this.state = state;
  this.zip = zip;
}

Contact.prototype.deliveryOption = function() {
  return this.name;
  return this.street;
  return this.address;
  return this.phone;
}
Address.prototype.delivery = function() {
  return this.city + ", " + this.state + " " + this.zip;
}


$(document).ready(function() {
  $("#anotherPizza").click(function() {
    // $("input:checkbox[name=toppings]").prop("checked", false);
    $("#newPizza").append("<div class='newPizza'>" +
"<h4>Size:</h4>" +
"<select class='form-control' id='size'>" +
  "<option>8-inch Small Thin Crust- $9.00</option>" +
  "<option>8-inch Small Original Crust- $9.00</option>" +
  "<option>12-inch Medium Thin Crust- $12.00</option>" +
  "<option>12-inch Medium Original Crust- $12.00</option>" +
  "<option>16-inch Large Thin Crust- $15.00</option>" +
  "<option>16-inch Large Original Crust- $15.00</option>" +
"</select>" +
"<h4>Toppings ($1.00 each):</h4>" +
"<input type='checkbox' name='toppings' value='pepperoni'>Pepperoni<br>" +
"<input type='checkbox' name='toppings' value='mozzarella'>Mozzarella<br>" +
"<input type='checkbox' name='toppings' value='sausage'>Italian Sausage<br>" +
"<input type='checkbox' name='toppings' value='bacon'>Bacon<br>" +
"<input type='checkbox' name='toppings' value='chicken'>Grilled Chicken<br>" +
"<input type='checkbox' name='toppings' value='onion'>Onion<br>" +
"<input type='checkbox' name='toppings' value='pepper'>Green Pepper<br>" +
"<input type='checkbox' name='toppings' value='garlic'>Garlic<br>" +
"<input type='checkbox' name='toppings' value='tomato'>Tomato<br>" +
"<input type='checkbox' name='toppings' value='mushroom'>Mushroom<br>" +
"<input type='checkbox' name='toppings' value='olive'>Olives<br>" +
"</div>");
  });

  $("#orderSubmit").click(function() {
var order = new Order();
    $("#reviewOrder").show();

    // $("input:checkbox[name=toppings]").prop("checked", false);
    var address = $("input:radio[name=service]:checked").val();
    if (address === "delivery") {
      $("#addressDelivery").show();
    }
    console.log(address);
    var name = $("input#name").val();
    var street = $("input#street").val();
    var city = $("input#city").val();
    var state = $("input#state").val();
    var zip = $("input#zip").val();
    var phone = $("input#phone").val();

    var contact = new Contact(name, street, [], phone);
    var addressName = new Address(city, state, zip);

    addressName.delivery();
    console.log(addressName);
    contact.deliveryOption();
    contact.address.push(addressName);
    console.log(contact);
    console.log(addressName);

    $(".show-name").text(contact.name);
    $('.show-street').text(contact.street);
    $('.show-address').text(addressName.delivery());
    $('.show-phone').text(contact.phone);


$(".newPizza").each(function() {

    var inputtedSize = $(this).find("#size").val();
        order.size = inputtedSize;
        order.calculateCost();


console.log(inputtedSize);
console.log(order.cost);
  });

    $("ul#pizza").append("<li><span class='pizzaList'>" + order.size + "</span></li>");
    // $(".pizzaList").each(function() {
    // $(this).click(function() {
      // $(".toppings").empty();
      $(".pizzaList").one( 'click', function() {
        // $(".pizzaList").forEach(function() {
      $("#detailedOrder").show();
      order.toppings.forEach(function(item) {
        $("#toppingsReview").append("<li>" + item + " - $1.00</li>");
        // order.calculateCost();
      });
      });

  // });
    $("input:checkbox[name=toppings]:checked").each(function(){
      var inputtedToppings = $(this).val();
      order.toppings.push(inputtedToppings);

      console.log(inputtedToppings);
    });

    order.cost += order.toppings.length;
    $(".totalCost").empty();

    $(".totalCost").append("$" + order.cost + ".00");
    console.log(order.cost);
    // $("ul#pizza").append("<li><span class='pizzaList'>" + order.size + "</span></li>");
    // // $(".pizzaList").each(function() {
    // // $(this).click(function() {
    //   // $(".toppings").empty();
    //   $(".pizzaList").click(function() {
    //   $("#detailedOrder").show();
    //   order.toppings.forEach(function(item) {
    //     $("ul#toppingsReview").append("<li>" + item + " - $1.00</li>");
    //   });
    //   });

    console.log(order);
});


});
// });
