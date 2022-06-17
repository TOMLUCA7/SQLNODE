import express from 'express';
import bodyParser from 'body-parser';
import sequelize from 'sequelize';

// קישור של התקיה שמקשרת את db
import database from './db.js';

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// root accounts
import accounts from './accounts.js';
app.use('/accounts', accounts);



// port
const port = 3000;
database.sync().then(results => {
    console.log(results)
    app.listen(port,function(){
    console.log(`server is working ${port}`);
    });
}).catch(error => {
    console.log(error);
});
