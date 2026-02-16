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
  finalScale: 0.04, // 🎯 ESCALA FINAL: Es el tamaño donde queremos que se detenga.
  overshootScale: 0.1, // 🚀 REBOTE: Tamaño máximo que alcanza al entrar antes de regresar a la final.
  initialZ: -15, // 🌑 FONDO: Desde qué profundidad aparece (Z negativa es el fondo).
  initialRotation: -Math.PI, // 🔄 GIRO: Giro inicial (Math.PI es media vuelta, Math.PI * 2 es una completa).
  lerpSpeed: 0.04, // 🌊 SUAVIDAD: Qué tan rápido o lento responde la animación (0.01 lento, 0.1 rápido).
  floatIntensity: 0.5, // ☁️ FLOTACIÓN: Qué tanto se mueve arriba/abajo cuando está quieto.
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
     * ----------------------------------------
     * Mientras el modelo está entrando (active), primero apuntamos a un tamaño mayor (overshoot)
     * y conforme se acerca al objetivo, cambiamos el foco al tamaño final.
     */
    let targetScale = active ? ANIM_CONFIG.finalScale : 0;

    // Si está en pleno proceso de entrada (escala menor al 90% de la final), apuntamos al rebote
    if (active && group.current.scale.x < ANIM_CONFIG.finalScale * 0.9) {
      targetScale = ANIM_CONFIG.overshootScale;
    }

    // Aplicamos Lerp (Interpolación lineal) para un movimiento suave
    group.current.scale.x = THREE.MathUtils.lerp(
      group.current.scale.x,
      targetScale,
      ANIM_CONFIG.lerpSpeed,
    );
    group.current.scale.y = THREE.MathUtils.lerp(
      group.current.scale.y,
      targetScale,
      ANIM_CONFIG.lerpSpeed,
    );
    group.current.scale.z = THREE.MathUtils.lerp(
      group.current.scale.z,
      targetScale,
      ANIM_CONFIG.lerpSpeed,
    );

    /**
     * 2. LÓGICA DE POSICIÓN (DEL FONDO HACIA ADELANTE)
     * ----------------------------------------------
     * El modelo viaja desde initialZ hasta la posición 0 en el eje Z.
     */
    const targetZ = active ? 0 : ANIM_CONFIG.initialZ;
    group.current.position.z = THREE.MathUtils.lerp(
      group.current.position.z,
      targetZ,
      0.03,
    );

    /**
     * 3. LÓGICA DE GIRO (MEDIA VUELTA HASTA POSICIÓN FRONTAL)
     * ----------------------------------------------------
     * Combinamos un giro de entrada con una oscilación sutil "Idle" una vez que entra.
     */
    const baseRotationY = active ? 0 : ANIM_CONFIG.initialRotation;
    const idleOscillation = active ? Math.sin(t / 2) / 4 : 0; // Oscilación Y continua

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      baseRotationY + idleOscillation,
      0.08, // Velocidad de giro
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
          // rotation: Ajusta la orientación base si el modelo aparece al revés.
          rotation={[-Math.PI / 2, 0, 0]}
          // position: Ajusta si necesitas desplazar el modelo internamente [X, Y, Z].
          // Nota: El componente <Center> en el padre ya ayuda a centrarlo automáticamente.
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
