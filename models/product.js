// רושמים סכמות של db
// mysql סכמה ל
import sequelize from 'sequelize';

import database from '../database.js';
                                 // שם הטבלה
const product = database.define('product', {
    id: {
        type: sequelize.INTEGER,
        allowNull: false,
        primary_key: true,
        auto_increment: true // כול רשומה תקדם ב1
    },
    cid : sequelize.INTEGER,

    product_name:{
        type: sequelize.STRING,
        allowNull: false
    },

    product_img:sequelize.STRING,

    product_price:{
        type:sequelize.FLOAT,
        allowNull: false,
    },

    unitInStok:{
        type:sequelize.INTEGER,
        allowNull: false
    },
    
    productDescription:sequelize.STRING
}); 

export default product;