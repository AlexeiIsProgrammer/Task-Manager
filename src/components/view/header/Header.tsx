import React, { useState } from 'react';
import Input from '../../UI/input/Input';
import Button from '../../UI/button/Button';
import { INote } from '../../../models';
import SelectComponent from '../../UI/select/SelectComponent';
import { useAppDispatch, useAppSelector } from '../../../store/hook';
import { addNote } from '../../../store/reducers';
import Hint from '../../UI/hint/Hint';

function Header() {
    const [input, setInput] = useState('');
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const dispatch = useAppDispatch();
    const notes = useAppSelector((state) => state.notes.list);

    const setInputHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key) {
            console.log('key was pressed');
        }
        console.log(e.key);
        setInput(e.currentTarget.value);
    };

    const setFocusHandler = () => {
        setIsSelectOpen(true);
    };

    const setBlurHandler = () => {
        setIsSelectOpen(false);
    };

    return (
        <div>
            <Input
                value={input}
                placeholder="Введите текст для создания новой заметки"
                onInput={setInputHandler}
                onFocus={setFocusHandler}
                onBlur={setBlurHandler}
            />

            {isSelectOpen ? <Hint isSelectOpen={isSelectOpen} setIsSelectOpen={setIsSelectOpen} /> : ''}

            <Button
                disabled={input.length > 0 ? false : true}
                click={() => {
                    dispatch(
                        addNote([
                            { name: 'Заметка', text: input, id: notes.length ? notes[notes.length - 1].id + 1 : 1 },
                        ])
                    );
                    setInput('');
                }}
            >
                Add note
            </Button>

            <SelectComponent tags={['#tag1', '#tag2']} />

            <select>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
                <option value="6">Six</option>
                <option value="7">Seven</option>
                <option value="8">Eight</option>
                <option value="9">Nine</option>
                <option value="10">Ten</option>
            </select>
        </div>
    );
}

export default Header;
