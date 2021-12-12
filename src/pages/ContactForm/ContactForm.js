
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css'
import { Button } from 'react-bootstrap';
function ContactForm() {
    const [state, handleSubmit] = useForm("xayvwbao");
    if (state.succeeded) {
        return <p>Thanks for Sending Message</p>;
    }
    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column">
            <level for="firstName">First Name</level>
            <input type="text" id="firstName" name="firstName" />
            <level for="lastName">Last Name</level>
            <input type="text" id="lastName" name="lastName" />
            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message">
                Message
            </label>
            <textarea
                id="message"
                name="message"
            // cols="30"
            // rows="10"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <Button className="button" type="submit" disabled={state.submitting}>
                Send Message
            </Button>
        </form>
    );
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;
