const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();

dotenv.config({ path: './config/config.env' });
app.use(bodyParser.json());

// Database Connection
connectDB();

// Body Parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Routes
const notes = require('./routes/notes');

app.use('/api/v1/notes', notes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
