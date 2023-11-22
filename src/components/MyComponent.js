import React from "react";
import Display from "./Display";
import NewUser from "./NewUser";
class Mycomponent extends React.Component {
    state = {
        listUser: [
            {
                id: 1,
                name: 'john',
                age: '42'
            },
            {
                id: 2,
                name: 'ecn',
                age: '51'
            },
            {
                id: 3,
                name: 'ajc',
                age: '12'
            }
        ]

    }


    hand = (user) => {
        const sss = [user, ...this.state.listUser]
        this.setState({
            listUser: sss
        })
    }

    render() {
        return (
            <div>
                <NewUser hand={this.hand} />
                <Display listUsers={this.state.listUser} />
            </div>

        )
    }
}
export default Mycomponent;