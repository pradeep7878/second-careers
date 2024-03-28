import React, { useContext, useState } from 'react'
import CommonContext from '../../hooks/CommonContext'

const Input = ({
        type,
        className,
        placeHolder,
        ariaLabel,
        testId,
        required,
        valueFromProfessionalSignup,
        nameFromProfessionalSignup,
        onChange,
        pattern,
        dataTestid,
        role,
        alt,
      }) => {


    const [unfocused, setUnfocused] = useState(false);

    const handleUnfocused = () => {
        setUnfocused(true)
    }


  return (
    <>
          <input
            data-testid={dataTestid}
            type={type}
            className={`${className} `}
            placeholder={placeHolder}
            aria-label={ariaLabel} 
            alt={alt}
            role={role}     
            id={testId}          
            required
            name={nameFromProfessionalSignup}
            // value={valueFromProfessionalSignup}
            onChange={onChange}
            pattern={pattern}
            onBlur={handleUnfocused} 
            onFocus={() => nameFromProfessionalSignup==="confirmPassword" && setUnfocused(true)}  
            focused={unfocused.toString()}
          />  
    </>
  )
}

export default Input