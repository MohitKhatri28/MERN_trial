import express from "express";
import { User } from "../models/userModel.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './files')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    cb(null, uniqueSuffix + file.originalname)
  }
})

const upload = multer({ storage: storage })

const user_router = express.Router();

user_router.get('/', async(req, res) => {
    try {
      const users = await User.find({});
      return res.status(200).json(users);
  
    } catch (error) {
      console.log(error.message);
      res.status(500).send({message: error.message});
    }
  
});
  
user_router.get('/:id', async(req, res) => {
    try {
  
      const {id} = req.params;
      const user = await User.findById(id);
      if(!user){
        return res.status(404).json({error: "User not found"});
      }else{
        return res.status(200).json(user);
      }
      
  
    } catch (error) {
      console.log(error.message);
      res.status(500).send({message: error.message});
    }
});

user_router.post('/:id/topics', upload.single("file"), async(req, res) => {
  try {
    const {id} = req.params;
    const title = req.body.title;
    const description = req.body.description;
    const filename = req.file.filename;
    // Create a new topic and save it to the database
    const topic = {"name": title, "description": description, "filename": filename, "filepath": filename + '_path'};
    const result = await User.findByIdAndUpdate({
      _id : id},
      {$addToSet: {'topics': topic}});
      if(!result){
        return res.status(404).json({error: "Something went wrong"});
      }else{
        const user = await User.findById(id);
        return res.status(200).json(user);
      }
    }
  catch (error) {
    console.log(error.message);
    res.status(500).send({message: error.message});
  }

});

user_router.patch('/:id/video_links', async(req, res) => {
  try {
    const {id} = req.params;
    const result = await User.findByIdAndUpdate({
      _id : id},
      {$addToSet: {'video_links': req.body.video_link}});
      if(!result){
        return res.status(404).json({error: "Something went wrong"});
      }else{
        const user = await User.findById(id);
        return res.status(200).json(user);
      }
    }
  catch (error) {
    console.log(error.message);
    res.status(500).send({message: error.message});
  }

});


export default user_router;