const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const bodyParser = require('body-parser');



app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client")))



/*************** Header Routes********************************/
    app.use('/api/header/movie', createProxyMiddleware({
        target: 'http://localhost:3001',
        changeOrigin: true
    }));


    app.use('/api/header/titles', createProxyMiddleware({
        target: 'http://localhost:3001',
        changeOrigin: true
    }));



/***************************Reviews Routes *******************/
  app.use(
      '/api/reviews/sort/*', createProxyMiddleware({
          target: 'http://localhost:3002',
          changeOrigin: true
  }))



    app.use(
        '/api/reviews', createProxyMiddleware({
            target: 'http://localhost:3002',
            changeOrigin: true
        }))




    app.use(
        '/api/reviews/*', createProxyMiddleware({
            target: 'http://localhost:3002',
            changeOrigin: true
        }))




    app.use(
        '/api/movies/', createProxyMiddleware({
            target: 'http://localhost:3002',
            changeOrigin: true
        }))



/*************************Similars Routes***********************/


    app.use(
        '/api/descriptions', createProxyMiddleware({
            target: 'http://localhost:3003',
            changeOrigin: true
        }))


    app.use(
        '/api/similars', createProxyMiddleware({
            target: 'http://localhost:3003',
            changeOrigin: true
        }))



    

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Client listening Port: ${PORT}`)
})