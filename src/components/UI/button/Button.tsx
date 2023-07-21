import React from 'react';

const Button = ({ children, ...props }: { children: string }) => {
    return <button className='border' {...props}>{children}</button>;
};

export default Button;
