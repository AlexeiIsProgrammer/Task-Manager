import React from 'react';
import Note from './Note';
import { INote } from '../models';
import { useAppSelector } from '../store/hook';

function NotesList() {
    const notes = useAppSelector((state) => state.notes.list);

    return (
        <ul className="flex flex-row flex-wrap space-x-0.5">
            {notes.map((el, ind) => (
                <Note name={el.name} text={el.text} id={ind} key={ind} />
            ))}
        </ul>
    );
}

export default NotesList;
