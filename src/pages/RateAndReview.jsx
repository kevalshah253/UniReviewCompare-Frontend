import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ComparisionDetail from "../components/ComparisonDetail";
import { IoIosClose } from "react-icons/io";

// Component for the popup
const Popup = ({ universities, onSelect, setShowPopup }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredUniversities, setFilteredUniversities] = useState(universities);
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    useEffect(() => {
        setFilteredUniversities(universities.filter(university =>
            university.name.toLowerCase().includes(searchQuery.toLowerCase())
        ));
    }, [searchQuery, universities]);   
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg">
                <div className='flex justify-between items-center'>
                    <h2 className="text-xl font-semibold mb-4">Select University</h2>
                    <h2 className='text-2xl cursor-pointer font-semibold mb-4 ml-4 text-white' onClick={() => setShowPopup(false)}><IoIosClose /></h2>
                </div>
                <div>
                    <input type="text" onChange={handleSearchChange} placeholder="Search University" className="form-control mb-4" />
                </div>
                <ul className="list-group">
                    {filteredUniversities.map((university, index) => (
                        <li key={index} className="list-group-item cursor-pointer" onClick={() => onSelect(university)}>
                            {university.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const RateAndReview = () => {
    const [universities, setUniversities] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedUniversity, setSelectedUniversity] = useState({
        box1: null,
        box2: null,
    });

    useEffect(() => {
        // Fetch universities from API
        axios.get('http://localhost:8000/v1/universities', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                setUniversities(response.data);
            })
            .catch(error => {
                console.error('Error fetching universities:', error);
            });
    }, []);

    const handleAddUniClick = (boxNumber) => {
        setShowPopup(true);
        setSelectedUniversity(prevState => ({
            ...prevState,
            [boxNumber]: null,
        }));
    };

    const handleUniversitySelect = (university) => {
        const boxNumber = selectedUniversity.box1 ? 'box2' : 'box1';
        setSelectedUniversity(prevState => ({
            ...prevState,
            [boxNumber]: university,
        }));
        setShowPopup(false);
    };

    return (
        <div className="container py-5">
            <div className="row">
                {/* Giant Box 1 */}
                <div className="col-lg-6 mb-4">
                    <div className="border rounded p-4 bg-dark text-white">
                        <h2 className="text-xl font-semibold mb-4">University 1</h2>
                        <button onClick={() => handleAddUniClick('box1')} className="btn btn-primary mb-3">Add Uni</button>
                        {selectedUniversity.box1 && (
                            <ComparisionDetail university={selectedUniversity.box1} />
                        )}
                    </div>
                </div>
                {/* Giant Box 2 */}
                <div className="col-lg-6 mb-4">
                    <div className="border rounded p-4 bg-dark text-white">
                        <h2 className="text-xl font-semibold mb-4">University 2</h2>
                        <button onClick={() => handleAddUniClick('box2')} className="btn btn-primary mb-3">Add Uni</button>
                        {selectedUniversity.box2 && (
                            <ComparisionDetail university={selectedUniversity.box2} />
                        )}
                    </div>
                </div>

                {showPopup && <Popup universities={universities} onSelect={handleUniversitySelect} setShowPopup={setShowPopup} />}
            </div>
        </div>
    );
};

export default RateAndReview;
