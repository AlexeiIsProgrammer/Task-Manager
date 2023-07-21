import React from 'react';

const Button = ({ children, click, disabled }: { children: string; click: () => void; disabled?: boolean }) => {
    return (
        <button
            disabled={disabled}
            onClick={click}
            className={`border-2 border-solid rounded-sm border-black p-1 w-full hover:bg-violet-600 active:bg-violet-700 transition ${
                disabled ? 'opacity-40 cursor-not-allowed' : ''
            }`}
        >
            {children}
        </button>
    );
};

export default Button;
