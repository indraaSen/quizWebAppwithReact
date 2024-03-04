import { Box, Card, TextField, Button } from "@mui/material";
import { useState } from "react";
import { addNewAdmin } from "../../../APIs/APIs";

const AddNewAdmin = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("admin");

  return (
    <Box sx={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      <Card
        sx={{
          height: "700px",
          width: "480px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          padding: "40px",
        }}
      >
        <h1>
          <b>Add New Admin</b>
        </h1>
        <TextField
          id="outlined-basic"
          label="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Type"
          type="text"
          value="admin"
          variant="outlined"
          disabled
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          onClick={() =>
            addNewAdmin(
              fullName,
              email,
              password,
              confirmPassword,
              userType,
              setFullName,
              setEmail,
              setPassword,
              setConfirmPassword
            )
          }
        >
          Add
        </Button>
      </Card>
    </Box>
  );
};

export default AddNewAdmin;
