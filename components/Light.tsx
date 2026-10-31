import { useHelper } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js'
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js'
import * as THREE from 'three'
// 2. Initialize the rect light shaders once globally
RectAreaLightUniformsLib.init()

const Light = () => {
    const lightRef=useRef<THREE.RectAreaLight>(null!)
    



  return (
    <>
    <rectAreaLight position={[0,0,0.8]} ref={lightRef} intensity={1} width={20} height={15} />
    </>
  )
}

export default Light
