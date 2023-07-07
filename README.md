# Clean-Blog
My first web project

Project Name
[Clean-Blog]

Description
[The Simple Blog project is a web application that allows users to create an account, publish blog posts, and personalize them with images of their choice. Users can log in and out of their accounts, and their sessions remain active until they decide to terminate them. The project also includes an "About Me" page where the author shares information about themselves.]

Key Features
[
    - User Registration: Create an account to access the blog.
    - Login and Logout: Securely log in and out of your account.
    - Persistent Sessions: Stay logged in until you choose to log out.
    - Blog Post Creation: Compose and publish your blog posts.
    - Image Attachments: Add visual appeal to your posts by including images.
    - Personalization: Customize your blog posts to reflect your unique style.
    - About Me Page: Discover more about the author through the dedicated page.
The Simple Blog project aims to provide a user-friendly platform for sharing thoughts, experiences, and stories. Whether you're an aspiring writer, a hobbyist blogger, or simply looking for a space to express yourself, this blog offers an intuitive and seamless experience.]

Table of Contents
Installation
Usage
Features
Contributing
License
Installation
[To get started with the Simple Blog project, make sure you have Node.js installed on your machine. Additionally, ensure you have MongoDB installed and running. Then, follow the steps below:]

shell
1. Clone the repository:
$ git clone [ https://github.com/ikalakhi/Clean-Blog.git]
$ cd [Clean-blog]
2. Install the project dependencies using npm (Node Package Manager):
$ npm install
[This will install all the necessary packages, including Express, Edge Templating Engine, MongoDB, and Mongoose.]
3. Set up the environment variables:
    - Create a .env file in the project's root directory.
    - Inside the .env file, specify the following environment variables:
$PORT=3000
$MONGODB_URI=<your MongoDB connection URI>
Replace <your MongoDB connection URI> with the connection string for your MongoDB database.
4. Start the application:
$ npm start
This command will start the application on the specified port . You can access it by visiting http://localhost:4000 in your web browser.

Features

Feature 1 : User Registration and Authentication: Users can create an account to access the blog. They can securely register, providing necessary information such as username and password. Authentication ensures that only registered users can log in and access the blog's features.
Feature 2 : Login and Logout: Registered users can log in to their accounts using their credentials. Once logged in, they can access their personalized dashboard and perform actions such as creating and managing blog posts. Users can also log out securely when they have finished their session.
Feature 3 : Persistent Sessions: The application maintains the user's session until they explicitly log out. This means that users do not have to log in every time they visit the blog, providing a convenient and seamless experience.
Feature 4 : Blog Post Creation: Authenticated users can create engaging blog posts. They can compose their content using a user-friendly editor, add titles, descriptions, and tags, and include images to enhance the visual appeal of their posts.
Feature 5 : Image Attachments: Users have the ability to attach images to their blog posts. This feature allows them to make their posts more visually appealing and captivating for the readers.
Feature 6 : Personalization: Users can customize their blog posts, adding their unique writing style, formatting, and creativity. The application supports the use of the Edge Templating Engine, providing flexibility in rendering dynamic content and templates.
Feature 7 : About Me Page: The project includes an "About Me" page where the author of the blog can share information about themselves. It allows readers to get to know the author better and establish a personal connection.

License
[This project is free to use]

Contact
Email : imraneklakakhi13@gmail.com
Linkedin : imrane kalakhi
Github : ikalaki