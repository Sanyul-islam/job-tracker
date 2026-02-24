1.Answer: 
getElementById() select one element bt it's id. example: if we have id name "header" then we can use it by getElementById("header").it return single element only.

getElementsByClassName() can selects all elements with a given class name. example: if we have list and all the list item have class name "list-item" then we can use to select all item by getElementsByClassName("list-item"). it return HTMLCollection.

querySelector() select only first matching element by any css selector like class or id or html tag name. example: we can use it by class or Id or html tag like 
querySelector(".class")
querySelector(".id")
querySelector("header")
it return single element of first match.

querySelectorAll() Selects all matching element by any css selector like class or id or html tag name. example: we can use it by class or Id or html tag like
querySelectorAll(".class")
it returns node list like an array.
