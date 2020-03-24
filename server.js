const express = require('express');
const morgan = require('morgan');
const app = express();


const PORT = process.env.PORT || 3000;








app.listen(process.env.PORT, () => {
    console.log(`Client listening Port: ${PORT}`)
})