import * as React from "react";
import { Edit, SimpleForm,TextInput} from 'react-admin';
import { RichTextInput } from './index.tsx';

export const Service = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="title" />
                <RichTextInput
                    plugins={[
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ]}
                    source="content"
                    menubar={true}
                    toolbar={true}
                />
            </SimpleForm>
        </Edit>
    )
};
