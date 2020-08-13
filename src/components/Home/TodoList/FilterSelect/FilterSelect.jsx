import React from 'react';
import PropTypes from 'prop-types';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import { FILTER_ALL, FILTER_DONE, FILTER_UNDONE } from '../constants';


const handleChange = (e, changeFilter) => changeFilter(e.target.value);

const FilterSelect = ({ changeFilter }) => (
  <div className="form-group row">
    <select
      className="form-control dark-select"
      onChange={e => handleChange(e, changeFilter)}
    >
      <option value={FILTER_ALL}>No filter</option>
      <option value={FILTER_DONE}>Show finished only</option>
      <option value={FILTER_UNDONE}>Show unfinished only</option>
    </select>
    <Dropdown onSelect={e => handleChange(e, changeFilter)}>
      <Dropdown.Toggle
        onSelect={e => handleChange(e, changeFilter)}
        variant="success"
        id="dropdown-basic"
      >
        No Filter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" value={FILTER_ALL}>
          No filter
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2" value={FILTER_DONE}>
          Show finished
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" value={FILTER_UNDONE}>
          Show unfinished
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
);

FilterSelect.propTypes = {
  changeFilter: PropTypes.func.isRequired
};

export default FilterSelect;