'use client';
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Group } from 'three';
import * as THREE from 'three'
import { useFrame, Vector3 } from '@react-three/fiber';
export type ModelProps={
   position?: [number, number, number] | Vector3
   scale?:number
}
export default function Model({position=[0,0,0],scale=1,...props}:ModelProps) {
  const group = useRef<Group>(null)
  const { nodes, materials, animations } = useGLTF('/GEAR.glb')
  const { actions } = useAnimations(animations, group)
   useEffect(() => {
    if (actions) {
      Object.keys(actions).forEach((key) => {
        actions[key]?.stop()
      })
    }
  }, [actions])
  const gear1=useRef<THREE.Mesh>(null)
  const gear2=useRef<THREE.Mesh>(null)
  const gear3=useRef<THREE.Mesh>(null)
  const gear4=useRef<THREE.Mesh>(null)
  const gear5=useRef<THREE.Mesh>(null)
  const timeRef=useRef(0)
  useFrame((state,delta)=>{
            const correctDelta=Math.min(delta,0.1)
            timeRef.current+=correctDelta
        if(gear1.current && gear2.current && gear3.current && gear4.current && gear5.current){
            
            const gear1speed=0.5*timeRef.current
            const gear2speed=gear1speed*1.7
            const gear3speed=gear1speed
            const gear4speed=gear2speed
            const gear5speed=gear2speed
            gear1.current.rotation.y=gear1speed
            gear2.current.rotation.y=-0.297-gear2speed
            gear3.current.rotation.y=-0.205+gear3speed
            gear4.current.rotation.y=-0.297-gear4speed
            gear5.current.rotation.y=-0.68+gear5speed
        }
      }
  )
  
  return (
    <group ref={group} {...props} scale={scale} position={position} dispose={null}>
      <group name="Scene">
        <mesh
          ref={gear1}
          name="Gear"
          castShadow
          receiveShadow
          geometry={(nodes.Gear as THREE.Mesh).geometry  }
          material={materials['Material.001']}
          rotation={[Math.PI / 2, 0, 0]}
        />
      
        <mesh
          ref={gear3}
          name="Gear001"
          castShadow 
          receiveShadow
          geometry={(nodes.Gear001 as THREE.Mesh).geometry}
          material={materials['Material.001']}
          position={[4.764, 0, 0]}
          rotation={[Math.PI / 2, -0.205, 0]}
        />
        <mesh
        ref={gear2}
          name="Gear005"
          castShadow
          receiveShadow
          geometry={(nodes.Gear005 as THREE.Mesh).geometry}
          
          position={[2.409, 0, 0]}
          rotation={[Math.PI / 2, -0.297, 0]}
        >
          <meshStandardMaterial metalness={1} roughness={0.1} color="#FFCF64" />
          </mesh>
        <mesh
         ref={gear4}
          name="Gear002"
          castShadow
          receiveShadow
          geometry={(nodes.Gear002 as THREE.Mesh).geometry}
         
          position={[0.416, -2.166, 0]}
          rotation={[Math.PI / 2, -0.297, 0]}
          scale={0.818}
        >
              <meshStandardMaterial metalness={1} roughness={0.1} color="#FFCF64" />
          </mesh>
        <mesh
          ref={gear5}
          name="Gear003"
          castShadow
          receiveShadow
          geometry={(nodes.Gear003 as THREE.Mesh).geometry}
          material={materials['Material.001']}
          position={[2.396, -1.854, 0]}
          rotation={[Math.PI / 2, -0.68, 0]}
          scale={0.818}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/GEAR.glb')
