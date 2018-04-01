##
<p align="center">
  <img src="https://raw.githubusercontent.com/grischenko-v/ThreeReact/master/screen/screen.png?raw=true" alt="SCreen"/>
</p>


## React JS + ThreeJS:
- create react app
- threejs
- scss
##
## Lanching:
```
- npm install
- npm start
```
##
## Usege:
```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';

class Cube extends Component {
    componentWillMount() {
        this.geometry = new THREE.BoxGeometry(1, 1, 1);
        this.material = new THREE.MeshBasicMaterial({ color: 0xFF000 });
        this.cube = new THREE.Mesh(this.geometry, this.material);
        this.context.scene.add(this.cube);
    }
    componentDidUpdate() {
        const { rotation, position } = this.props;
        this.cube.rotation.x = rotation.x;
        this.cube.rotation.y = rotation.y;
        //this.cube.rotation.z = rotation.z;
        
        this.cube.position.x = position.x;
        this.cube.position.y = position.y;
        this.cube.position.z = position.z;
    }

    render() {
        return null;
    }
}

Cube.contextTypes = {
    scene: PropTypes.object // add to context 
}

export default Cube;
```


