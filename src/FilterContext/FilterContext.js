import React, { useState, createContext } from 'react';

export const FilterContext = createContext();

export const FilterProvider = (props) => {
      const [filterValue, setFilterValue] = useState(0);
      return(
            <FilterContext.Provider value={[filterValue, setFilterValue]}>
                  {props.children}
            </FilterContext.Provider>
      )
}

      