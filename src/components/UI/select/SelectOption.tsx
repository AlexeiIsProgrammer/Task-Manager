import React from 'react';

function SelectOption({ value }: { value: string }) {
    return (
        <label>
            <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.checked)}
                type="checkbox"
                name="tags"
                value={value}
            />
            {value}
        </label>
    );
}

export default SelectOption;
