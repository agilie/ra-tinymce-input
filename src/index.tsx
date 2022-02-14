import React, { ComponentProps } from 'react';
import { useInput } from 'ra-core';
import { InputHelperText } from 'ra-ui-materialui';
import { PropTypes as MuiPropTypes, } from '@material-ui/core';
import * as PropTypes from 'prop-types';
import { Editor } from '@tinymce/tinymce-react';

export interface RichTextInputProps {
    label?: string | false;
    source: string;
    toolbar?: string;
    fullWidth?: boolean;
    helperText?: ComponentProps<typeof InputHelperText>['helperText'];
    record?: Record<any, any>;
    resource?: string;
    variant?: string;
    margin?: MuiPropTypes.Margin;
    [key: string]: any;
}

export const RichTextInput = (props: RichTextInputProps) => {
    const {
        source,
        ...rest
    } = props;
    const {
        id,
        isRequired,
        input: {value, onChange},
        meta: {touched, error},
    } = useInput({source, ...rest});
    return (
        <>
            <Editor
                value={value}
                onEditorChange={(newValue, editor) => {
                    onChange(newValue)
                }}
                {...props}
            />
        </>
    );
};

RichTextInput.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    options: PropTypes.object,
    source: PropTypes.string,
    fullWidth: PropTypes.bool,
};

