Zomapp

// Page 1
> List of city (GET)
* http://localhost:9110/location

> List of Restaurant (GET)
* http://localhost:9110/restaurants

> Rest wrt to city (GET)
* http://localhost:9110/restaurants?stateId=1

> Quick Search (GET)
* http://localhost:9110/mealType

// Page 2
> Rest wrt to meal (GET)
* http://localhost:9110/restaurants?mealId=1

> Rest wrt to meal + cuisine (GET)
* http://localhost:9110/filter/2?cuisineId=1

> Rest wrt to meal + cost (GET)
* http://localhost:9110/filter/2?lcost=500&hcost=1500

//page3
> Details of Restaurant (GET)
* http://localhost:9110/details/10

> Menu of restaurant (GET)
* http://localhost:9110/menu/2

//page4
> Details of menu selected (POST)
* http://localhost:9110/menuDetails
 {"id":"[1,2,3]"}

> Place Order (POST)
* http://localhost:9110/placeOrder
{
    "orderId": 3,
    "name": "Amit",
    "email": "amit@gmail.com",
    "address": "Hom 65",
    "phone": 8934645457,
    "cost": 910,
    "menuItem": [
      12,43,11
    ],
    "status": "On the Way"
  }

//page
> List all orders (GET)
* http://localhost:9110/orders?email=amit@gmail.com

> update order (PUT)
* http://localhost:9110/updateOrder
{
    "_id":"6514ded73e675ad065930925",
    "status":"Delivered"
}

> delete order (DELETE)
* http://localhost:9110/deleteOrder
{
    "acknowledged": true,
    "deletedCount": 1
}