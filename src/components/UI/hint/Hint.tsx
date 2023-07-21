import React from 'react';

function Hint({
    isSelectOpen,
    setIsSelectOpen,
}: {
    isSelectOpen: boolean;
    setIsSelectOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <div
            className="h-52 w-52 bg-white border-2 border-solid border-gray-200"
            onClick={() => setIsSelectOpen(true)}
        ></div>
    );
}

export default Hint;
