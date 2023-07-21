import React, { useState } from 'react';
import Button from './UI/button/Button';
import { INote } from '../models';
import { useAppDispatch } from '../store/hook';
import { editNote, removeNote } from '../store/reducers';

function Note({ name, text, id }: { name: string; text: string; id: number }) {
    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState(text);

    const dispatch = useAppDispatch();

    const editChanger = () => {
        console.log(id);

        if (isEdit) {
            setIsEdit(false);
        } else {
            setIsEdit(true);
            dispatch(editNote({ name, text, id }));
        }
    };

    return (
        <li className="border-2 border-black border-solid rounded w-1/3">
            <div>
                <p className="text-3xl bg-purple-400">
                    {name} #{id + 1}
                </p>
                <textarea
                    className="w-full text-xl resize-none"
                    readOnly={isEdit ? false : true}
                    name=""
                    cols={30}
                    rows={10}
                    value={value}
                    onChange={(e) => setValue(e.currentTarget.value)}
                    onDoubleClick={() => {
                        if (!isEdit) {
                            setIsEdit(true);
                        }
                    }}
                />
                <div>
                    <Button click={() => dispatch(removeNote(id))}>Удалить</Button>
                    <Button click={() => editChanger()}>{isEdit ? 'Сохранить' : 'Изменить'}</Button>
                </div>
            </div>
        </li>
    );
}

export default Note;
