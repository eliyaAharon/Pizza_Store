function bill_amount() {
    let res = 0;
    let dough = document.getElementById("dough-select").value;
    if (dough == "Normal")
        res += 20;
    if (dough == "whole wheat")
        res += 30
    if (dough == "thin")
        res += 15

    let size = document.getElementById("size-select").value;
    if (size == "S")
        res += 10;
    if (size == "M")
        res += 20;
    if (size == "L")
        res += 30;

    var toppings = [];
    var checkboxes = document.getElementsByName("toppings[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            toppings.push(checkboxes[i].value);
        }
    }
    res += toppings.length * 5;

    var billRes = document.getElementById("bill-res");
    billRes.style.border = "4px solid red";
    billRes.style.margin = "20px";
    let amount = document.getElementById("total-bill");
    amount.style.backgroundColor = "red";
    amount.innerText = "for payment:\t " + res + " dollars";
    let description = document.getElementById("order-description");
    description.innerText = "Dough: " + dough + ".\n Size: " + size + ". \n toppings:\t " + toppings;
}