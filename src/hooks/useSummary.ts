import { useContext } from 'react'
import { TransactionsContext } from '../components/context/TransactionsContext'

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  // income, outcome, total
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
      } else {
        acc.outcome += transaction.price
      }
      return acc
    },
    { income: 0, outcome: 0, total: 0 }, // Valor inicial para o resumo
  )

  summary.total = summary.income - summary.outcome

  return summary
}
