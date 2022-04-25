import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


class Form extends React.Component {

  //Constructor
  constructor(props) {

    super(props);

    this.state = {
        items: [],
        isLoaded: false
    }
  }

  componentDidMount() {

    fetch('https://api.jsonbin.io/b/6261630480883c3054e4d48d')
        .then(res => res.json())
        .then(json => {
            this.setState({
                items: json,
                isLoaded: true, 
            })
        }).catch((err) => {
            console.log(err);
        });

  }

  render() {

    const { isLoaded, items } = this.state;

    if (!isLoaded)
        return <div>Loading...</div>;

    return (
        <div className="App">
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        Name: {item.name} 
                        Breed: {item.breed}
                        Chip Number: {item.chipNumber}
                        <Link to='/allDetails'>
                          <button>More Info</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );

}

} 

export default Form;

