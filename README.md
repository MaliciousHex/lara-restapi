# lara-restapi
Experiment build rest-api with angular 2.0 and laravel 5.5 using JWT

## How To Use

1. First clone this project first
2. Set the database in .env and config database to your local machine
3. cd.. to server folder
4. type php artisan serve
5. After that go to client folder
6. Open terminal or command line
7. Type ng-serve

## API DOCUMENTATION

## Fetch Data
Method : GET
ex: 
http://127.0.0.1:8000/api/quote

## Insert Data
Method : POST
ex:
http://127.0.0.1:8000/api/quote

Headers :
Key : Content-Type 
Value : application/json

Body :
{
	"content":"write or input your content here"
}

## Update Data

Method : PUT

ex:
http://127.0.0.1:8000/api/quote/{id-content}

Headers :
Key : Content-Type 
Value : application/json

Body :
{
	"content":"write or input your content here"
}

## Delete Data

Method : DELETE

ex:
http://127.0.0.1:8000/api/quote/{id-content}
