import React, { useEffect, useRef } from 'react';
import Sidebar from '../components/sidebar';

function Profile() {
    // const firstName = useRef();
    // const lastName = useRef();
    // const email = useRef();
    // const password = useRef();

    // /* SUBMIT */
    // function handleSubmit(event) {
    //     event.preventDefault();

    //     const signUpFirstName = firstName.current.value;
    //     const signUpLastName = lastName.current.value;
    //     const signUpEmail = email.current.value;
    //     const signUpPassword = password.current.value;

    //     const signUpObj = {
    //         firstName: signUpFirstName,
    //         lastName: signUpLastName,
    //         email: signUpEmail,
    //         password: signUpPassword
    //     };

    //     console.log(signUpObj); //Get Values from SignUp page inputs
    // }

    // useEffect(() => {
    //     const name = localStorage.getItem("name");
    //     firstName.current.value = name;
    //     const surname = localStorage.getItem("surname");
    //     lastName.current.value = surname;
    //     const emailStorage = localStorage.getItem("email");
    //     email.current.value = emailStorage;
    // }, []);

    return (
        <div className="container">
		<div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 edit_information">
			<form action=""  method="POST">	
				<h3 className="text-center">Edit Personal Information</h3>
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
						<div className="form-group">
							<label className="profile_details_text">First Name:</label>
							<input type="text" name="first_name" className="form-control" value="" required />
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
						<div className="form-group">
							<label className="profile_details_text">Last Name: </label>
							<input type="text" name="last_name" className="form-control" value="" required/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="form-group">
							<label className="profile_details_text">Email Address:</label>
							<input type="email" name="email" className="form-control" value="" required/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="form-group">
							<label className="profile_details_text">Mobile Number:</label>
							<input type="tel" name="phone" className="form-control" value="" required pattern="[0-9]{10}"/>
							
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="form-group">
							<label className="profile_details_text">Date Of Birth:</label>
							<input type="date" name="birthday" className="form-control" value="" required/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="form-group">
							<label className="profile_details_text">Gender:</label>
							<select name="gender" className="form-control" value="" required>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="form-group">
							<label className="profile_details_text">Nationality:</label>
							<input type="text" name="nationality" className="form-control" value="" required/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="form-group">
							<label className="profile_details_text">Monthly Income:</label>
							<input type="text" name="monthly_income" className="form-control" value="" required/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit">
						<div className="form-group">
							<input type="submit" className="btn btn-success" value="Submit"/>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
    );
}

export default Profile;
