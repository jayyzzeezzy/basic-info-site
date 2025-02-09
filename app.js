const http = require('node:http');
const url = require('node:url');
const fs = require('node:fs');

const express = require("express");
const app = express();

app.get('/', function (req, res, next) {
    res.sendFile('/home/jayyzzeezy/repos/basic-info-site/index.html', function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', 'index.html');
        }
    });
});

app.get('/index.html', function (req, res, next) {
    res.sendFile('/home/jayyzzeezy/repos/basic-info-site/index.html', function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', 'index.html');
        }
    });
});

app.get('/about.html', function (req, res, next) {
    res.sendFile('/home/jayyzzeezy/repos/basic-info-site/about.html', function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', 'about.html');
        }
    });
});

app.get('/contact-me.html', function (req, res, next) {
    res.sendFile('/home/jayyzzeezy/repos/basic-info-site/contact-me.html', function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', 'contact-me.html');
        }
    });
});

app.get('*', function (req, res, next) {
    res.sendFile('/home/jayyzzeezy/repos/basic-info-site/404.html', function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', '404.html');
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('successful!');
});