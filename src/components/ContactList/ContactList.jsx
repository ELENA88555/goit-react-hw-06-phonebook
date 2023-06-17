import css from './ContactList.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts, getFilter } from 'redux/slice';
import { nanoid } from '@reduxjs/toolkit';

const contactId = nanoid();

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  const btnDeleteHandler = contactId => {
    dispatch(deleteContact(contactId));
  };

  const contactsList = getVisibleContacts();

  return (
    <ul className={css.list}>
      {contactsList.map(({ id, name, number }) => (
        <li className={css.item} key={id} id={contactId}>
          <p className={css.text}>{name}</p>
          <p className={css.text}>{number}</p>
          <button
            type="button"
            className={css.btnDelete}
            onClick={() => btnDeleteHandler(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
