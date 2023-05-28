import './Filter.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { useSelector } from 'react-redux';

const fieldIdFilter = nanoid();

function Filter({ filterState }) {
  const filter = useSelector(state => state.filter);

  const onChange = e => {
    const { name, value } = e.target;
    filterState(name, value);
  };

  return (
    <>
      <label className="leb" htmlFor={fieldIdFilter}>
        Find contacts by name
      </label>
      <input
        className="filter"
        type="text"
        name="filter"
        value={filter}
        id={fieldIdFilter}
        onChange={onChange}
      />
    </>
  );
}

Filter.propTypes = {
  filterState: PropTypes.func.isRequired,
};

export default memo(Filter);
