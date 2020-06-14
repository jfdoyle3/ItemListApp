# Item List App - Java/React Notebook
Simple **Item List app** using *Java, Spring, Spring-Boot, Hibernate and React*

This heavily commented code is meant as reference material on how  code is setup

and runs.  Shows alternative ways of coding the same methods with cleaner code.

------

## Starting React Front End 

**yarn install** to reload dependencies if needed.

**npm start**  in **\frontend\itemlist-app** to start up react app.



## Login Authentication

Using data in localStorage has no expiration time. The key in it won't be deleted and the 
 data stored in there will stay even if the browser is closed and considered unsecure. The key has to be deleted manually or by code.
 Using the sessionStorage the data get cleared when the page session ends and when you close the browser. Using  sessionStorage preferred for login Authentication.

