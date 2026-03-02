'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Center } from '@react-three/drei';
import { Box } from '@mui/material';
import { ReterminalModel } from './ReterminalModel';

/**
 * COMPONENTE: ReterminalScene
 * Este componente define la "ventana" o el lienzo (Canvas) donde vive el modelo 3D.
 */
export function ReterminalScene() {
  return (
    <Box
      sx={{
        width: '100%',
        /**
         * 1. TAMAÑO DE LA VENTANA (ALTURA)
         * Ajusta estos valores para que el modelo tenga más espacio y no se corte.
         * xs: altura en móviles, md: altura en escritorio.
         */
        height: { xs: '250px', md: '600px' },
        position: 'relative',
        //backgroundColor: "red", // Puedes quitar esto cuando el tamaño sea el ideal
        cursor: 'grab',
        '&:active': { cursor: 'grabbing' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Canvas
        shadows
        dpr={[1, 3]} // Calidad de imagen (1 a 3 para máxima nitidez)
        gl={{ antialias: true }}
        /**
         * 2. POSICIÓN DE LA CÁMARA
         * El tercer valor de 'position' (Z) aleja o acerca la cámara.
         * Z más alto = cámara más lejos. Z más bajo = cámara más cerca.
         * fov: Campo de visión. Valores bajos hacen zoom.
         */
        camera={{ position: [0, 0, 20], fov: 30 }} // Cámara más profesional
        //camera={{ position: [0, 0, 15], fov: 40 }}
      >
        <Suspense fallback={null}>
          {/* 
            3. CENTRADO DEL MODELO
            El componente <Center> calcula el tamaño del modelo y lo pone 
            exactamente en el centro (0,0,0) de la escena.
          */}
          <Center>
            <ReterminalModel />
          </Center>

          {/* Sombra en el suelo */}
          {/* <ContactShadows
            position={[0, -2.5, 0]} // Ajusta la altura de la sombra
            opacity={0.4}
            scale={15}
            blur={2}
            far={4.5}
          /> */}

          <Environment preset='apartment' />

          {/* Luces de la escena */}
          <ambientLight intensity={0.7} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1.5}
            castShadow
          />
        </Suspense>

        {/* 
          4. CONTROLES DEL MOUSE
          Aquí se definen los límites de giro que pediste.
        */}
        <OrbitControls
          enableZoom={false} // Bloquea el zoom con la rueda
          enablePan={false} // Bloquea el botón derecho para mover de lado
          minPolarAngle={Math.PI / 2.5} // Límite de giro hacia arriba
          maxPolarAngle={Math.PI / 1.8} // Límite de giro hacia abajo
          minAzimuthAngle={-Math.PI / 4} // Límite de giro a la izquierda
          maxAzimuthAngle={Math.PI / 4} // Límite de giro a la derecha
          makeDefault
          target={[0, 0, 0]}
        />
      </Canvas>
    </Box>
  );
}
