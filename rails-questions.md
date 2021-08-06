# ASSESSMENT 5: Database and Active Record Practical Questions

## 1. What is SQL?
- SQL stands for Structured Query Language, a language for manipulating and talking about data in databases.
- The scope of SQL includes data query, data manipulation (insert, update and delete), data definition (schema creation and modification), and data access control.

## 2. What the PostgreSQL query that would return all the content in a particular table?
```sql
SELECT *
FROM tableName
-- * means select all columns
```

## 3. What is the command to create a new Rails application with a PostgreSQL database?
```ruby
$ rails new app_name -d postgresql -T
# -d postgresql -T will replace the default database with postgres
$ cd app_name
$ rails db:create
# Sets up an empty database
$ rails server
# Starts the Rails app by starting the server, check the localhost from browser
```

## 4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?
```ruby
$ rails generate model Meal breakfast:string lunch:string dinner:string
# rails generate is the setup command
# model is what to generate
```

## 5. What is a migration? Why would you use one?
- Migrations are a tool used to change the shape of the database over time.
- Rails maintains a history with the migrations(files that run SQL command).
- The migration command creates a timestamped file in db/migrate with the changes.

## 6. What is the command to generate a migration file?
```ruby
$ rails db:migrate
```

## 7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
- Rails provide a collection of generate commands to pass information through the command line which tasks Rails with setting up the corresponding file structure.
- This is particularly helpful as Rails is very picky about its naming conventions.
- Naming convention for generating a Rails model: **Uppercase and Singular**
- Naming convention for the table that is generated: **Lowercase and Singular**
- For associated table: the has_many model is **Singular**, the belongs_to model is **Plural**.

## 8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?
- When working with full-stack projects, the columns or data types required in a database table may need to change to accommodate new specifications. This requires changing the shape of the database.
- The schema. rb file serves mainly two purposes: It documents the final current state of the database schema. Often, especially when you have more than a couple of migrations, it's hard to deduce the schema just from the migrations alone.
- The schema file cannot be directly edited as it is just a representation of the current state of the database.
- How to edit the database? With a migration!
- Run a Rails generate command to create a migration.

## 9. What is the Rails console?

Rails console is a command line program for interacting with the Rails applications. It has the full power of the Ruby language and Rails environment.

## 10. What is the Rails console command to see all the content in a particular table?
```ruby
# Open up Rails console
$ rails c
# table_name.all
3.0.0 :006 >table_name.all
```