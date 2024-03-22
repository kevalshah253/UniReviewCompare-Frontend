import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PAGE_SIZE = 5;

const UniversityListCard = () => {
    const [universities, setUniversities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchUniversities = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:8000/v1/universities?page_no=${currentPage}&search_term=${searchTerm}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${localStorage.getItem('token')}`
                    }
                });
            setUniversities(response.data);
            setLoading(false);
            const totalCount = Number(response.headers['x-total-count']);
            setTotalPages(Math.ceil(totalCount / PAGE_SIZE));
        } catch (error) {
            console.error('Error fetching universities:', error);
        }
    };

    useEffect(() => {
        fetchUniversities();
    }, [currentPage, searchTerm]);

    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            {/* <div className="mb-3 d-flex justify-content-between align-items-center">
                                <h2 className="text-xl font-semibold mb-4">University List</h2>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search University" onChange={handleSearch} />
                                    <button className="btn btn-primary" type="button">
                                        <FaSearch />
                                    </button>
                                </div>
                            </div> */}
                            {loading ? (
                                <Loader />
                            ) : universities?.length > 0 ? (
                                <div className="mb-8">
                                    {universities.map((university) => (
                                        <div key={university.id} className="card mb-4">
                                            <div className="card-body">
                                                <Link to={`/university/${university.id}`}>
                                                    <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: `url(${university.image_url})` }}>
                                                        <div className="d-flex justify-content-end">
                                                            <svg className="h-6 w-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                                <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className="mt-3">
                                                    <p className="font-bold">{university.name}</p>
                                                    <p className="text-gray-600">{university.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center">No Universities Found</div>
                            )}
                            {universities?.length > 0 && (
                                <div className="d-flex justify-content-center">
                                    <button onClick={handlePreviousPage} disabled={currentPage === 1} className="btn btn-primary me-2">
                                        Previous
                                    </button>
                                    <button onClick={handleNextPage} disabled={currentPage === totalPages} className="btn btn-primary">
                                        Next
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UniversityListCard;
