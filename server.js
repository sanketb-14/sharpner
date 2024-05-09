import express from 'express';
import 'dotenv/config'
import userRouter from './routes/userRoutes.js'
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/api/v1/users',userRouter)

const port = 3000
app.listen(port , console.log("server is listening on port 3000"))