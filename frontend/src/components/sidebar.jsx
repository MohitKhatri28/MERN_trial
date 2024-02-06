import React from "react";
import { Link } from "react-router-dom";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Avatar,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  BookOpenIcon,
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  VideoCameraIcon,
  UsersIcon,
  HandRaisedIcon,
  BuildingLibraryIcon
} from "@heroicons/react/24/outline";
 
export function SidebarWithBurgerMenu({username, school_name}) {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
 
  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        
        <Card
          color="transparent"
          shadow={false}
          className="h-full w-full p-4 z-50"
        >
          <div className="mb-2 flex items-center gap-4 p-4">
        <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
        <Typography variant="h5" color="blue-gray">
          {school_name}
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <HomeIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        
        <ListItem>
          <ListItemPrefix>
            <BookOpenIcon className="h-5 w-5" />
          </ListItemPrefix>
          Teach
        </ListItem>
        
        <ListItem>
          <ListItemPrefix>
            <ClipboardDocumentListIcon className="h-5 w-5" />
          </ListItemPrefix>
          Test
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <VideoCameraIcon className="h-5 w-5" />
          </ListItemPrefix>
          Take Class
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UsersIcon className="h-5 w-5" />
          </ListItemPrefix>
          Video Library
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <HandRaisedIcon className="h-5 w-5" />
          </ListItemPrefix>
          Doubts
        </ListItem>
        <ListItem className="align-bottom">
          <ListItemPrefix>
          <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
          </ListItemPrefix>
          {username}
        </ListItem>
      </List>
        </Card>
      </Drawer>
    </>
  );
}