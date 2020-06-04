import * as functions from 'firebase-functions';
import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors())

app.post('/', (req, res) => {
    const url = "https://script.google.com/macros/s/AKfycbyyf68qv8kWjS0qfj_GVm25eQOBqY5eAZWaHigdlOpjia4ZG2Y/exec";
    const params = req.body;
    axios.post(url, params).catch((err) => {
        throw err;
    });
    res.send('complete')
});

export const api = functions.https.onRequest(app);