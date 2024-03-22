import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import fakeUniData from '../data/fakeUni'; // Import the JSON data

const PAGE_SIZE = 5;

const UniversityListCard2 = () => {
    const [universities, setUniversities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Function to paginate the universities array
        const paginateData = (data, page, pageSize) => {
            const startIndex = (page - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            return data.slice(startIndex, endIndex);
        };

        setLoading(true);
        // Simulating an API call by using setTimeout
        setTimeout(() => {
            const paginatedData = paginateData(fakeUniData, currentPage, PAGE_SIZE);
            setUniversities(paginatedData);
            setTotalPages(Math.ceil(fakeUniData.length / PAGE_SIZE));
            setLoading(false);
        }, 1000); // Adjust the timeout as per your requirement
    }, [currentPage]);

    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {loading ? (
                    <Loader />
                ) : universities?.length > 0 ? (
                    universities.map((university) => (
                        <div key={university.id} className="col">
                            <div className="card">
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

export default UniversityListCard2;
