import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook"
import Books from "./components/Book/Books"
import About from "./components/About"
import BookDetail from './components/Book/BookDetail'

function App() {
  return (
    <>
    <header>
    <Header/>
    </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/add' element={<AddBook/>} exact />
          <Route path='/books' element={<Books/>} exact />
          <Route path='/about' element={<About/>} exact />
          <Route path='/books/:id' element={<BookDetail />} exact />
        </Routes>
      </main>
    </>
  );
}

export default App;
