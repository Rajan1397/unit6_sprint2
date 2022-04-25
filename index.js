const express = require("express");
const connect = require("./configs/db");
const app = express();
const userController = require("./controllers/user.controller");
const branchDetailController = require("./controllers/branchDetail.controllers");
const masterAccountController = require("./controllers/masterAccount.controller");
const savingAccountController = require("./controllers/savingAccount.controller");
const fixedAccountController = require("./controllers/fixedAccount.controller");

app.use(express.json());

app.use("/users", userController);
app.use("/branchDetails", branchDetailController);
app.use("/masterAccounts", masterAccountController);
app.use("/savingAccounts", savingAccountController);
app.use("/fixedAccounts", fixedAccountController);

app.listen(8000, async () => {
  try {
    await connect();
    console.log("App is Listening on port 8000");
  } catch (err) {
    console.log(err.message);
  }
});
