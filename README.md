# Sphyn 1.0: 
## Your source for high quality 360-degree images

This application supports the functioning of a business that serves the real estate industry. By capturing high-quality 360-degree images, Sphyn assists real estate agents and homeowners with demonstrating a home's appeal. On the back end, the Sphyn website utilizes Express to run the server and routes and Sequelize to create and maintain database tables, all of which is facilitated by Node.js. On the front end, React splits functionality between different components, which all serve a particular role.


## Account

An account is created by entering a username, email, password, and phone number into a form. Customer data is saved to the database. Passwords are protected with bcrypt has encryption so that any database breach will not compromise user accounts.

![Register/Login Page](https://i.ibb.co/LSrLJ2d/Screen-Shot-2020-06-03-at-6-39-48-AM.png)


## Login
After creating an account, the user is sent to the login page(see below). If a correct email and username is entered, most users will be routed to their profile page. If not, a message stating "User not authorized. Please log in" displays with "log in" functioning as a link to the login page. If an administrator logs in, the app renders the administration component (see below).

## Administration

Administrators are identified by email address during the login process. The administration page allows for editing of anything in the databases Services table, including adding an image url to the database. This allows customers to access the completed 360-degree image for that particular order. Payment status (or any other field) is also updated using this form.

![EventsToggle](https://i.ibb.co/chTKkhY/Screen-Shot-2020-06-03-at-6-53-59-AM.png)    ![EventsToggle](https://i.ibb.co/jG8hxqN/Screen-Shot-2020-06-03-at-6-54-43-AM.png)    

## Booking Services & Payment

This component consists of a form that allows a customer to request a service -- that is, for photos to be taken of a particular property. The form requires a nickname, an address, and so forth (see below). Upon submission of this form, the Paypal payment screen displays (see below). Upon selecting an option, the user is routed to the Paypal site, where the payment is made. After payment, the user is routed back to their profile page, which will list the requested service.

![ContactReg](https://i.ibb.co/C1Scwsd/Screen-Shot-2020-06-03-at-6-44-23-AM.png)    ![ContactForm](https://i.ibb.co/9H8hVr5/Screen-Shot-2020-06-03-at-6-45-11-AM.png)

## Profile Page and Showcase

The profile page greets the customer and displays any pending or completed orders (see below, left). Login is required for access to this page. To allow for public access to these photos, the showcase page displays all services that have been requested by all customers (see below, right). 

## Error reporting
As discussed previously, a user not logged in will receive an error message stating "User not authorized. Please log in" displays with "log in" functioning as a link to the login page. An unauthorized logged-in user attempting to access the admin page will see the error "Unauthorized user. Please return to your profile page, with "profile page" functioning as a link to that user's profile page.

## To run on local computer

The following installations must take place to successfully after cloning from the github repository to run this program on a local computer: npm install, session-sequelize -g, sequelize -cli, ejs-lint (for error reporting), and nodemon.

## Potential Updates

The following features would enhance this application:

 - search capability by user email on showcase page (Will not show all services, just those of a given user)
 - on home page, a user can click on a service and have that service selected in the booking form
 - payment status filled in automatically by Paypal.

## Database Map

The tables are constructed as displayed below.

![Database map](https://i.ibb.co/qrnvFVL/eventsetdb.png)


## Site map

The site pages are connected as indicated below. All pages are connected to the Register/Login page via the logout link in the navigation bar.

![Site map](https://i.ibb.co/6DmGYfj/final-site-map.png)

## Deployment
To allow for wider usage, this site is deployed on Heroku. Use [this link to access](https://eventset.herokuapp.com/).
