'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* ── Wave Mesh ─────────────────────────────────────────────── */

const waveVertexShader = /* glsl */ `
  uniform float uAmplitude;
  uniform float uWaveLength;
  uniform float uTime;
  varying vec2 vUv;
  varying float vElevation;

  void main() {
    vUv = uv;
    vec3 pos = position;

    float wave = sin(pos.x * uWaveLength + uTime / 2.0) * uAmplitude;
    pos.z = wave * pos.y * (0.15 * (cos(uTime) + 1.0) + 0.7) / 20.0;
    vElevation = pos.z;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const waveFragmentShader = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;
  varying float vElevation;

  void main() {
    // Indigo #4f46e5 → Purple #7c3aed → Lavender #a78bfa
    vec3 indigo   = vec3(0.310, 0.275, 0.898);
    vec3 purple   = vec3(0.486, 0.228, 0.929);
    vec3 lavender = vec3(0.655, 0.545, 0.980);

    // Gradient based on UV + elevation for more variation
    float grad = vUv.x * 0.5 + vUv.y * 0.3 + (vElevation + 1.0) / 2.0 * 0.2;
    grad += sin(uTime * 0.15) * 0.05;

    vec3 color = mix(indigo, purple, smoothstep(0.2, 0.5, grad));
    color = mix(color, lavender, smoothstep(0.5, 0.85, grad));

    // Edge fade for soft blending
    float edgeFade = smoothstep(0.0, 0.15, vUv.x) * smoothstep(1.0, 0.85, vUv.x)
                   * smoothstep(0.0, 0.15, vUv.y) * smoothstep(1.0, 0.85, vUv.y);

    gl_FragColor = vec4(color, 0.7 * edgeFade);
  }
`;

function WaveMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAmplitude: { value: 3.8 },
      uWaveLength: { value: 1.0 },
    }),
    [],
  );

  useFrame(() => {
    uniforms.uTime.value += 0.01;
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[1.4, -0.2, -0.6]}
      position={[0, 0, 0]}
    >
      <planeGeometry args={[20, 10, 100, 100]} />
      <shaderMaterial
        vertexShader={waveVertexShader}
        fragmentShader={waveFragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

/* ── Floating Particles ────────────────────────────────────── */

function FloatingParticles({ count = 120 }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1;
    }
    return pos;
  }, [count]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.015;
    ref.current.rotation.x = Math.sin(t * 0.04) * 0.08;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#c4b5fd"
        size={0.06}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

/* ── Scene ─────────────────────────────────────────────────── */

export function WaveScene() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        frameloop="always"
        orthographic
        camera={{ zoom: 250, position: [0, 0, 0] }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight />
        <WaveMesh />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}
