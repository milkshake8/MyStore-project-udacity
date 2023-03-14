# Angular Fundamentals Project Udacity

## Run the application

1. Get the repository and change into its directory.
2. Run `npm install` to install required modules.
3. Run `ng serve` to start a server.
4. Go to `http://localhost:4200` to test application.

## About

The purpose of this project was to create a base store front in Angular as a single-page web application.

The list of products is imported via the `json-typings.d.ts` file from the `data.json` file to provide an overview of the products.By clicking on the product you'll get more information about it and will be lead to a separate product page.
On that page and on the list as well, you can add items to your cart. That's
reported by a plain `alert` message.

To visit the shopping cart you can use the navigation bar at the top. If it's empty you'll see a message inviting you to make a purchase. If it contains some products, You will see the subtotal based on the number of items you place in the cart.

By then you have to enter your full name (minimum 6 chars), your address
(minimum 12 chars) and your credit card number (minimum 16 chars).

And only now you can send your order and will be lead to a confirmation page!
