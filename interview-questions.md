# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

## 1. Rails follows an MVC pattern. What does that mean?

  Your answer: 
  - MVC stands for Model\View\Controller, it is a structure of web app, model used to create functional components(data and logic), view will be the content you can request from browser and controller will be the connection components to communicate from views to models.
  - Since Rails work as platform that means it will automatically set up the MVC templates or start point for us to create a new web app.

  Researched answer:
  - Ruby on Rails uses the Model-View-Controller (MVC) architectural pattern. 
  - MVC is a pattern for the architecture of a software application. 
  - It separates an application into the following components: Models for handling data and business logic. Controllers for handling the user interface and application. Views for handling graphical user interface objects and presentation.


## 2. What is a relational database? Are there other kinds of databases?

  Your answer: 
  - A relational database is the database has specific row and column that can represent data structures, in other words, a relational database use tables to store the data. 
  - Yes, there are other kinds of databases. The opposite example is non-relational database.

  Researched answer:
  - A relational database is a type of database that stores and provides access to data points that are related to one another. 
  - The columns of the table hold attributes of the data, and each record usually has a value for each attribute, making it easy to establish the relationships among data points.
  - A relational database includes tables containing rows and columns. For example, a typical business order entry database would include a table that describes a customer with columns for name, address, phone number and so forth.
  - Relational databases are also called Relational Database Management Systems (RDBMS) or SQL databases. Historically, the most popular of these have been Microsoft SQL Server, Oracle Database, MySQL, and IBM DB2.
  - There are essentially two major types of databases, NoSQL and Relational, with all the others being different versions of these. A NoSQL database has a hierarchy similar to a file folder system and the data within it is unstructured.
  - More details, a non-relational database is a database that does not use the tabular schema of rows and columns found in most traditional database systems. Instead, non-relational databases use a storage model that is optimized for the specific requirements of the type of data being stored.


## 3. What is object-relational mapping?

  Your answer: ORM, object-relational mapping is a technique or language to convert the data into other programming languages, for example, ruby or JavaScript. 

  Researched answer: 
  - Object–relational mapping in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages. 
  - This creates, in effect, a "virtual object database" that can be used from within the programming language.


## 4. What is a gem?

  Your answer: Gem is a Ruby package manager for providing Ruby libraries or tools, like other language package manager, gem is helpful for developers to share their code and make the software development more efficient.

  Researched answer: RubyGems is a package manager for the Ruby programming language that provides a standard format for distributing Ruby programs and libraries, a tool designed to easily manage the installation of gems, and a server for distributing them.


5. What are primary keys? Why are they important?

  Your answer: 
  - The primary key is the unique name or id number of the database column. 
  - The primary keys are very important because they are used to define and setup the database and the relationships between different tables, they should be unique and must-have.

  Researched answer:
  - A primary key is the column or columns that contain values that uniquely identify each row in a table. 
  - A database table must have a primary key for the database management system (DBMS) to insert, update, restore, or delete data from a database table. 
  - DBMS uses primary keys that are defined to the database.


## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes:
```
A RESTful route is a route that provides mapping from HTTP verbs (get, post, put, delete, patch) 
to controller CRUD actions (create, read, update, delete). 
Instead of relying solely on the URL to indicate what site to visit, 
a RESTful route depends on the HTTP verb and the URL.
```

2. JSON:
```
JSON is an open standard file format and data interchange format 
that uses human-readable text to store 
and transmit data objects consisting of attribute–value pairs and arrays.
```

3. ERB:
```
ERB stands for "Embedded Ruby". 
A .html.erb or .erb.html file is HTML with Ruby code embedded in; 
Rails will evaluate the Ruby to add content to the file dynamically, 
and will output a "pure" HTML file for rendering.
```

4. Params:
```
In HTTP/HTML, the Params are really just a series of key-value pairs 
where the key and the value are strings, 
but Ruby on Rails has a special syntax for making the Params be a hash 
with hashes inside. For example, if the user's browser requested.
```

5. API:
```
API is the acronym for Application Programming Interface, 
which is a software intermediary that allows two applications to talk to each other.
Each time you use an app like Facebook, send an instant message, 
or check the weather on your phone, you're using an API.
```