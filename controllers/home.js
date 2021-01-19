const express = require('express');
const dbMaria = require('../util/mariaDb'); 
const dbArango = require('../util/arangoDb');

exports.getHome = (req, res, next) => {
    
    const connection = dbArango.query('FOR status IN sandbox_arango RETURN status').then(value => {
        return value.all();
    })

    connection.then(statusArango => {
        const connection_2 = dbMaria.execute('SELECT * FROM sandbox_test').then(statusMaria => {
            return res.render('home/home', {
                pageTitle: 'Home',
                statusArango: statusArango[0]["status"],
                statusMaria: statusMaria[0][0].status
            })
        }).catch(error => {
            console.log(new Error(error));
        })
    }).catch(error => {
        console.log(new Error(error));
    })
}

