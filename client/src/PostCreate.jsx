/* Packages */
import React, {useState} from 'react';
import axios from "axios";

const INITIAL_STATE = {
    title: '',
};

/* This 'PostCreate' have been created for ... */
const PostCreate = () => {

    /* Common State */
    const [state, setState] = useState(INITIAL_STATE);


    /* Event Handlers */
    const onTitleInputChangeHandler = (event) => {
        setState((prevState) => ({
            ...prevState,
            title: event.target.value,
        }));
    };

    const onSubmitFormHandler = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:4000/posts', {title: state.title});
        setState(INITIAL_STATE);
    };

    return (
        <>
            <div>
                <form onSubmit={onSubmitFormHandler}>
                    <div className={'form-group'}>
                        <label>Title</label>
                        <input type="text" className={'form-control'} value={state.title}
                               onChange={onTitleInputChangeHandler}/>
                    </div>
                    <button type="submit" className={'btn btn-primary'}>Submit</button>
                </form>
            </div>
        </>
    );
};

export default PostCreate;