import { Datagrid, EmailField, List, TextField } from 'react-admin';

export const ClassList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="shortName" />
      <TextField source="school" />
      <TextField source="blog" />
      <EmailField source="hide" />
      <TextField source="defaultStartTime" />
      <TextField source="defaultEndTime" />
      <TextField source="defaultlnvoiceTime" />
      <TextField source="defaultHoursPerDay" />
    </Datagrid>
  </List>
)