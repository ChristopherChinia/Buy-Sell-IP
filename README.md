# BUYSELL IP
*****
### Author : Christopher Chinia 25th June 2022
****
## Project Description
Buysell website is a free platform for buyers to find customers and customers to find products easily from the comfort of their livingrooms. This platforms enables customers to view the image, description and price of a product which they also have an option to purchase the product of their choice.

## SCREENSHOTS
![Home page SCREENSHOTS](./Assets/images/Screenshot%20from%202022-06-25%2001-34-21.png)

![products page SCREENSHOTS](./Assets/images/Screenshot%20from%202022-06-25%2001-34-47.png)

![products page SCREENSHOTS](./Assets/images/Screenshot%20from%202022-06-25%2001-34-56.png)


********
## SetUp Instruction
Run this command to get the backend started:

```sh
json-server --watch db.json
```

**Make sure to run this command exactly as written**, otherwise your server will
not return data in the correct format. Test your server by visiting this route
in the browser:

[http://localhost:3000/data/1](http://localhost:3000/data/1)

Then, open the `index.html` file on your browser to run the application.


### Requirements
* [HTML](lang Url)
* Text editor eg [Visual Studio Code](https://code.visualstudio.com/download)


### Getting Files
* Fork the repo [LINK.](https://github.com/ChristopherChinia/Buy-Sell-IP.git)
- Create a new branch in your terminal (git checkout -b improve-feature)
- Install the prerequisites
- Make appropriate changes in file(s)
- Run the server to see the changes
- Add the changes and commit them (git commit -am "Improve App")
- Push to the branch (git push origin improve-app)
- Create a Pull request
* Open the folder location on terminal and use the following command to run app:

## How To Run It
Run this command to get the backend started:

```sh
json-server --watch db.json
```
Make sure to run this command exactly as written,
otherwise your server will
not return data in the correct format. Test your server by visiting this route
in the browser:

[http://localhost:3000/data/1](http://localhost:3000/data/1)

Then, open the `index.html` file on your browser to run the application.

As a user, You can:
1. See the image received from the server, including its title,description, likes and
   price when the page loads. You will need to make a GET request to the
   following endpoint to retrieve the image data, along with its associated
   description:

      ```txt
   GET /data

   Example Response:
    {
      "item": "Kawasaki Ninja",
      "image_Url": "https://imgcdn.zigwheels.ph/medium/gallery/exterior/74/1903/kawasaki-ninja-400-20537.jpg",
      "Description": "20000 mileage in good condition for more info call 0700000000",
      "price": "4500000",
      "id": 1
    },
    {
      "item": "Kawasaki Ninja",
      "image_Url": "https://imgcdn.zigwheels.ph/medium/gallery/exterior/74/1903/kawasaki-ninja-400-20537.jpg",
      "Description": "20000 mileage in good condition for more info call 0700000000",
      "price": "4500000",
      "id": 2
    },
    {
      "item": "Play Station 5 pro",
      "image_Url": "https://www.treline.co.ke/wp-content/uploads/2021/01/ishMfuW.jpg",
      "Description": "3 months of usable still new with two gaming pads",
      "price": "95000",
      "id": 3
    }

   ```
*****
## Live Link
Or you can access the web application directly via this [LINK.](https://christopherchinia.github.io/Buy-Sell-IP/) 
*****

## Technologies Used
1. HTML
2. CSS
3. JavaScript
4. JSON local API


*****
## Contact Information
* Email : christopher.chinia@student.moringaschool.com
*****
## [License](LICENSE)
MIT License
Copyright (c) 2022 Christopher Chinia