"use client";

import * as THREE from "three";
import React from "react";
import { useGLTF, Float, Center } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        imagetostl_mesh0001_1: THREE.Mesh;
        imagetostl_mesh0001_2: THREE.Mesh;
        imagetostl_mesh0001_3: THREE.Mesh;
        imagetostl_mesh0001_4: THREE.Mesh;
    };
    materials: {
        PaletteMaterial002: THREE.MeshStandardMaterial;
        PaletteMaterial003: THREE.MeshStandardMaterial;
        ["Material.006"]: THREE.MeshStandardMaterial;
        PaletteMaterial001: THREE.MeshStandardMaterial;
    };
};

const FINAL_SCALE = 0.04;

export function ReterminalModel(props: any) {
    const { nodes, materials } = useGLTF("/assets/3d/reterminal.glb") as unknown as GLTFResult;

    return (
        <group {...props} dispose={null} scale={FINAL_SCALE}>
            <Float speed={0.6} rotationIntensity={0.05} floatIntensity={0.25}>
                <group
                    // 📐 ROTACIÓN BASE (Estatica)
                    // [-Math.PI / 2, 0, 0] endereza el modelo si viene acostado en el archivo original.
                    rotation={[-Math.PI / 2, 0, 0]}
                    // 📍 POSICIÓN BASE (Estatica)
                    // Ajusta esto (X, Y, Z) para centrar el modelo vertical u horizontalmente dentro de su contenedor.
                    // Si lo ves muy arriba, baja el segundo valor (Y) (ej: -100).
                    position={[0, 0, 0]}
                >
                    <Center>
                        <mesh
                            geometry={nodes.imagetostl_mesh0001_1.geometry}
                            material={materials.PaletteMaterial002}
                            castShadow
                        />
                        <mesh
                            geometry={nodes.imagetostl_mesh0001_2.geometry}
                            material={materials.PaletteMaterial003}
                            castShadow
                        />
                        <mesh
                            geometry={nodes.imagetostl_mesh0001_3.geometry}
                            material={materials["Material.006"]}
                            castShadow
                        />
                        <mesh
                            geometry={nodes.imagetostl_mesh0001_4.geometry}
                            material={materials.PaletteMaterial001}
                            castShadow
                        />
                    </Center>
                </group>
            </Float>
        </group>
    );
}

// Pre-carga el modelo para evitar tirones al entrar a la sección
useGLTF.preload("/assets/3d/reterminal.glb");
