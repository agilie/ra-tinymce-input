import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostCreate } from './post-create';
import { PostEdit } from './post-edit';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => <Admin dataProvider={dataProvider}>
    <Resource name="users"></Resource>
    <Resource name="posts"
              list={ListGuesser}
              create={PostCreate}
              edit={PostEdit}/>
</Admin>;

export default App;
