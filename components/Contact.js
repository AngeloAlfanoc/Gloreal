import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'intersection-observer';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this
            .submitForm
            .bind(this);
        this.state = {
            status: ""
        };
    }

    render() {

        const {status} = this.state;
        return (
            <section id="contact">
                <ScrollAnimation animateIn="fadeIn">
                    <div className="container py-5">
                        <p className="pretitle pt-5">Contacteer ons
                        </p>
                        <form
                            onSubmit={this.submitForm}
                            action="https://formspree.io/xbjygqvl"
                            method="POST">
                            <input className="form-control my-3" type="text" name="name" placeholder="Jouw Naam"/>
                            <input className="form-control my-3" type="email" name="email" placeholder="Jouw Email"/>
                            <input className="form-control my-3" type="text" name="subject" placeholder="Onderwerp"/>
                            <label>Bericht:</label>
                            <textarea className="form-control" type="text" name="message"/> {status === "SUCCESS"
                                ? <p>Bedankt voor je aanvraag! Wij zullen je zo snel mogelijk terug contacteren.</p>
                                : <button className="btn border text-right my-3 text-center">Verstuur</button>}
                            {status === "ERROR" && <p>Oeps! Er ging iets mis, probeer het opnieuw.</p>}
                        </form>
                    </div>
                </ScrollAnimation>
            </section>
        )
    }
    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) 
                return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({status: "SUCCESS"});
            } else {
                this.setState({status: "ERROR"});
            }
        };
        xhr.send(data);
    }
}

export default Contact