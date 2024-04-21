import React, { useState } from "react";

const TextArea = ({ ActivateEdit, id, Edit }) => {
    const [text, setText] = useState('');

    const ChangeText = (event) => {
        setText(Edit(id,event.target.value));
    }

    const Save = () => {
        if (text !== '') {
            ActivateEdit();
        } else {
            alert('No se puede guardar un campo vacío.');
        }
    }

    return (
        <>
            <div className={`input-group mb-3 w-100`}>
                <input type="text" className="form-control" placeholder="Edit!" value={text} onChange={ChangeText} />
                <button className="btn btn-success" type="button" onClick={Save}>
                    <i className="fa-solid fa-check"></i>
                </button>
            </div>
        </>
    );
}

export default TextArea;

