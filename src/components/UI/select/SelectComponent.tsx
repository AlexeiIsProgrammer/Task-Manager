import React from 'react';
import { Tag } from '../../../models';
import SelectOption from './SelectOption';

function SelectComponent({ tags }: { tags: Tag[] }) {
    return (
        <div className="flex flex-col">
            {tags.map((opt, ind) => (
                <SelectOption key={ind} value={opt} />
            ))}
        </div>
    );
}

export default SelectComponent;
