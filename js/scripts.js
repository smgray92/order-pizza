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

$(document).ready(function() {
  var order = new Order();
  $("#orderSubmit").click(function() {
    $("#reviewOrder").show();
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
    console.log(order);
  });
});
