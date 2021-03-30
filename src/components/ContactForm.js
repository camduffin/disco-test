import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
    const [state, handleSubmit] = useForm("mdoynrlr");
    if (state.succeeded) {
        return <p>We'll be in touch shortly!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email"></label>
            <input id="email" type="email" name="email" placeholder="email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <textarea id="message" name="message" placeholder="message"/>
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <label htmlFor="name"></label>
            <input type="text" id="name" name="name" placeholder="name"/>

            <button type="submit" disabled={state.submitting}>
            Send!
        </button>
        </form>
    );
}

export default ContactForm;
