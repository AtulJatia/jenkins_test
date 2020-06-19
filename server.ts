import express from 'express';

const app = express();

const PORT: string = process.env.PORT || '3000';

app.get('/', (req, res) => {
    res.send('<h1> Welcome to CI/CD </h1');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});