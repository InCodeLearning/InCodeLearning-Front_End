# Knowledge Points

## Document Object Model (DOM)

Every webpage can be broken down into a mathematical tree structure called the Document Object Model (DOM).

![Wikipedia DOM image](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png)

- Each HTML tag is a node in the tree and these nodes have all types of different attributes, such as text, background color, width, etc.
- Every node/element has one parent and possibly many children.
- Nodes have properties, methods, and events.
- nodeList is an array of elements, e.g., `document.getElementByTagName("p")` would return a set of nodes.

With JavaScript it is easy to write code that basically says "I want to grab that part of the webpage and change it." In this lecture I review the DOM and talk about how it is related to JavaScript. JavaScript accesses DOM through API (the API is independent of browser or scripting language.).

# Resources
