import React, {useEffect, useState} from 'react'
import { SidebarWithBurgerMenu } from '../components/sidebar'
import { NavbarSimple } from '../components/navbar'
import { CarouselCustomArrows } from '../components/carousel'
import axios from 'axios'
import Spinner from '../components/spinner'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

export const Teach = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const submitPDF = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);
    const result = await axios.post(`http://localhost:5000/users/${id}/topics`, formData, {headers: {"Content-Type": "multiplart/form-data"}});
    console.log(result);
  }

  return (
    <div>
      <SidebarWithBurgerMenu username={user.username} school_name={user.school_name}/>
      <CarouselCustomArrows className=" -z-10"/>
      <Card className="w-96">
        <form onSubmit={submitPDF}>
          <CardBody className="flex flex-col gap-4">
          <Input label="Title" size="lg" onChange={(e) => setTitle(e.target.value)}/>
          <Input label="Description" size="lg" onChange={(e) => setDescription(e.target.value)}/>
          <Input type="file" accept="application/pdf" size="lg" onChange={(e) => setFile(e.target.files[0])}/>
        </CardBody>
        <CardFooter className="pt-0">
          <button type="submit" >
            Submit
          </button>
        </CardFooter>
        </form>
      </Card>
      {/* <Card className="w-96">
        <form >
          <CardBody className="flex flex-col gap-4">
          <Input label="link" size="lg" onChange={(e) => setTitle(e.target.value)}/>
        </CardBody>
        <CardFooter className="pt-0">
          <button type="submit" >
            Submit
          </button>
        </CardFooter>
        </form>
      </Card> */}
      
    </div>
  )
}
