import contactAction from "./contactActions";
import axios from "axios";

const createTask = (name, number) => (dispatch) => {
  dispatch(contactAction.createTaskRequest());
  axios
    .post("http://localhost:5000/contacts", { name, number })
    .then((resp) => {
      dispatch(contactAction.createTaskSuccses(resp.data));
    })
    .catch((error) => dispatch(contactAction.createTaskErorr(error)));
};

const fetchTask = () => (dispatch) => {
  dispatch(contactAction.fetchTaskRequest());
  axios
    .get("http://localhost:5000/contacts")
    .then(({ data }) => dispatch(contactAction.fetchTaskSuccses(data)))
    .catch((error) => contactAction.fetchTaskErorr(error));
};

const removeTask = (id) => (dispatch) => {
  dispatch(contactAction.removeTaskRequest());
  axios
    .delete(`http://localhost:5000/contacts/${id}`)
    .then(() => dispatch(contactAction.removeTaskSuccses(id)))
    .catch(() => dispatch(contactAction.removeTaskErorr()));
};

export default {
  createTask,
  fetchTask,
  removeTask,
};
