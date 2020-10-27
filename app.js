const express = require("express");
const cors = require('cors')
const app = express();
const PORT = 3000;

app.use(cors())



app.use(express.static("public"));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));