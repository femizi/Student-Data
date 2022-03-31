import { useState } from 'react'
import Header from './components/Header'
import Filter from './components/Filter'
import Table from './components/Table'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import './App.css'
import AppWrapper from './components/AppWrapper'
const queryClient = new QueryClient()
function App() {

 
  return (

    <div className="App px-10 bg-[#E5E5E5] h-screen overflow-hidden ">
      <QueryClientProvider client={queryClient}>


        <AppWrapper/>
      </QueryClientProvider>

    </div>
  )
}

export default App
