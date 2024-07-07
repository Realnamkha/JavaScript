In 2015, the Fetch API was launched as a modern successor to XMLHttpRequest, and it has subsequently become the de facto standard for making asynchronous calls in web applications. One significant advantage Fetch has over XMLHttpRequest is that it leverages promises, allowing for a simpler and cleaner API while avoiding callback hell.

The Fetch API uses Request and Response objects (and other things involved with network requests), as well as related concepts such as CORS and the HTTP Origin header semantics.

The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even if the server response is an HTTP error status. You can also optionally pass in an init options object as the second argument (see Request).


Fetch creates a special queue called micro-task queue(priority-queue) and it is executed fast/earlier than earlier