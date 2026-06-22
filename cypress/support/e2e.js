import './commands';

// Globally catch unhandled exceptions from third-party ads to prevent test termination
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});