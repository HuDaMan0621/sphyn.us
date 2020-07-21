# Sphyn 1.0: 
## Your source for high quality 360-degree images

This application supports the functioning of a business that serves the real estate industry. By capturing high-quality 360-degree images, Sphyn assists real estate agents and homeowners with demonstrating a home's appeal to potential buyers. On the back end, the Sphyn website utilizes Express to run the server and routes and Sequelize to create and maintain database tables, all of which is facilitated by Node.js. On the front end, React splits functionality between different components, which all serve a particular role.


## Home Page
The user's experience of the site starts with the home page, shown below.

![Home Page](https://i.ibb.co/rcLcbN6/home1.png)


The home page displays information about available service packages, along with links the allow a new user to register and a continuing user to log in.


![Home Page Packages](https://i.ibb.co/MVRZLQM/home2.png)


## Account

An account is created by entering a username, email, password, and phone number into a form (see below). Customer data is saved to the database. Passwords are protected with bcrypt hash encryption so that any database breach will not compromise user accounts.

![Registration Page](https://i.ibb.co/kmCx1pt/registration.png)


## Login
After creating an account, the user is sent to the login page(see below). If a correct email and username is entered, most users will be routed to their profile page. If not, a message stating "User not authorized. Please log in" displays with the words "log in" functioning as a link to the login page. If an administrator logs in, the app renders the administration component (see section below).

![Login Page](https://i.ibb.co/6Ys2Lw0/login.png)

## Administration

Administrators are identified by email address during the login process. The administration page allows for editing of anything in the database's Services table, including adding an image URL to the database. This addition allows customers to access the completed 360-degree image for that particular order. Payment status (or any other field) is also updated using this form.

![Administration Page](https://i.ibb.co/rv7PHHy/admin.png)

## Booking Services & Payment

The booking component consists of a form that allows a customer to request a service -- that is, for photos to be taken of a particular property. The form requires a nickname, address, city, state, zip code, and package selection (see below, left). Upon submission of this form, the PayPal payment screen displays. Upon selecting a payment option, the user is routed to the PayPal site, where the payment is made. After payment, the user is routed back to their profile page, which lists the requested service. Please see below right for code that helps to perform this function.


![Booking Page](https://i.ibb.co/VYRSvN5/booking.png)   &emsp; &emsp; &emsp; &emsp;   ![PayPal code](https://i.ibb.co/0J4HsrN/paypal.png)

## Profile Page and Showcase

The profile page greets the customer and displays any pending or completed orders (see below). Login is required for access to this page. 

![Profile Page](https://i.ibb.co/4VTpxwx/profile.png)

To allow for public access to photos, the showcase page displays all services that have been requested by a particular customer. That customer is identified by entering the corresponding email address into a form. 

![Showcase](https://i.ibb.co/LZKH1GH/showcase.png)

## Google Maps

As seen above, the Google Maps API feature is used on the showcase page. It displays the location of a home by accessing the address entered by the customer and determining the address's latitude and longitude (see below).

## Error reporting
As discussed previously, a user not logged in will receive an error message stating "User not authorized. Please log in." The words "log in" function as a link to the login page. An unauthorized logged-in user attempting to access the admin page will see the error "Unauthorized user. Please return to your profile page," with the words "profile page" functioning as a link to that user's profile page. A user who is not logged in who tries to access the administration page is rerouted to the login page. A not logged-in user trying to submit the booking form is routed to the login page.

## To run on local computer

The following installations must take place to successfully after cloning from the github repository to run this program on a local computer: npm install, session-sequelize -g, sequelize -cli, ejs-lint (for error reporting), and nodemon.

## Potential Updates

The following features would enhance this application:

 - on home page, a user can click on a service and have that service selected in the booking form
 - payment status updated automatically by PayPal.

## Database Map

The tables are constructed as displayed below.

![Database map](https://i.ibb.co/BGMdzrq/sphyndb.png)


## Site map

The site pages are connected as indicated below. All pages are connected to the Home page via the logout link on each page.

![Site map](https://i.ibb.co/8Bn3kWP/sphynsite.png)

## Deployment
To allow for wider usage, this site is deployed on Heroku. Use  [this link to access](https://sphyn.herokuapp.com/).
