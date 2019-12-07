const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

let db_uri = process.env.MONGODB_URI;

if (process.env.NODE_ENV === "test"){
    db_uri = process.env.MONGODB_TEST_URI;
}

console.log("current database being used: " + db_uri);

mongoose.connect(db_uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

