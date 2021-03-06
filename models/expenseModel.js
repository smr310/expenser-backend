const mongoose = require('mongoose')

const ExpenseSchema = mongoose.Schema({
  amount: { type: 'String' },
  category: { type: 'String' },
  owner: { type: 'String' },
  workExpense: { type: Boolean },
  location: { type: 'String' },
  createdAt: { type: 'String' }
})

const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = { Expense, ExpenseSchema }
