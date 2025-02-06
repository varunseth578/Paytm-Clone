const express = require("express");

const mainRouter = require("./routes/index");

app.use("/api/v1", mainRouter);

// / api/v1/user/signup
// / api/v1/user/sigin
// / api/v1/user/changepassword
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
