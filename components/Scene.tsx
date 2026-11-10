'use client';
import { Canvas } from "@react-three/fiber"
import { View, OrbitControls, Environment } from "@react-three/drei"
import { Suspense } from "react"
import Light from "./Light"
import Model from "./Model";

export default function Scene() {
  return (
    <Canvas  
      shadows
      dpr={[1, 1.5]}
      camera={{ fov: 75, position: [0, 0, 10] }}
      gl={{ antialias: true }}
      flat
    
    >
      <Suspense fallback={null}>
        <Model position={[-4,4,0]} scale={2} />
      </Suspense>
  
    <Light/>
    </Canvas>
  )
}