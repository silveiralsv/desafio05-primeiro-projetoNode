/* eslint-disable class-methods-use-this */
import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(transactions: Transaction[]): Balance {
    const income = transactions
      .filter(element => element.type === 'income')
      .reduce((currentValue, element) => currentValue + element.value, 0);

    const outcome = transactions
      .filter(element => element.type === 'outcome')
      .reduce((currentValue, element) => currentValue + element.value, 0);

    // const total = transactions.reduce(
    //   (currentValue, element) =>
    //     element.type === 'income'
    //       ? currentValue + element.value
    //       : currentValue - element.value,
    //   0,
    // );

    const total = income - outcome;

    const balance: Balance = {
      income,
      outcome,
      total,
    };

    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, type, value });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
