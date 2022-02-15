# RA TinyMCE Input

Rich Text Input component for [React Admin]
based on the [TinyMCE] editor, useful for editing HTML content in admin GUI

# Installation

You can get the latest version of RA TinyMCE Input from [npm][npm package]

```shell
npm install -S @agilie/ra-tinymce-input
```

# Usage

```javascript
import * as React from "react";
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';
import { RichTextInput } from '@agilie/ra-tinymce-input';

export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title"/>
            <RichTextInput source="body"
                           initialValue="<p>This is the initial content of the editor.</p>"
                           init={{
                               height: 500,
                               menubar: false,
                               plugins: [
                                   'advlist autolink lists link image charmap print preview anchor',
                                   'searchreplace visualblocks code fullscreen',
                                   'insertdatetime media table paste code help wordcount'
                               ],
                               toolbar: 'undo redo | formatselect | ' +
                                   'bold italic backcolor | alignleft aligncenter ' +
                                   'alignright alignjustify | bullist numlist outdent indent | ' +
                                   'removeformat | help',
                               content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                           }} />
            <DateInput label="Publication date" source="published_at" defaultValue={new Date()}/>
        </SimpleForm>
    </Create>
);
```

You can customize the rich text editor by adding additional attributes, as described on the
TinyMCE [official documentation][TinyMCE docs].

# Roadmap

1. ~~Basic implementation of React Admin rich text editor on the basis of TinyMCE editor~~
2. ~~Map all the original properties of TinyMCE editor to the react admin component~~
3. Map all the react admin input properties to an editor and implement the correspondent behavior
4. Codestyle, tests, correct proptypes

# Troubleshooting

Problems? Check the [Issues](issues) block to find the solution or create a new issue, and we will do our best to fix it
asap. Feel free to contribute. This project is intended to be a safe, welcoming space for collaboration.

# License

The library is available as open source under the MIT License (MIT) Copyright © 2021 [Agilie Team]

# Author

This library is open-sourced by [Agilie Team] (web@agilie.com)

# Contributors

- [Sergey Mell]
- [Maksym Ferber]

[npm package]: https://www.npmjs.com/package/@agilie/ra-tinymce-input

[TinyMCE docs]: https://www.tiny.cloud/docs/

[React Admin]: https://marmelab.com/react-admin

[TinyMCE]: https://www.tiny.cloud

[Agilie Team]: https://agilie.com/en/index

[Sergey Mell]: https://github.com/SergeyMell

[Maksym Ferber]: https://github.com/EvenOff-first
