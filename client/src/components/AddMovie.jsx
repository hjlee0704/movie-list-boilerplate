import React from 'react';


class AddMovie extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.handleChangeSubmitted}>
              <label> Item
              <input name="movieName" value=''/>
            </label>
          </form>
        );
    }
}

export default AddMovie;