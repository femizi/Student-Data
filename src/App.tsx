import { useState } from 'react'
import Header from './components/Header'
import Filter from './components/Filter'
import Table from './components/Table'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import './App.css'
const queryClient = new QueryClient()
function App() {
  


  return (
    <div className="App px-10 bg-[#E5E5E5] min-h-screen">
       <QueryClientProvider client={queryClient}>
         

      <Header />
      <Filter />
      <Table/>
      </QueryClientProvider>
      
    </div>
  )
}

export default App
