<h1 align='center'><b>Exhibition</b></h1>
A simple grounds management platform, developed full-stack with Node.js, express framework and MySQL database.  

<br>
<br>
<br>

# Table of Contetns
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
  - [Run Server](#run-server)
- [Seed Users](#seed-users)
- [Tech Stack](#tech-stack)

<br>
<br>

# Features
A few things you can do on Exhibition :
- Browse grounds on Map
- Manage grounds
- manage crop,energy on the grounds 



<br>
<br>

# Getting Started
## **Prerequisites**
Make sure you already have `Node.js` and `npm` installed, and have `MySQL` account.

<br>

## **Installing**
1. Clone the project and go to the project directory
```
 git clone https://github.com/TallTall22/mapCms

 cd mapCms
```

<br/>

2. Install dependencies
```
npm install
```

<br/>

3. Prepare your `.env` file. Please refer to `.env.example` for more details. 

<br/>

4. Create database at your `MySQL Workbench`
```
create database mapCms
```

<br/>

5. Apply migration and seed data  
**(Important: must apply migration FIRST)**
```
npx sequelize db:migrate
npx sequelize db:seed:all
```

<br/>

## **Run Server**

1. Start server
```
npm run dev
```

If you see  `App is listening on port3001`  on terminal, it means the server is running successfully and you can start exploring [Map](http://localhost:3001/) on your browser.

<br>

2. Stop server
```
control + c
```
<br/>
<br/>

# Seed Users

## **Admin**
1 available account

* **account**: root@example.com
  **password**: 12345678

<br/>

## **User**

* **account**: user1@example.com 
  **password**: 12345678

* **account**: user2@example.com
  **password**: 12345678



<br/>
<br/>

# Tech Stack
- Node.js ^18.13.0
- "bcryptjs": "^2.4.3",
- "dotenv": "^16.0.3",
- "express": "^4.18.2",
- "express-session": "^1.17.3",
- "jsonwebtoken": "^9.0.0",
- "mysql2": "^3.2.4",
- "passport": "^0.6.0",
- "passport-jwt": "^4.0.1",
- "passport-local": "^1.0.0",
- "sequelize": "^6.31.1",
- "sequelize-cli": "^6.6.0",

<br>
<br>

---
