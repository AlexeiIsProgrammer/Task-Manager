import React from 'react';

function Input({
    value,
    placeholder,
    onInput,
    onFocus,
    onBlur,
}: {
    value: string;
    placeholder: string;
    onInput: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onFocus: () => void;
    onBlur: () => void;
}) {
    return (
        <div className="input">
            <input
                placeholder={placeholder}
                className="input__input rounded-sm border-2 border-amber-100 border-solid w-full"
                type="text"
                value={value}
                onInput={onInput}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </div>
    );
}

export default Input;
