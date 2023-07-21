import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INote } from '../models';

type NoteState = {
    list: INote[];
};

const initialState: NoteState = {
    list: [],
};

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote(state, action: PayloadAction<INote[]>) {
            state.list.push(...action.payload);
        },
        editNote(state, action: PayloadAction<INote>) {
            const editedNote = state.list.find((note) => note.id === action.payload.id);
            if (editedNote) {
                editedNote.text = action.payload.text;
            }
        },
        removeNote(state, action: PayloadAction<number>) {
            state.list = [...state.list.slice(0, action.payload), ...state.list.slice(action.payload + 1)];
        },
    },
});

export const { addNote, editNote, removeNote } = noteSlice.actions;

export default noteSlice.reducer;
