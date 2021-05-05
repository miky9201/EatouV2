import React from 'react';

const Select = ({ className, name, labelValue, value, onChange, options }) => {
      return(
            <>
                  <label className={className} htmlFor={name}>{labelValue}</label>
                  <select id={name} value={value} onChange={onChange}>
                        {options.map(option => option)}
                   </select>
            </>
      )
}

export default Select;