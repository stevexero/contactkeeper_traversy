import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './ContactContext';
import contactReducer from './ContactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Sara Peachez',
        email: 'mylipsaregood@gmail.com',
        phone: '702-965-2110',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Alicia Blossom',
        email: 'itwerkonyou@gmail.com',
        phone: '702-696-6969',
        type: 'professional'
      },
      {
        id: 3,
        name: 'Amy Downunder',
        email: 'wideopenforyou@gmail.com',
        phone: '702-403-5150',
        type: 'personal'
      }
    ],
    current: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //   Add Contact
  const addContact = contact => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
