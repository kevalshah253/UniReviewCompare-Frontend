import React from 'react';

const ComparisionDetail = ({university}) => {
    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-11">
                    <div className="card bg-primary text-white">
                        <div className="card-body">
                            <img src={university.image_url} alt={university.name} className="card-img-top rounded-lg shadow-md mb-4 w-100" style={{ height: '300px', objectFit: 'cover' }} />
                            <h2 className="text-2xl font-semibold mb-2">{university.name}</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="font-semibold">Location:</div>
                                    <div>{university.location}</div>
                                    <div className="font-semibold">Established Year:</div>
                                    <div>{university.established_year}</div>
                                    <div className="font-semibold">Total Students:</div>
                                    <div>{university.total_students}</div>
                                    <div className="font-semibold">Courses Offered:</div>
                                    <div>{university.courses_offered.join(', ')}</div>
                                </div>
                                <div className="col-md-6">
                                    <div className="font-semibold">Tuition Fee:</div>
                                    <div>{university.tuition_fee}</div>
                                    <div className="font-semibold">Acceptance Rate:</div>
                                    <div>{university.acceptance_rate}</div>
                                    <div className="font-semibold">Student Faculty Ratio:</div>
                                    <div>{university.student_faculty_ratio}</div>
                                    <div className="font-semibold">Campus Size:</div>
                                    <div>{university.campus_size}</div>
                                    <div className="font-semibold">Ranking:</div>
                                    <div>{university.ranking}</div>
                                    <div className="font-semibold">Website:</div>
                                    <div><a href={university.website} target='_blank' className="text-blue-500">{university.website}</a></div>
                                    {/* <div className="font-semibold">Google Review:</div>
                                    <div>{university.google_review}</div>
                                    <div className="font-semibold">UniReview:</div>
                                    <div>{university.uniReview}</div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComparisionDetail;
