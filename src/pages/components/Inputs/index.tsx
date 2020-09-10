import React, { InputHTMLAttributes } from 'react';
import {
    InputContent,
    InputComponent
} from './styles';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

const Input: React.FC<InputProps> = ({ children, name, ...rest }) => {
    return (
        <InputContent>
            <InputComponent
                name={name}
                {...rest}
            />
            {children}
        </InputContent>
    );
}

export default Input;