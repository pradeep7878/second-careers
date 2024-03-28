import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const DateComponent = () => {

    const [state, setState] = useState({
        dateOfBirth: new Date()
    })
    const handleChange = date => {
        setState({
            dateOfBirth: date
        });
    };


    return (
        <React.Fragment>
            <DatePicker
                className='form-control date-picker-component '
                selected={state.dateOfBirth}
                onChange={handleChange}
                maxDate={new Date()}
                dateFormat="dd/MM/y"
            />
        </React.Fragment>
    )
}

export default DateComponent
