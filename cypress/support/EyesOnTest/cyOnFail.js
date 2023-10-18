
// ---------     Cypress listners      --------- 

if (typeof window.testFlow === 'undefined') {
    window.testFlow = [];
  }
  
  
Cypress.on('fail', (err) => {
    const indentation = '  '
    const failedStep = window.testFlow.pop();
    err.message += `${'\n\n' + 'Test flow was:\n' + indentation}${window.testFlow.join('\n' + indentation)}`;
    err.message += `${'\n\n' + 'Failed step: '}${failedStep}`;
    throw err;
});
  