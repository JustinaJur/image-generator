import React from 'react';
import faker from 'faker';
import Button from './Button';

class Main extends React.Component {
    state = {
        image: "",
        firstName: "",
        lastName: ""
    }


    componentDidMount = () => {
        this.setState({
            image: faker.image.image(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName()
        })
    }

    goNext = () => {
        this.setState({
            image: faker.image.image(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName()
        })
    }

    render() {
        return (
            <div className="container">
                <h1>GENERATE FAKE DATA</h1>
                <h4> {this.state.firstName} - {this.state.lastName}</h4>
                <img style={{ height: 300 }} alt="image" src={this.state.image} />

                <Button goNext={this.goNext} />
            </div>
        )
    }
}

export default Main
