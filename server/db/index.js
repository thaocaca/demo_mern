const mongoose = require('mongoose');

module.exports = async () => {
    try {
        const connnectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        await mongoose.connect("mongodb+srv://admin:8mPO4mkbACowFvDx@cluster0.jtw5d.mongodb.net/?retryWrites=true&w=majority", connnectionParams)
        console.log("Connected to database");
    } catch (error) {
        console.log("Could not connect to database", error);
    }
}