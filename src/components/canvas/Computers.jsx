import {Suspense, useEffect, useState} from 'react';
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./guitar_house/scene.gltf')
  
  
  return (
    <mesh>
      <hemisphereLight intensity={1}
      groundColor="violet" />
      <pointLight intensity={1} />
      <spotLight
        position={[359,246,135]}
        angle={120}
        penumbra={1}
        castShadow
        intensity={1}
        shadow-mapSize={1024} />

      <primitive
      object={computer.scene} 
      scale={isMobile? 0.00666 : 0.0111}
      position={isMobile?[-1.11, -3.66, 0]:[-1.11, -4.44, 0]}
      rotation = {isMobile?[0.01, 5, -7]:[-0.01, -0.2, -7]}/>
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])


  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [22, 10, 7], fov: 22}}
      gl={{preserveDrawingBuffer: true}}
      >
        <Suspense fallback = {<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI /2}
          minPolarAngle={Math.PI/2} />
          <Computers isMobile={isMobile}/>
        </Suspense>
        <Preload all />
      </Canvas>
  )
}

export default ComputersCanvas;