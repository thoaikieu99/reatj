import React from "react";
import './Display.scss'
import lofo from '../logo.svg'
class Display extends React.Component {

    state = {
        bolem: true
    }
    click =
        () => {
            this.setState({
                bolem: !this.state.bolem
            })
        }
    render() {
        const { listUsers } = this.props;

        return (
            <div className="paren">
                <img src={lofo}></img>
                <div onClick={() => this.click()}>
                    {this.state.bolem ? "Hide" : "Show"} value
                </div>
                {this.state.bolem &&
                    <div>
                        {
                            listUsers.map((v, k) => {
                                return (
                                    <div key={v.id} className={v.age > 18 ? "green" : "red"} >
                                        <div>My name is {v.name}</div>
                                        <div>Age is {v.age}</div>
                                        <hr />
                                    </div>
                                )
                            })
                        }

                    </div>
                }
            </div>
        )
    }
}
export default Display;