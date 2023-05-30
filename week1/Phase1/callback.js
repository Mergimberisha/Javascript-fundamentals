const printMessage = () => {
    console.log("HELLO!");
  }
  
  
  
  /*
  
  To work on this exercise, it is important to think of functions as regular values (they can be passed around just like any other variable). Revisit the previous section if this wasn't clear.
  
  Declare a function executeAfterDelay which calls the given function after the given delay in seconds:
  
  const printHello = () => {
    console.log('Hello!');
  }
  
  executeAfterDelay(5, printHello);
  
  // After about 5 seconds, you should see the message being logged
  
  Hello!
  Example solution
  
  */
  
  const executeAfterDelay = (aFunction, seconds) => {
    seconds *= 1000;
    return setTimeout(aFunction, seconds); 
  }
  
  executeAfterDelay(printMessage, 5);
  