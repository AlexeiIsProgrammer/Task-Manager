import React, { useEffect, useState } from 'react';
import Header from '../components/view/header/Header';
import Main from '../components/view/main/Main';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { INote } from '../models';
import { addNote } from '../store/reducers';

function App() {
    const [tags, setTags] = useState([]);

    const notesList = useAppSelector((state) => state.notes.list);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const lc = localStorage.getItem('notes');
        if (lc) {
            const parsedNotes: INote[] = JSON.parse(lc);
            dispatch(addNote([...parsedNotes]));
        }
    }, []);

    window.addEventListener('beforeunload', () => {
        localStorage.setItem('notes', JSON.stringify(notesList));
    });

    return (
        <div className="app">
            <Header />
            <Main />
        </div>
    );
}

export default App;
