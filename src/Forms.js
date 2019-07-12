import React from 'react';
import sendmail from 'sendmail';

export default class Forms extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            value: ''
        });

        sendmail({
            from: 'no-reply@yourdomain.com',
            to: 'jenyit@ya.ru',
            subject: this.state.value,
            html: 'Mail of test sendmail ',
        }, function(err, reply) {});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Имя:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}