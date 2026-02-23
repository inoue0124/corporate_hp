'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* ── Wave Mesh ─────────────────────────────────────────────── */

const waveVertexShader = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;
  varying float vElevation;

  void main() {
    vUv = uv;
    vec3 pos = position;

    // Layered waves for organic flowing motion
    float wave1 = sin(pos.x * 0.4 + uTime * 0.3) * 1.2;
    float wave2 = sin(pos.x * 0.2 + pos.y * 0.3 + uTime * 0.2) * 0.8;
    float wave3 = cos(pos.y * 0.3 + uTime * 0.25) * 0.6;
    float wave4 = sin(pos.x * 0.8 + pos.y * 0.5 + uTime * 0.4) * 0.3;

    pos.z = wave1 + wave2 + wave3 + wave4;
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
    float grad = vUv.x * 0.5 + vUv.y * 0.3 + (vElevation + 3.0) / 6.0 * 0.2;
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
    () => ({ uTime: { value: 0 } }),
    [],
  );

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 2.6, 0.15, -0.3]}
      position={[0, -0.5, -2]}
    >
      <planeGeometry args={[22, 18, 200, 200]} />
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
        camera={{ position: [0, 3, 6], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.3} />
        <WaveMesh />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}
