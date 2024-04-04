/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Konstantin_Keller (https://sketchfab.com/Konstantin_Keller)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-earth-c99483d5e2a94ca8b4f3579145584beb
Title: Low Poly Earth
*/
"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Earth(props) {
    const { nodes, materials } = useGLTF('/models/low_poly_earth-transformed.glb')
    const modelRef = useRef()
    useFrame((state, delta, xrFrame) => {
        modelRef.current.position.y = -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
        modelRef.current.rotation.y += 0.007;
    })
    return (
        <group {...props} dispose={null}
            ref={modelRef}
            scale={[1.9, 1.9, 1.9]}
            rotation={[0.25, 0, 0]}
            position={[0, -5.5, 0]}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere001_0.geometry}
                material={materials.material}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.832}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere001_1.geometry}
                material={materials.green}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.832}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Icosphere001_2.geometry}
                material={materials.white}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.832}
            />
        </group>
    )
}

useGLTF.preload('/models/low_poly_earth-transformed.glb')