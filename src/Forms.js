import React from 'react';

export default class Forms extends React.Component{
    state = {
      telephon:"",
      email:"",
      telephonError: "",
      emailError:""
    };

    validae = () => {
        let telephonError= "";
        let emailError="";


        if (this.state.telephon >=0 || this.state.telephon <= 9)
        {
            telephonError = 'неверный телефон'
        }

        if(!this.state.email.includes('@')){
            emailError = 'неверный адрес электронной почты';
        }

        if (emailError || telephonError){
            this.setState({
                emailError,
                telephonError
            });
            return false;
        }

        return true;
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e) => {
      e.preventDefault();
        this.setState({
            telephon:"",
            email:"",
            telephonError: "",
            emailError:""
        });
        console.log(this.state)

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