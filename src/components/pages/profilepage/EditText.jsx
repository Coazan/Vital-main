import React, { useState } from "react";

const TextArea = ({ ActivateEdit, id, handleEdit }) => {
    const [text, setText] = useState('');

    const HandleOnChange = (event) => {
        setText(event.target.value);
    }

    const HandleSave = () => {
        handleEdit(id, text);
        ActivateEdit();
    }

    return (
        <>
            <div className={`input-group mb-3 w-50`}>
                <input type="text" className="form-control" placeholder="Edit!" value={text} onChange={HandleOnChange} />
                <button className="btn btn-success" type="button" onClick={HandleSave}>
                    <i className="fa-solid fa-check"></i>
                </button>
            </div>
        </>
    );
}

export default TextArea;
