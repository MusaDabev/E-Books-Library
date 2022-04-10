import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Book from './Book'
import './Book.css'

const URL = "http://localhost:5000/books"

const fetchHandler = async () => {
 return  await axios.get(URL).then((res) => {
     return   res.data
    })
}

function Books() {

    const [books, setBooks] = useState()

    useEffect(() => {
        fetchHandler().then(data => setBooks(data.books))
    }, [])
  
  return (
    <div>
     <ul>
         { books && books.map((book, index) => (
             <li key={index}>
                 <Book book={book} />
             </li>
         ))}
     </ul>
    </div>
  )
}

export default Books
