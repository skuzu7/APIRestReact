import { useContext } from 'react'
import { TransactionsContext } from '../context/TransactionsContext'
import { StyledTable, PriceHighLight } from './styles'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

export function Table() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <StyledTable>
      <table>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>
                <PriceHighLight variant={transaction.type}>
                  {transaction.type === 'outcome' && '-'}
                  {priceFormatter.format(Math.abs(transaction.price))}
                </PriceHighLight>
              </td>
              <td>{transaction.category}</td>
              <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTable>
  )
}
