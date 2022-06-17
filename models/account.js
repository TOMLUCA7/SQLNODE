// רושמים סכמות של db
// mysql סכמה ל
import sequelize from 'sequelize';

import database from '../db.js';
                                 // שם הטבלה
const account = database.define('accounts', {
    id: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true // כול רשומה תקדם ב1
    },
    firs_name: sequelize.STRING,
    last_name: sequelize.STRING,
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    password: {
        type: sequelize.STRING,
        allowNull: false
    },
    passcode : {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    isApproved: {
        type:sequelize.BOOLEAN,
        allowNull: false,
    }
    
}); 

export default account;