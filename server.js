const express = require('express');
const morgan = require('morgan');
const cors = requre('cors')
const app = express();
const PORT = process.env.PORT || 3000;



app.use(cors());
app.use(morgan());












app.listen(process.env.PORT, () => {
    console.log(`Client listening Port: ${PORT}`)
})