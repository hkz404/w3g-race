import './App.css'
// import * as THREE from 'three';
import { Perf } from 'r3f-perf';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, GizmoHelper, GizmoViewport, OrbitControls, Environment } from '@react-three/drei';

function App() {
  return (
    <main>
      <Suspense fallback={null}>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [-5, 2, 10], fov: 30 }}>
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>

          <ambientLight intensity={0.5} />
          <Environment files="/adams_place_bridge_1k.hdr" />

          <OrbitControls makeDefault />
          <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
            <GizmoViewport axisColors={['#9d4b4b', '#2f7f4f', '#3b5b9d']} labelColor="white" />
          </GizmoHelper>

          <Perf position="top-left" />
        </Canvas>
      </Suspense>
      <Loader />
    </main>
  )
}

export default App
