import React, { useState, useEffect } from 'react';

const UniversityListTable = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/v1/universities')
      .then(response => response.json())
      .then(data => setUniversities(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12">
          <div className="card bg-dark">
            {/* <div className="card-header bg-primary text-white">
              <h3 className="card-title">List Of Universities</h3>
            </div> */}
            <div className="card-body">
              <div className="table-responsive ">
                <table className="table">
                  <thead className='text-white'>
                    <tr>
                      <th>Schools</th>
                      <th>Location</th>
                      <th>Tuition</th>
                      <th>Acceptance Rate</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody className='text-white'>
                    {universities.map(university => (
                      <tr key={university.id}>
                        <td >{university.name}</td>
                        <td>{university.location}</td>
                        <td>{university.tuition_fee}</td>
                        <td>{university.acceptance_rate}</td>
                        <td>{university.rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityListTable;
