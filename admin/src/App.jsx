// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { TeacherList, TeacherCreate, TeacherEdit } from './teachers';

import TeacherIcon from '@mui/icons-material/Person';

import Dashboard from "./Dashboard";
import simpleRestProvider from 'ra-data-simple-rest';
import { getToggleButtonGroupUtilityClass } from "@mui/material";


const dataProvider = simpleRestProvider('/data');

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="teachers" list={TeacherList} edit={TeacherEdit} create={TeacherCreate} icon={TeacherIcon} />
  </Admin>
);

export default App;