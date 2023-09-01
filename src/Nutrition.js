import React, { useEffect, useState } from 'react';

function Nutrition() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    // Fetch data from your backend API with pagination parameters
    fetch(`http://localhost:3001/nutrition?page=${page}&pageSize=${pageSize}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setFoods(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [page, pageSize]); // Re-fetch data when page or pageSize changes

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="Nutrition">
      <h1>Nutrition Data</h1>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}

      {!loading && !error && (
        <>
          <table>
            <thead>
              <tr>
                <th>Ingredient Name</th>
                <th>Total Fat</th>
                <th>Protein</th>
                <th>Cholesterol</th>
                <th>Carbohydrate</th>
                <th>Calories</th>
                <th>Calcium</th>
              </tr>
            </thead>
            <tbody>
              {foods.map((food, index) => (
                <tr key={index}>
                    <td>{food.name}</td>
                  <td>{food.total_fat}</td>
                  <td>{food.protein}</td>
                  <td>{food.cholesterol}</td>
                  <td>{food.carbohydrate}</td>
                  <td>{food.calories}</td>
                  <td>{food.calcium}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              Previous Page
            </button>
            <span>Page {page}</span>
            <button onClick={() => handlePageChange(page + 1)}>Next Page</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Nutrition;
