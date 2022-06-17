//const express = require('express'); - שיטה ישנה של כתובת קוד
import express from 'express';
import bcryptjs from 'bcryptjs'; // הצפנה סיסמה
import jwt from 'jsonwebtoken';
import Account from './models/account.js';

const router = express.Router();


// router.post('/login', async(request,response) => {
//     const { email,password } = request.body;
//     const acc = await Account.findAll({where: {email: email}});
//     if(acc.length > 0){
//         const user = acc[0];
//         if(user.isApproved){
//             const ispasswordmath = await bcryptjs.compare(password,user.password)
//             if(ispasswordmath){
//                 // אזה מידע לאכסן
//                 const data = {
//                     firs_name: user.firs_name,
//                     last_name: user.last_name,
//                     email: user.email,
//                     id: user.id
//                 }

//                 const token = await jwt.sign(data, 'vzAAtMoDXt');
//                 return response.status(200).json({
//                     mas: token
//                 });


//             } else {
//                 return response.status(200).json({
//                     mas: 'password is not math '
//                 });
//             }
//         }
//     } else {
//         return response.status(200).json({
//             mas: 'account not exist'
//         });
//     }
// })



// לבדוק האם מידע קיים ב db
router.post('/register', async(request,response) => {
    // לקבל את המידע של המשתמש
    const { firs_name,last_name, email,password } = request.body;

    // לבדוק האם אימייל קיים בdb                     מהמודל
    const acc = await Account.findAll({where: {email: email}});
    console.log(acc)
    if(acc.length > 0){
        return response.status(200).json({
            mas: 'account not valid'
        });
    } else {
        // הצפנה של הסיסמה 
        const hash_passwors = await bcryptjs.hash(password,10);
        
        // שלח קוד אימות
        const code = generateRandomInteger(1111,9999);
        
        // שמירת המשתמש בdb
        Account.create({
            firs_name: firs_name,
            last_name: last_name,
            email: email,
            password: hash_passwors,
            passcode: code,
            isApproved: false
        })
        .then(account_create => {
            return response.status(200).json({
                result: account_create
            })
        })
        .catch(error => {
            return response.status(200).json({
                result: error
            });
        })
    }
})


// נותן מספר רנדומלי
function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default router;
