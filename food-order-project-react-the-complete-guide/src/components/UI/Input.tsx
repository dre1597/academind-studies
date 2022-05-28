import React from 'react';
import { InputContainer } from './UIStyles';

interface Props {
    id: string;
    label: string;
    input: {
        id: string;
        type: string;
        min: string;
        max: string;
        step: string;
        defaultValue: string;
    };
}

const Input = React.forwardRef<HTMLInputElement, Props>(
    ({ id, label, input }, ref) => {
        return (
            <InputContainer>
                <label htmlFor={id}>{label}</label>
                <input ref={ref} {...input} />
            </InputContainer>
        );
    }
);

export default Input;
