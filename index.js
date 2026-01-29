import express from "express";

const app = express();
const PORT = 4000;

app.use(express.json());

// ================= EMPLOYEES ROUTES =================

// GET employees
app.get("/employees", (req, res) => {
  res.json({
    message: "Employees route accessed",
    status: "GET request successful"
  });
});

// POST employees (no adding, just demonstration)
app.post("/employees", (req, res) => {
  res.json({
    message: "POST request received for employees",
    note: "No employee was added"
  });
});

// PATCH employees
app.patch("/employees/:id", (req, res) => {
  res.json({
    message: `PATCH request for employee with ID ${req.params.id}`,
    note: "Employee not updated, route demonstration only"
  });
});

// DELETE employees
app.delete("/employees/:id", (req, res) => {
  res.json({
    message: `DELETE request for employee with ID ${req.params.id}`,
    note: "Employee not deleted knowing us 😏"
  });
});

// ================= MANAGERS ROUTES =================

// GET managers
app.get("/managers", (req, res) => {
  res.json({
    message: "Managers route accessed",
    status: "GET request successful"
  });
});

// POST managers
app.post("/managers", (req, res) => {
  res.json({
    message: "POST request received for managers",
    note: "No manager was added"
  });
});

// PATCH managers
app.patch("/managers/:id", (req, res) => {
  res.json({
    message: `PATCH request for manager with ID ${req.params.id}`,
    note: "Manager not updated"
  });
});

// DELETE managers
app.delete("/managers/:id", (req, res) => {
  res.json({
    message: `DELETE request for manager with ID ${req.params.id}`,
    note: "Manager not deleted"
  });
});

// ================= SERVER =================
app.listen(PORT, () => {
  console.log(`PICK 'n STEAL API running on port ${PORT}`);
});
