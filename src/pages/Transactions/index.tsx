import { TransactionsProvider } from '../../components/context/TransactionsContext'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { Table } from '../../components/Table'
import { SearchForm } from './SearchForm'

export function Transactions() {
  return (
    <div>
      <TransactionsProvider>
        <Header />
        <Summary />
        <SearchForm />
        <Table />
      </TransactionsProvider>
    </div>
  )
}
