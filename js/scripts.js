function Order () {
  this.size = "";
  this.toppings = [];
  this.cost = 0;
}

Order.prototype.calculateCost = function() {
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
  var order = new Order();
  $("#orderSubmit").click(function() {
    $("#reviewOrder").show();
    var addresss = $("input:radio[name=service]:checked").val();
    var name = $("input#name").val();
    var street = $("input#street").val();
    var city = $("input#city").val();
    var state = $("input#state").val();
    var zip = $("input#zip").val();
    var phone = $("input#phone").val();

    var contact = new Contact(name, street, [], phone);
    var addressName = new Address(city, state, zip,);
    addressName.delivery();

    contact.deliveryOption();
    contact.address.push(addressName);
    console.log(contact);

    var inputtedSize = $("#size").val();
    order.size = inputtedSize;
    console.log(inputtedSize);
    $("input:checkbox[name=toppings]:checked").each(function(){
      var inputtedToppings = $(this).val();
      order.toppings.push(inputtedToppings);
    });
    order.cost += order.toppings.length;
    order.calculateCost();
    $(".totalCost").append("$" + order.cost + ".00");
    console.log(order.cost);
    $("ul#pizza").append("<li><span class='pizzaList'>" + order.size + "</span></li>");
    $(".pizzaList").click(function() {
      $("#detailedOrder").show();
      order.toppings.forEach(function(item) {
        $(".toppings").append("<li>" + item + " - $1.00</li>");
      });
    });
    console.log(order);
  });
});
