"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "@mui/material";
import { ReterminalModel } from "./ReterminalModel";

/**
 * COMPONENTE: ReterminalScene
 * Este componente define la "ventana" o el lienzo (Canvas) donde vive el modelo 3D.
 */
export function ReterminalScene() {
    return (
        <Box
            sx={{
                width: "100%",
                /**
                 * 1. TAMAÑO DE LA VENTANA (ALTURA)
                 * Ajusta estos valores para que el modelo tenga más espacio y no se corte.
                 * xs: altura en móviles, md: altura en escritorio.
                 */
                height: { xs: "200px", md: "450px" },
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none", // Desactiva eventos de puntero para asegurar no interactividad
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
            >
                <Suspense fallback={null}>
                    {/* 
            3. CENTRADO DEL MODELO
            El componente <Center> calcula el tamaño del modelo y lo pone 
            exactamente en el centro (0,0,0) de la escena.
          */}
                    <ReterminalModel />

                    {/* Luces de la escena */}
                    <ambientLight intensity={0.7} />
                    <hemisphereLight intensity={0.9} groundColor="#b9c6d8" />
                    <directionalLight position={[-8, 6, 8]} intensity={1.2} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
                </Suspense>
            </Canvas>
        </Box>
    );
}
