import express from "express";
import { mongodbURL } from "./config.js";
import mongoose from "mongoose";
import user_router from "./routes/userRoutes.js";
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());
app.use("/files", express.static("files"));


const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello MERN!');
});

app.use('/users', user_router);


mongoose.connect(mongodbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB')
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch(err => console.error('Error connecting to MongoDB', err));

// Adding temporary data to database
// run()
// async function run(){
//   const user = await User.create({
//     username: "Mohit Khatri",
//     school_name: "School Name",
//     topics: [{
//       name: "wildlife",
//       description: "f wefewfdlw eitlhdfsk sleiwdf dkwf fet  fdwl ti hd kwfoht odf wkdmwf sldkfethid dk fweti"
//     }]
//   });
//   console.log(user);
// }