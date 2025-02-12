import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-financials-dashboard',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './financials-dashboard.component.html',
  styleUrl: './financials-dashboard.component.css'
})
export class FinancialsDashboardComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  incomes = [
    { id: 1, amount: 1500, description: "Monthly rent" }
  ];

  expenses = [
    { id: 1, amount: 200, description: "Electricity bill" },
    { id: 2, amount: 150, description: "Plumbing repair" }
  ];
incomeExpenseForm: any;

  getIncomeTotal() {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  }

  getExpenseTotal() {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  }

  getNetIncome() {
    return this.getIncomeTotal() - this.getExpenseTotal();
  }

  generateIncomeStatement() {
    return {
      totalIncome: this.getIncomeTotal(),
      totalExpenses: this.getExpenseTotal(),
      netIncome: this.getNetIncome()
    };
  }

  generateCashFlow() {
    return {
      cashIn: this.getIncomeTotal(),
      cashOut: this.getExpenseTotal(),
      netCashFlow: this.getNetIncome()
    };
  }
}
