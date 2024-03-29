import React from 'react'

function EditTask() {
  return (
    <form>
      <h1>Add Task</h1>

      <label>Title</label>
      <input type="text" name="Enter Title of Task" id="" />

      <label>Description</label>
      <input type="text" name="Description" id="" />

      <label>Team</label>
      <input type="text" name="Team" id="" />

      <label>Asignee</label>
      <input type="text" name="Asignee" id="" />

      <label>Priority</label>
    </form>
  );
}

export default EditTask