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
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {loading ? (
                    <Loader />
                ) : universities?.length > 0 ? (
                    universities.map((university) => (
                        <div key={university.id} className="col">
                            <div className="card h-100 d-flex flex-column">
                                <div className="card-body">
                                    <Link to={`/university/${university.id}`}>
                                        <div className="image-container overflow-hidden" style={{ height: '200px' }}>
                                            <img src={university.image_url} alt={university.name} className="img-fluid w-100" style={{ height: '100%', objectFit: 'cover' }} />
                                        </div>
                                    </Link>
                                    <div className="mt-3">
                                        <p className="font-bold">{university.name}</p>
                                        <p className="text-gray-600">{university.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center">No Universities Found</div>
                )}
            </div>
            {universities?.length > 0 && (
                <div className="d-flex justify-content-center mt-3">
                    <button onClick={handlePreviousPage} disabled={currentPage === 1} className="btn btn-primary me-2">
                        Previous
                    </button>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages} className="btn btn-primary">
                        Next
                    </button>
                </div>
            )}
        </div>
    );
       
};


export default UniversityListCard;
