import React from 'react';
import axios from 'axios';


export default class Forms extends React.Component{
   state = {
      telephon:"",
      email:"",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            telephon:"",
            email:"",
        });

        const {email, telephon} = this.state;

        axios.post('/', {
            telephon
            ,email})
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <p>
                    <input
                        type="number"
                        name="telephon"
                        placeholder="Телефон"


                        value={this.state.telephon}
                        onChange={this.handleChange}
                    />
                </p>

                <div style={{color: "red", fontSize:15}}>
                    {this.state.telephonError}
                 </div>

                <p>
                    <input
                        type="email"

                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </p>

                <div style={{color: "red", fontSize:15}}>
                    {this.state.emailError}
                 </div>

                <p><button type="submit" p>Отправить</button></p>
            </form>
        )
    }
}