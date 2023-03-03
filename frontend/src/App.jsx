import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import AddBook from './pages/AddBook'
import Books from './pages/Books'
import BookDetail from './pages/BookDetail'

function App() {


  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main className='mx-auto max-w-7xl my-10'>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />

          <Route path="/books/:id" element={<BookDetail />} exact />


        </Routes>
      </main>
    </React.Fragment>
  )
}

export default App
