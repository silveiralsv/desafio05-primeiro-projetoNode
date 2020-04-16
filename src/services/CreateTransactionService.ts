import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, type, value }: Request): Transaction {
    if (type === 'income' || type === 'outcome') {
      if (type === 'outcome') {
        const balance = this.transactionsRepository.getBalance(
          this.transactionsRepository.all(),
        );

        if (balance.total < value) {
          throw Error('You dont have enought money to this transaction!');
        }
      }

      const transaction = new Transaction({ title, type, value });

      this.transactionsRepository.create(transaction);
      return transaction;
    }

    throw Error('Invalid Type value. Type must be income or outcome" !');
  }
}

export default CreateTransactionService;
