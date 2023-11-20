import React from "react";
class Mycomponent extends React.Component {
    state = {
        name: 'kkkk'
    }
    render() {
        return (
            <div>
                sssss {this.state.name}
            </div>
        )
    }
}
export default Mycomponent;