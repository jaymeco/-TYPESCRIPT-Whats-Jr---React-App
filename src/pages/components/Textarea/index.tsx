import React, { TextareaHTMLAttributes } from 'react';
import { TextareaComponent, TextareaContent } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string;
}

const Textarea: React.FC<TextareaProps>= ({ name, ...rest }) =>{
    return(
        <TextareaContent>
            <TextareaComponent
                name={name}
                {...rest}
            />
        </TextareaContent>
    );
}

export default Textarea;