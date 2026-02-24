1.  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById selects one element (id) and id must be unique ,  getElementsByClassName selects elements (same class name) ,   querySelector / querySelectorAll , querySelector selects 1st matching elements it is also known as css selector and we have to use # or .  ,, querySelectorAll selects all matching elements.

2.  How do you create and insert a new element into the DOM?

Ans: we can use document.createNewElement('element'), and we can use .innerHtml or .innerText and to insert a new element we use appendChild();


3.What is Event Bubbling? And how does it work?

Ans: 1st it runs on an element then bubble up and go it it's parent and then bubble up and go to grandparent and so on.


4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event delegation is a consept where we can add an eventListener to a parent element and as a result all the children got the eventListener, as a result we do not need to add eventListener to all the child elements.
It is useful because it optimized the code.


5.  What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() method stops the page reload.  stopPropagation() stops the event bubbling.
    