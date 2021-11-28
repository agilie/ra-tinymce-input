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
        toolbar = false,
        toolbar_mode,
        menubar = false,
        fullWidth = true,
        label,
        source,
        plugins,
        content_style,
        textareaName,
        tagName = 'div',
        scriptLoading,
        inline = false,
        initialValue,
        disabled = false,
        cloudChannel = '5-stable',
        images_upload_url,
        apikey,
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
                init={{
                    menubar: menubar,
                    plugins: plugins,
                    toolbar: toolbar,
                    toolbar_mode,
                    images_upload_url,
                    content_style: content_style,
                }}
                onInit={(evt, editor) => {
                }}
                onEditorChange={(newValue, editor) => {
                    onChange(newValue)
                }}
                apiKey={apikey}
                cloudChannel={cloudChannel}
                disabled={disabled}
                initialValue={initialValue}
                inline={inline}
                scriptLoading={scriptLoading}
                tagName={tagName}
                textareaName={textareaName}
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

