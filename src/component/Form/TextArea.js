import React from 'react';

const TextArea = ({ className, name, labelValue, onChange }) => {
      return(
            <>
                  <label className={className} htmlFor={name}>{labelValue}</label>
                  <textarea id={name} onChange={onChange} name={name}>
                  </textarea>
            </>
      )
}

export default TextArea;