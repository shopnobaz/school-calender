// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { TeacherList, TeacherCreate, TeacherEdit } from './teachers';



/* import jsonServerProvider from 'ra-data-json-server'; */
import simpleRestProvider from 'ra-data-simple-rest';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import { ApartmentRounded } from "@mui/icons-material";
import Dashboard from "./Dashboard";
import TeacherIcon from '@mui/icons-material/Person';


const dataProvider = simpleRestProvider('/data');

// <Resource name="users" list={ListGuesser} />

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="teachers" list={TeacherList} edit={TeacherEdit} create={TeacherCreate} icon={TeacherIcon} />
  </Admin>
);

export default App;