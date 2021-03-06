var array = [];

function Order () {
  this.size = "";
  this.toppings = [];
  this.cost = 0;
}

Order.prototype.calculateCost = function() {
  if (this.size === "8-inch Small Thin Crust- $6.00" || this.size === "8-inch Small Original Crust- $6.00") {
    this.cost += 6;
  }
  else if (this.size === "12-inch Medium Thin Crust- $8.00" || this.size === "12-inch Medium Original Crust- $8.00") {
    this.cost += 8;
  }
  else if (this.size === "16-inch Large Thin Crust- $10.00" || this.size === "16-inch Large Original Crust- $10.00") {
    this.cost += 10;
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
    $("#newPizza").append("<div class='col-md-3'>" + "<div class='newPizza'>" +
    "<h4>Size:</h4>" +
    "<select class='form-control' id='size'>" +
    "<option>8-inch Small Thin Crust- $6.00</option>" +
    "<option>8-inch Small Original Crust- $6.00</option>" +
    "<option>12-inch Medium Thin Crust- $8.00</option>" +
    "<option>12-inch Medium Original Crust- $8.00</option>" +
    "<option>16-inch Large Thin Crust- $10.00</option>" +
    "<option>16-inch Large Original Crust- $10.00</option>" +
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
    "</div>" + "</div>");
  });

  $("#orderSubmit").click(function() {
    var order = new Order();
    $("#reviewOrder").show();
    $(".img-hide").show();

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
      array.push(inputtedSize);

      console.log(inputtedSize);
      console.log(order.cost);
    });
    console.log(array);
    array.forEach(function(item) {
      $("ul#pizza").append("<li><span class='pizzaList'>" + item + "</span></li>");
    });
    // $(".pizzaList").one( 'click', function() {
    //   $(".titleToppings").append("<p>Toppings:</p>" + "<ul id='toppingsList'>" + "</ul>");
    //   $("ul#toppingsList").each(function() {
    //
    //     order.toppings.forEach(function(item) {
    //       $("ul#toppingsList").append("<li>" + item + " - $1.00</li>");
    //     });

    $("input:checkbox[name=toppings]:checked").each(function(){
      var inputtedToppings =  $(this).val();
      order.toppings.push(inputtedToppings);
      console.log(inputtedToppings);
    });

    order.cost += order.toppings.length;
    $(".totalCost").empty();
    $(".totalCost").append("$" + order.cost + ".00");
    console.log(order.cost);

    console.log(order);
  });
});
