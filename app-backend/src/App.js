import React, {Component} from 'react';
import Contacts from './components/contacts';

class App extends Component {
    render() {
        return (
            <Contacts contacts={this.state.contacts} />
        )
    }

    state = {
        contacts: []
    };

    /*componentDidMount() {
        // POST request using fetch with set headers
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer my-token',
                'My-Custom-Header': 'foobar'
            },
            body: JSON.stringify({ title: 'React POST Request to FDC API' })
        };
        fetch('https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=xPgFESAz09jEJa1gt2gJdomzjJU7en8CGCQQNA5a', requestOptions)
            .then(response => response.json())
            .then((data) => {
                this.setState({ contacts: data });
            })
            .catch(console.log)
    }*/

    componentDidMount() {
        fetch('https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=1&api_key=xPgFESAz09jEJa1gt2gJdomzjJU7en8CGCQQNA5a')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data.foods })
            })
            .catch(console.log)
    }
}

export default App;