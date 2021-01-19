import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const emptyFields = {
    text: '',
    emoji: ''
}
const NewCardForm = (props) => {
    const [formFields, setFormFields] = useState(emptyFields);

    const onInputChange = (event) => {
        const newFormFields = {
            ...formFields,
        }
        newFormFields[event.target.name] = event.target.value;
        setFormFields(newFormFields);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.addCardCallback(formFields);

        setFormFields(emptyFields);
    };

    return (
        <div className="new-card-form">
            <h1 class="new-card-form__header">New Card</h1>
            <form className="new-card-form__form" onSubmit={onFormSubmit}>
                <div>
                    <label className="new-card-form__form-label">Card Text</label>
                    <input 
                        className="new-card-form__form-textarea"
                        onChange={onInputChange}
                        value={formFields.text}
                        name="text"
                    />
                </div>
            </form>

        </div>



    )


}