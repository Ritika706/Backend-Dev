import express from 'express';
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('photo-gallery'));

app.listen(3000, () => {
    console.log(`Server running`);
});