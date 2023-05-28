import { memo } from 'react';
import './ContactList.css';
import { filterContact } from 'redux/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

function ContactList() {
  const { contacts, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const onClickFunc = e => {
    dispatch(filterContact(e.target.closest('li').dataset.id));
  };

  const filterFunc = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterMass = filterFunc();

  return (
    <ul className="list">
      {filterMass.map(({ name, id, number }) => (
        <li key={id} data-id={id}>
          <span className="name">{name}:</span> <span>{number}</span>
          <button className="buttonList" type="button" onClick={onClickFunc}>
            delete
          </button>
        </li>
      ))}
      {!filterMass[0] && <li>Not found!</li>}
    </ul>
  );
}

export default memo(ContactList);
