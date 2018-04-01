import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';

class Cube extends Component {
    componentWillMount() {
        this.geometry = new THREE.BoxGeometry(1, 1, 1);


        for ( let i = 0; i < this.geometry.faces.length; i +=2 ) {
            let color =  Math.random() * 0xffffff;
            this.geometry.faces[ i ].color.setHex(color);
            this.geometry.faces[ i + 1 ].color.setHex(color);
        }


        this.material = new THREE.MeshBasicMaterial({ color: 0xFFFFF, vertexColors: THREE.FaceColors});
        this.cube = new THREE.Mesh(this.geometry, this.material);

        this.context.scene.add(this.cube);

        let geo = new THREE.EdgesGeometry( this.cube.geometry ); // or WireframeGeometry
        let mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 4 } );
        let wireframe = new THREE.LineSegments( geo, mat );
        this.cube.add( wireframe );
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
    scene: PropTypes.object
}


export default Cube;