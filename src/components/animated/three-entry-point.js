import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const VertexNormalsHelper = THREE.VertexNormalsHelper
const VertexTangentsHelper = THREE.VertexTangentsHelper


export default container => {
    let scene, renderer;
        let camera, light;
        let vnh;
        let vth;

        init();
        animate();

        function init() {

            renderer = new THREE.WebGLRenderer();
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( 200,200);
            container.appendChild( renderer.domElement );

            //

            camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
            camera.position.z = 400;

            scene = new THREE.Scene();

            light = new THREE.PointLight();
            light.position.set( 200, 100, 150 );
            scene.add( light );

          

         

            const polarGridHelper = new THREE.PolarGridHelper( 200, 16, 8, 64, 0x0000ff, 0x808080 );
            polarGridHelper.position.y = 50;
            polarGridHelper.position.x = 0;
            scene.add( polarGridHelper );

            

            //

            window.addEventListener( 'resize', onWindowResize );

        }

        function onWindowResize() {

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );

        }

        function animate() {

            requestAnimationFrame( animate );

            const time = - performance.now() * 0.0006;

            camera.position.x = 100 * Math.cos( time );
            camera.position.z = 100 * Math.sin( time );
            camera.lookAt( scene.position );

            light.position.x = Math.sin( time * 1.7 ) * 300;
            light.position.y = Math.cos( time * 1.5 ) * 400;
            light.position.z = Math.cos( time * 1.3 ) * 300;

            if ( vnh ) vnh.update();
            if ( vth ) vth.update();

            renderer.render( scene, camera );

        }
        
    }
