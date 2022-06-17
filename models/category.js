// רושמים סכמות של db
// mysql סכמה ל
import sequelize from 'sequelize';

import database from '../database.js';
                                 // שם הטבלה
const category = database.define('category', {
    id: {
        type: sequelize.INTEGER,
        allowNull: false,
        primary_key: true,
        auto_increment: true // כול רשומה תקדם ב1
    },

    category_name:{
        type: sequelize.STRING,
        allowNull: false
    },

    categoryDescription:sequelize.STRING
}); 

export default category;