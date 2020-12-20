import React, {Component} from 'react';
import '../css/App.css';

class App extends Component {

    state = {
        users: [],
        isLoading: true
    };

    componentDidMount() {
        // it was put because of loading message
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(data => data.json())
                .then(users => {
                    console.log(users);
                    this.setState({
                        users,
                        isLoading: false
                    });
                })
        }, 3000);
    }

    render() {
        const {isLoading} = this.state;

        return (
            <div className="App">
                <h1>Users</h1>
                {
                    isLoading ? 'Loading...' : ''
                }
                {
                    this.state.users.map(user =>
                        <div key={user.id}>
                            {user.name} - @{user.username}
                        </div>
                    )
                }
            </div>
        );
    }
}

export default App;
