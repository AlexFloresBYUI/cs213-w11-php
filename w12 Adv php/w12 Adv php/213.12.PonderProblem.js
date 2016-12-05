var itemsCount = 0;
var totalBuyAmount;
var items = {};
var prices = {};


function checkoutShow(id, blur)
{
    document.getElementById(id).style.display = 'unset';
    window.location.hash = '#checkout';
    document.getElementById(id).focus();
    document.getElementById(blur).style.opacity = '0.4';
    document.getElementById("sideBar").style.opacity = '0.4';
    
}

function checkoutHide(id, blur)
{
    document.getElementById(id).style.display = 'none';
    document.getElementById(blur).style.opacity = '1.0';
    document.getElementById("sideBar").style.opacity = '1.0';
    
}

function validateName(name, id)
{
	if (/\b\w+\b/.test(name))
	{
                document.getElementById(id + "Validation").innerHTML = "";
                return true;
	}
	else
	{
		document.getElementById(id + "Validation").innerHTML = "Invalid Name";
		document.getElementById(id + "Validation").style.color = 'red';
                return false;
	}
}

function validateAddress(address, id)
{
	if (/\b\w+\b/.test(address))
	{
		document.getElementById(id + "Validation").innerHTML = "";
                return true;
	}
	else
	{
		document.getElementById(id + "Validation").innerHTML = "Invalid Address";
		document.getElementById(id + "Validation").style.color = 'red';
                return false;
	}
}

function validateAbb(theAbb, id)
{
	if (/\b(?:(A[KLRZ]|C[AOT]|DE|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[EVHJMYCD]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[TA]|W[AVIY]))\b/.test(theAbb) )
	{	
		document.getElementById(id + "Validation").innerHTML = "";
                return true;
	}
	else
	{
		document.getElementById(id + "Validation").innerHTML = "Invalid State";
		document.getElementById(id + "Validation").style.color = 'red';
                return false;
                
	}
}

function validateZipCode(zipCode, id)
{
	if (/\b\d{5}\b/.test(zipCode))
	{	
		document.getElementById(id + "Validation").innerHTML = "";
                return true;
	}
	else
	{
		document.getElementById(id + "Validation").innerHTML = "Invalid Zip Code";
		document.getElementById(id + "Validation").style.color = 'red';
                return false;
	}
}

function validatePhone(phone, id)
{
	if (/\b\(?\d{3}\s?\-?\)?\d{3}\s?\-?\d{4}\b/.test(phone))
	{	
		document.getElementById(id + "Validation").innerHTML = "";
                return true;
	}
	else
	{
		document.getElementById(id + "Validation").innerHTML = "Invalid Phone Number";
		document.getElementById(id + "Validation").style.color = 'red';
                return false;
	}
}

function validateCreditCard(theCardNumber, id)
{
	if ( /(^|\s)\d{4}\s?\d{4}\s?\d{4}\s?\d{4}($|\s)/.test(theCardNumber) )
	{
		document.getElementById(id + "Validation").innerHTML = "";
                return true;
	}
	else
	{
		document.getElementById(id + "Validation").innerHTML = "Invalid Credit Card";
		document.getElementById(id + "Validation").style.color = 'red';
                return false;
	}
}

function validateDate(theDate, id)
{
	if ( /(^|\s)(\d|0\d|1[0-2])\/(1[8-9]\d{2}|17[6-9]\d|175[3-9]|20\d{2}|2100)($|\s)/.test(theDate) )
	{
		document.getElementById(id + "Validation").innerHTML = "";
                return true;
	}
	else
	{
		document.getElementById(id + "Validation").innerHTML = "Invalid Date";
		document.getElementById(id + "Validation").style.color = 'red';
                return false;
	}
}

function deleteCookie(cookieName)
{
    var d = new Date();
    d.setDate(d.getDate() - 1);
    var expires = ";expires="+d;
    var name=cookieName;
    var value="";
    document.cookie = name + "=" + value + expires;     
}

function deleteAllCookies()
{
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++)
        deleteCookie(cookies[i].split("=")[0]);
}

function printPurchase(product, price, qty)
{
    var prevString = document.getElementById("buyedItems").innerHTML;
    var perItemTotal = price * qty;
    perItemTotal = perItemTotal.toFixed(2);
    document.getElementById("buyedItems").innerHTML = prevString + "<table id='tableSide'><tr><td>" + product + "</td><td>" +
                                                      price + "</td><td>  " + qty + "</td><td>" +
                                                      perItemTotal + "</td></tr>";
                                                      
    var prevString = document.getElementById("buyedItemsCart").innerHTML;
    document.getElementById("buyedItemsCart").innerHTML = prevString + "<table id='tableChkOut'><tr><td>" + product + "</td><td>" +
                                                          price + "</td><td>  " + qty + "</td><td>" +
                                                          perItemTotal + "</td></tr>";
}

function readCookies() {
    cookieArray = document.cookie.split("; ");
    var total = 0;
    
    document.getElementById("buyedItems").innerHTML = "";
    document.getElementById("buyedItemsCart").innerHTML = "";
    if(cookieArray.length != 0)
    {
        document.getElementById("buyedItems").innerHTML = "<table id='tableSide'><tr><th>Product</th><th>Price</th>\n\
                                                           <th>Qty</th><th>Total</th></tr>";
        document.getElementById("buyedItemsCart").innerHTML = "<table id='tableChkOut'><tr><th>Product</th><th>Price</th>\n\
                                                           <th>Qty</th><th>Total</th></tr>";
    }
    for (var i = 0; i < cookieArray.length; i++)
    {
        var product = cookieArray[i].split(',')[0];
        var price = cookieArray[i].split(', ')[1];
        price = price.split('=')[0];
        var qty = cookieArray[i].split('=')[1];
        total += qty * price;
        
        if (qty != 0)
        {
        printPurchase(product, price, qty );
        }
    }
    total = total.toFixed(2);
    printTotal(total);
}

function buyitem(product, quantity)
{
    if(quantity != 0)
    {
        document.cookie = product + "=" + quantity;
        readCookies();


        productArray = product.split(', ');
        items[productArray[0]] = quantity;    //item name = quantity
        items[productArray[0]] = { qty: quantity, price: productArray[1] };
    
        document.getElementById('items').value = JSON.stringify(items);
    }
    else 
    {
        deleteCookie(product);
        document.getElementById("totalSide").innerHTML = "";
        document.getElementById("totalAmount").innerHTML = "";
        readCookies();
    }
}

function printTotal(total)
{
    var taxes = total * .06;
    taxes = taxes.toFixed(2);
    var bigTotal = total * 1.06;
    bigTotal = bigTotal.toFixed(2);
    document.getElementById("totalAmount").innerHTML = "<table id='totalTable'><tr><td>Items SubTotal</td><td>" + 
                                                        total + "</td></tr><tr><td></td><td></td></tr>" +
                                                        "<tr><td>Tax</td><td>" + taxes + "</td></tr>" +
                                                        "<tr><td></td><td></td></tr><tr><td>Total</td><td>" +
                                                        bigTotal + "</td></tr>";
    document.getElementById("totalSide").innerHTML = "<table id='totalTableSide'><tr><td>SubTotal</td><td>" +
                                                      total + "</td></tr>";
}

function validatePurchaseOrder()
{
    if(!validateName(document.getElementbyId('firstName'),'firstName') || 
       !validateName(document.getElementbyId("lasttName"),"lastName") ||
       !validateAddress(document.getElementbyId("address"),"address") ||
       !validateAbb(document.getElementbyId("state"),"state") ||
       !validateZipCode(document.getElementbyId("zipcode"),"zipcode") ||
       !validatePhone(document.getElementbyId("phone"),"phone") ||
       !validateCreditCard(document.getElementbyId("creditCard"),"creditCard") ||
       !validateDate(document.getElementbyId("date"),"date") )
   {
       return true
   }
   else
   {
       return false;
   }
}

function submitOrder()
{
    //if (validatePurchaseOrder())
    //{
        alert("Order Submitted");
      /*  return true;
    }
    else
    {
        return false;
    }*/
}

function resetOrder() {
    deleteAllCookies();
    document.getElementById("totalSide").innerHTML = "";
    document.getElementById("totalAmount").innerHTML = "";
    readCookies();
}