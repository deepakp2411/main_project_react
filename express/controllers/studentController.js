const allStudents = (req, res) => {
  res.send("All student");
};

const deleteStudents = (req, res) => {
  console.log(req.params);

  const { id } = req.params;
  console.log(id);
  if (id == 10) {
    res.send(`This is sonam's id can not delete `);
  } else {
    res.send(`Student ${id} deleted`);
  }
};

module.exports = { allStudents, deleteStudents };
