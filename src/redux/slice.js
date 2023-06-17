import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '' },
  reducers: {
    addContact: (state, action)=> {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action)=> {
     state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      },
    changeFilter: (state, action)=> {
      state.filter = action.payload;
    },
  },
});


export const reducer = contactsSlice.reducer

export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;

