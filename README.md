ProductCatalog226
=================

This application is a prototype for an online product catalog which enables you to search for products listed in the mongodb database.

Getting started
---------------

1. Install node.js
2. Install express
3. Install dependencies listed in package.json using >npm install
4. Install MongoDb
5. Insert data in Mongodb of the format : {category:<category such as appliance>
																					, producttype:<type such as refrigerator>
																					, productname:<title like xyz refrigerator>
																					, meta:{[brand:<brand>, dimension:<dimension>, color:<color>,....]}}
6. Start the server using 'nodetest1>npm start'
7. Browse to localhost:3000/findproduct 

Application architecture:
-------------------------
1. Jade pages in view:
         findproduct.jade : category and search input;
         products.jade : display search results;
2. index.js defines the route, connects to mongodb and sends data to the views.
