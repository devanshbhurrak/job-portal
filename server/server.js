import './config/instrument.js'
import * as Sentry from "@sentry/node";
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import { clerkWebhooks } from './controllers/webhooks.js';
import companyRoutes from './routes/companyRoutes.js'
import jobRoutes from './routes/jobRoutes.js'
import userRoutes from './routes/userRoutes.js'
import connectCloudinary from './config/cloudinary.js'
import { clerkMiddleware } from '@clerk/express'

const app = express()

await connectDB()
await connectCloudinary()

app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

app.get('/', (req, res) => res.send('API working'))
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });

app.post('/webhooks', clerkWebhooks)
app.use('/api/company', companyRoutes)
app.use('/api/jobs', jobRoutes)
app.use('/api/users', userRoutes)
  

const PORT = process.env.PORT || 5000
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`)
})