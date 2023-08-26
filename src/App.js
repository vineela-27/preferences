import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    try {
      const response = await fetch(`http://localhost:3001/getData?page=${page}`);
      const jsonData = await response.json();
      setData(jsonData.users);
      setTotalPages(jsonData.totalPages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const generatePaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={i === currentPage ? 'active' : ''}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="App">
      <h1>Local Food Data</h1>
      <table>
        <thead>
          <tr>
            <th>Translated Recipe Name</th>
            <th>Cuisine</th>
            <th>image</th>
          </tr>
        </thead>
<tbody>
  {data.map((item, index) => (
    <tr key={index}>
      <td>{item.TranslatedRecipeName}</td>
      <td>{item.Cuisine}</td>
      <td><img src={item.imageurl} alt='Food' style={{ maxWidth: '100px' }} /></td>
    </tr>
  ))}
</tbody>
// ...

      </table>
      <div className="pagination">
        <button onClick={() => handlePageClick(currentPage - 1)}>Previous</button>
        {generatePaginationButtons()}
        <button onClick={() => handlePageClick(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
}

export default App;
