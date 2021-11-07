import * as React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';
import { RichTextInput } from '@agilie/ra-tinymce-input';

export const PostEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <RichTextInput source="body" toolbar={true} />
            <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
        </SimpleForm>
    </Edit>
);
