import React from "react";

class NewUser extends React.Component {
    state = {
        name: 'abv',
        age: '2',
    }

    submit = (event) => {
        this.props.hand({
            name: this.state.name,
            age: this.state.age,
            id: Math.floor(Math.random() * 100)

        });
        event.preventDefault();
    }

    setVaNa = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    setVaAg = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.submit(event)}>
                    <label>User</label>
                    <input value={this.state.name} onChange={(event) => this.setVaNa(event)} />
                    <label>Age</label>
                    <input value={this.state.age} onChange={(event) => this.setVaAg(event)} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default NewUser;