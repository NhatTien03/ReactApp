import React from "react";
class Mycomponent extends React.Component {
    state = {
        listUser: [
            { id: 1, Name: "Dung", Age: 49 },
            { id: 2, Name: "Hoang", Age: 34 },
            { id: 3, Name: "Chien", Age: 32 },
        ]
    }

    render() {
        return (
            <div>
                helo
                <DisplayInfor
                    listUser={this.state.listUser}></DisplayInfor>
            </div>

        );
    }
}
export default Mycomponent; 