import React, {useState} from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
   const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="mt-5 container">
            <form>
            <div class="form-group">
                <label>Full Name</label>
                <input type="name" class="form-control" id="fullName" placeholder="Full Name"/>
            </div>
            <div class="form-group mt-3">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group mt-3">
                <label for="exampleInputPassword1">Phone Number</label>
                <input class="form-control" id="phoneNumber" placeholder="Phone Number"/>
            </div>

            <div class="form-group mt-3">
                <label for="exampleInputPassword1">Services</label>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">
                Pet Boarding
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label class="form-check-label" for="flexCheckChecked">
                Pet Grooming
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label class="form-check-label" for="flexCheckChecked">
                Pet Health
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label class="form-check-label" for="flexCheckChecked">
                Pet Supplies
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label class="form-check-label" for="flexCheckChecked">
                Checked checkbox
            </label>
            </div>
            </div>

            <div class="mt-3">
                <label>Start Date</label>
            </div>
            <div>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>

            <button type="submit" class="btn btn-primary mt-4">Submit</button>
            </form>
        </div>
    )
}
export default Form 