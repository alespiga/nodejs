let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };


let order = (call_prduction) =>{
    console.log("Order placed. Please call production")
    call_prduction()
};

let production = () =>{
    console.log("Production has started")
};

order(production)