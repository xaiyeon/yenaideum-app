// The main file for exporting our controllers from.
// Add all our controllers here for easy control, being modular.

const todos = require('./todos');
const todoItems = require('./todoitems');


module.exports = {
  todos,
  todoItems,
};