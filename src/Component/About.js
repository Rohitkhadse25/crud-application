import React from 'react'

function About() {
    return (
        <div>
            <h3>What is a CRUD App ?</h3>
            <p align='left'>A CRUD app is a specific type of software application that consists of four basic operations; Create, Read, Update, Delete.

            At a high level, a CRUD apps consist of three parts; the database, user interface, and APIs.</p>
            <h4>Database :</h4>
            <p>
            The database is where your data is stored. A database management system is used to manage the database. There are several different types of database management systems (DBMS) that can be categorized by how they store data; relational (SQL), Document (NoSQL). If you are deciding what DBMS to choose for your CRUD app, here’s a list of the 14 best database management systems . Going forward, our content will focus on SQL. SQL databases consist of tables. Tables consist of records. Records consist of fields. Fields consist of data.</p>
            <h4>User Interface</h4>
            <p>The user interface (UI) is what your users interact with. Due to the increasing popularity of applications, businesses are now prioritizing user interface design and user experience.</p>
            <h4>APIs</h4>
            <p>Finally, the APIs are how your application informs your database of what functions to perform. These functions can be modeled in different ways but they are designed to perform four basic CRUD operations; Create, Read, Update, Delete.</p>
            <h4>Crud Operation</h4>
            <p>As previously mentioned, there are four basic CRUD operations; create, read, update and delete. These four operations map to functions/statements, as seen in the following table:</p>

        </div>
    )
}

export default About
