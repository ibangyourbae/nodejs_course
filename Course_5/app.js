
const { response } = require('express');
const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');
app.set('views','views');

// listen for requests
app.listen(3000);

app.use((request,response) => {
    console.log('new request made:');
    console.log('host: ',request.hostname);
    console.log('path: ',request.path);
    console.log('method: ',request.method);
});



app.get('/', (request, response) => {
    const blogs = [
        {judul: 'How to invest your money', snippet: 'lorem50'},
        {judul: 'How to upgrade your self', snippet: 'lorem1000'},
    ];
    response.render('index', {title: 'Home',blogs:blogs});
});

app.get('/about', (request, response) => {
    // response.write('');
    // response.send('<p>about page</p>');
    response.render('about', {title: 'About'});
});

// redirects
app.get('/about-us', (request, response) => {
    response.redirect('/about');
});

app.get('/blogs/create', (request, response) => {
    response.render('create', {title: 'Create a new Blog'});
});

// 404 page
app.use((request, response) => {
    response.status(404).render('404', {title: '404'});
});