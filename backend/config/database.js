const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('DB Connected Successfully..');
}).catch((err) => {
    console.error('DB Not Connected!!');
    console.log(err);
})