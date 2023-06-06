import React, { createContext, useState, useEffect } from 'react'

// Definindo a interface para a transação
export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

// Definindo a interface para o contexto
interface TransactionsContextData {
  transactions: Transaction[]
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>
}

// Criando o contexto
export const TransactionsContext = createContext<TransactionsContextData>({
  transactions: [],
  setTransactions: () => {},
})

// Criando o provedor de contexto
export const TransactionsProvider: React.FC<TransactionsProviderProps> = ({
  children,
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    // Função para carregar as transações
    async function loadTransactions() {
      try {
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json()
        setTransactions(data)
      } catch (error) {
        console.log('Ocorreu um erro:', error)
      }
    }

    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
