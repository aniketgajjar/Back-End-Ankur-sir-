// Server ko start karne ke liye humne server.js file banayi hai. Ye file app.js ko import karegi aur server ko start karegi.
const app = require('./src/app');
const connectDB = require('./src/DataBase/db');

// MongoDB se connect karne ke liye connectDB function ko call karte hain.
connectDB();


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});