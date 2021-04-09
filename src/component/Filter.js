import React, { useContext } from 'react';

import { FilterContext } from '../context/FilterContext';

const Filter = () => {
      const [ filterValue, setFilterValue ] = useContext(FilterContext);
      
      const handleChange = (e) => {
            setFilterValue(e.target.value);
      }

      return(
            <div className="filter yellow flex-col-center-center">
                  <label htmlFor="star-select">Une exigence sur la qualité de la cuisine ?</label>
                  <form>
                        <select value={filterValue} onChange={handleChange}>
                              <option value="0">Tous les restaurants</option>
                              <option value="1">1 étoile</option>
                              <option value="2">2 étoiles</option>
                              <option value="3">3 étoiles</option>
                              <option value="4">4 étoiles</option>
                              <option value="5">5 étoiles</option>
                        </select>
                  </form>
            </div>
      )
}

export default Filter;