import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactActions from "../redux/contactActions";

const contact = createReducer([], {
  [contactActions.fetchTaskSuccses]: (state, action) => action.payload,
  [contactActions.createTaskSuccses]: (state, action) => [
    ...state,
    action.payload,
  ],
  [contactActions.removeTaskSuccses]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer("", {
  [contactActions.changeFilter]: (state, action) => action.payload,
});

const isNotification = createReducer(false, {
  [contactActions.isNotification]: (state, action) => action.payload,
});

const loading = createReducer(false, {
  [contactActions.createTaskRequest]: () => true,
  [contactActions.createTaskSuccses]: () => false,
  [contactActions.fetchTaskRequest]: () => true,
  [contactActions.fetchTaskSuccses]: () => false,
  [contactActions.removeTaskRequest]: () => true,
  [contactActions.removeTaskSuccses]: () => false,
});

export default combineReducers({
  contact,
  filter,
  isNotification,
  loading,
});
