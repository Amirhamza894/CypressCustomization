
// ------   Cypress Custom Command for defining Steps   ------- 

if (typeof window.stepCalls === 'undefined') {
    window.stepCalls = 1;
  }
  
  
  Cypress.Commands.add('step', (msg) => { 
    if (typeof msg !== 'string') {
      msg = ''; // Set msg to an empty string if it's not a string
    }
  
  
    Cypress.log({
      displayName: `--- ${window.stepCalls}. ${msg.toUpperCase()} ---`,
      message: '\n', // Apply the style to the message
    });
  
    window.testFlow.push(`${window.stepCalls}. ${msg}`);
    window.stepCalls++;
  });