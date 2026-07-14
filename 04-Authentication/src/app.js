const express = require('express');
const authRouter = require('./routes/auth.routes');
const postRoutes = require('./routes/post.routes');
const cookieParser = require('cookie-parser');


// Middle Ware !
const app = express();
app.use(express.json());
app.use(cookieParser());



// /api/auth ---> ye ek prefix hai! 
app.use('/api/auth', authRouter);
app.use('/api/posts', postRoutes );


module.exports = app;