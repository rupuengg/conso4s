import { contactActionTypes } from "../actions/contact.action";

const initialState = {
  lists: [
    {
      id: '1',
      name: 'Test One',
      email: 'test@one.com',
      phone: '9898989898'
    }
  ],
  delete_id: -1,
}

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case contactActionTypes.CONTACT_LIST:
      return { ...state };
    case contactActionTypes.CONTACT_GET:
      return { ...state };
    case contactActionTypes.CONTACT_CREATE:
      return { ...state, lists: [...state.lists, action.data] };
    case contactActionTypes.CONTACT_UPDATE:
      const contacts = state.lists;
      const contactIndex = contacts.findIndex(val => val.id == action.contactId);
      return {
        ...state, lists: [
          ...state.lists.slice(0, contactIndex),
          {
            ...state.lists[contactIndex],
            ...action.data
          },
          ...state.lists.slice(contactIndex + 1)
        ]
      };
    default:
      return { ...state };
  }
}