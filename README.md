1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: 
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

2. How do you create and insert a new element into the DOM?

Answer: we can creat and insert a new element into the DOM by 3 step. 1.Creat the element 2.Add content 3.Insert into the DOM.
1.Creat element: const div = document.createElement("div");
2.Add content: div.textContent = "Hello world";
3.Insert into the DOM: document.body.appendChild(div);
.appendChild() will add the element inside the body at the end.

3. What is Event Bubbling? And how does it work?

Answer: Event bubbling is how the browser handles events when elements are nested. example:

    Event bubbling = child → parent → grandparent → document
    
If you click a button inside a div, the click fires on:

1.the button

2.then the div

3.then the body

4.then the document    
when button clicked child fires first → then parent. Like a bubble floating upward through the DOM tree.
That’s bubbling.

4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event delegation is attaching a single event listener to a parent element to handle events for its child elements using event bubbling. we use it for 1.Better performance 2.works for dynamic elements 3.Less repetition 4.easier maintenance 5.Less memory use and faster. 6.No need to use multiple listeners for same use.

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: preventDefault() stops the browser’s default behavior but can't stop event bubbling.
        stopPropagation() stops the event from bubbling up the DOM tree. It's stop event movement but can't stop brower default behaviors.