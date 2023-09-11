import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'


const Computers = ({ isMobile }) => {

  const computer = useGLTF('./desktop_pc/scene.gltf')

  const computerPosition = isMobile ? [0, -2.75, -2.2] : [0, -3.5, -1.5];

  return (
    <mesh>
      
      {/* Hemisphere Light */}
      <hemisphereLight
        intensity={5}
        groundColor="black"
        position={[computerPosition[2], computerPosition[2] + 10, computerPosition[2]]}
      />

      {/* Spot Light */}
      <spotLight
        position={[computerPosition[0], computerPosition[1] + 10, computerPosition[2]]}
        angle={0.05}
        penumbra={5}
        intensity={20}
        castShadow={true}
        shadow-mapSize={1024}
      />

      {/* Computer Model */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={computerPosition}
        rotation={[-0.01, -0.2, -0.1]}
        receiveShadow
      />
    </mesh>
  )
}

export const ComputersCanvas = () => {

  const [isMobile, isSetMobile]= useState(false);

  useEffect(() => {
    // Add a listner for changes of screen size
    const mediaQuery= window.matchMedia('(max-width: 500px)');

    // Set initials for isMobile variable
    isSetMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
    isSetMobile(event.matches)
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change',
    handleMediaQueryChange)

    // Remove the listner when component is unmounted
    return () => {
    mediaQuery.removeEventListener('change',
    handleMediaQueryChange)
    }

  }, [])

  return (
    <Canvas frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 27 }}
      gl={{ preserveDrawingBuffer: true }}
    >

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />

    </Canvas>
  )
}

export default Computers

