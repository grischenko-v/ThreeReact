import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import Cube from '../Cube/Cube';
import ThreeScene from '../ThreeScene/ThreeScene';
import PerspectiveCamera from '../Camera/PerspectiveCamera';

class App extends Component {
    state = {
        rotation1: { x: 0, y: 0, z: 0 },
    }

    componentDidMount() {
        this.gameLoop();
    }


    gameLoop = () => {
        requestAnimationFrame(this.gameLoop);

        const { rotation1 } = this.state;

        this.setState({
            rotation1: { x: rotation1.x + 0.01,
                         y: rotation1.y + 0.01, },

        });
    }


    render() {
        const { rotation1 } = this.state;

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <div className="App-intro">
                    <ThreeScene width={800} height={600}
                                style={{margin: '0 auto' }}>
                        <PerspectiveCamera fov={75}
                                           aspect={800/600}
                                           near={0.1}
                                           far={1000}
                                           position={{x: 0, y: 0, z: 5}}>

                            <Cube rotation={rotation1}
                                  position={{x: 0, y: 0, z: 0}}  />

                        </PerspectiveCamera>
                    </ThreeScene>
                </div>
            </div>
        );
    }
}

export default App;