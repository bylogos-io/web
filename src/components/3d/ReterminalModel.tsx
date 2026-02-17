"use client";

import * as THREE from "three";
import React, { useRef, useState, useEffect } from "react";
import { useGLTF, Float } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

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

/**
 * 🛠️ CONFIGURACIÓN DE ANIMACIÓN (Edita estos valores para ajustar el comportamiento)
 * ---------------------------------------------------------------------------------
 */
const ANIM_CONFIG = {
  finalScale: 0.04, // 🎯 ESCALA FINAL: Tamaño del objeto.
  overshootScale: 0.1, // 🚀 REBOTE: Tamaño máximo al entrar.

  // 📍 AJUSTE DE POSICIÓN FINAL (PROFUNDIDAD Z)
  // 0 = Centro.
  // Valor Positivo (ej. 5) = Más cerca de la pantalla.
  // Valor Negativo (ej. -5) = Más lejos (hacia el fondo).
  finalZ: 0,

  initialZ: -15, // 🌑 FONDO: Desde donde aparece.

  // 📐 AJUSTE DE ROTACIÓN FINAL (EJE Y)
  // 0 = Totalmente de frente.
  // Valores pequeños para girarlo un poco:
  //  0.5  = Giro leve a la izquierda.
  // -0.5  = Giro leve a la derecha.
  // Math.PI / 4 = 45 grados.
  finalRotationY: 0.7,

  initialRotation: -Math.PI, // 🔄 GIRO INICIAL: Media vuelta.
  lerpSpeed: 0.04, // 🌊 VELOCIDAD: Suavidad de la animación.
  floatIntensity: 0.5, // ☁️ FLOTACIÓN: Intensidad.
};

/**
 * COMPONENTE: ReterminalModel
 * Define el objeto 3D del dispositivo, aplica su escala dinámica y maneja la lógica de entrada.
 */
export function ReterminalModel(props: any) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(
    "/assets/3d/reterminal.glb",
  ) as unknown as GLTFResult;

  // Estado para detectar cuándo debe iniciar la entrada
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Iniciamos la animación de entrada poco después de que el componente se monta
    const timer = setTimeout(() => setActive(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();

    /**
     * 1. LÓGICA DE ESCALA CON REBOTE (OVERSHOOT)
     */
    let targetScale = active ? ANIM_CONFIG.finalScale : 0;

    if (active && group.current.scale.x < ANIM_CONFIG.finalScale * 0.9) {
      targetScale = ANIM_CONFIG.overshootScale;
    }

    group.current.scale.setScalar(
      THREE.MathUtils.lerp(
        group.current.scale.x,
        targetScale,
        ANIM_CONFIG.lerpSpeed,
      ),
    );

    /**
     * 2. LÓGICA DE POSICIÓN
     */
    // Usa la configuración finalZ cuando está activo
    const targetZ = active ? ANIM_CONFIG.finalZ : ANIM_CONFIG.initialZ;
    group.current.position.z = THREE.MathUtils.lerp(
      group.current.position.z,
      targetZ,
      0.03,
    );

    /**
     * 3. LÓGICA DE GIRO
     */
    // Usa la configuración finalRotationY cuando está activo
    const baseRotationY = active
      ? ANIM_CONFIG.finalRotationY
      : ANIM_CONFIG.initialRotation;
    const idleOscillation = active ? Math.sin(t / 2) / 4 : 0;

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      baseRotationY + idleOscillation,
      0.08,
    );
  });

  return (
    <group ref={group} {...props} dispose={null} scale={0}>
      <Float
        speed={1.5}
        rotationIntensity={0.2}
        floatIntensity={ANIM_CONFIG.floatIntensity}
      >
        <group
          // 📐 ROTACIÓN BASE (Estatica)
          // [-Math.PI / 2, 0, 0] endereza el modelo si viene acostado en el archivo original.
          rotation={[-Math.PI / 2, 0, 0]}
          // 📍 POSICIÓN BASE (Estatica)
          // Ajusta esto (X, Y, Z) para centrar el modelo vertical u horizontalmente dentro de su contenedor.
          // Si lo ves muy arriba, baja el segundo valor (Y) (ej: -100).
          position={[0, -90, 0]}
        >
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
        </group>
      </Float>
    </group>
  );
}

// Pre-carga el modelo para evitar tirones al entrar a la sección
useGLTF.preload("/assets/3d/reterminal.glb");
