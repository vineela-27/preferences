import React, { useState, useEffect } from 'react';
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Dashboard() {
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
      <div className='cards'>
      <tbody className='flex-container'>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                <div className='imagelab'>
                  <img src={item.imageurl} alt='Food' style={{ maxWidth: '100%' }} />
                  </div>
                  <div className='label'>
                  <p className="name-label"><b> Name: {item.TranslatedRecipeName}</b></p>
                  <p className="cuisine-label"> <b> Cuisine: {item.Cuisine}</b></p>
                  </div>
                </div>
                <div className="flip-card-back">
                <h2>Ingredients</h2>
                  <p>{item.CleanedIngredients}</p>
                  <button>Add Recipe</button>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      </div>
      <div className="pagination">
        <button onClick={() => handlePageClick(currentPage - 1)}>Previous</button>
        {generatePaginationButtons()}
        <button onClick={() => handlePageClick(currentPage + 1)}>Next</button>
      </div>
    </div>
    
  );
}

export default Dashboard;