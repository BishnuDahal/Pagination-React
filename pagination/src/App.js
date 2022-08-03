
import { useState } from 'react';
import './App.css';
import Paginate from './components/Pagination/Paginate';

function App() {
  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20)

  // Change page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
  };
  return (
    <div className="App">
      <header className="App-header">
        <Paginate
          postsPerPage={postsPerPage}
          totalPosts={100}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

      </header>
    </div>
  );
}

export default App;
