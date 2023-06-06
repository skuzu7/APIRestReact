import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { useContext, useEffect, useState } from 'react'
import {
  TransactionsContext,
  Transaction,
} from '../../../components/context/TransactionsContext'

const searchFormSchema = z.object({
  query: z.string(),
  category: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema> // type

export function SearchForm() {
  const { transactions, setTransactions } = useContext(TransactionsContext)
  const [originalTransactions, setOriginalTransactions] = useState<
    Transaction[]
  >([])

  useEffect(() => {
    if (originalTransactions.length === 0) {
      setOriginalTransactions([...transactions])
    }
  }, [transactions])

  const { register, handleSubmit } = useForm<SearchFormInputs>()

  function handleSearchTransactions({ query }: SearchFormInputs) {
    if (query) {
      setTransactions(
        originalTransactions.filter((transaction) => {
          return transaction.description
            .toLowerCase()
            .includes(query.toLowerCase())
        }),
      )
    }
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque uma transação"
        {...register('query')}
      />
      <button type="submit">Buscar</button>
    </SearchFormContainer>
  )
}
