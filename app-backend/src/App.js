import React, {Component} from 'react';
import Webcam from 'react-webcam';
import Contacts from './components/contacts';

/*const WebcamComponent = () => <Webcam />;

class WebcamCapture extends React.Component {
    render() {
      const videoConstraints = {
        facingMode: { exact: "environment" }
      };
  
      return <Webcam videoConstraints={videoConstraints} />;
    }
}*/

class App extends Component {
    render() {
        return (
            <Contacts contacts={this.state.contacts} />
        )
    }

    state = {
        contacts: []
    };

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