import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import StarField from "./StarField";

function Earth() {
  const meshRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  const textures = useTexture({
    map: "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg",
    specularMap:
      "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg",
    normalMap:
      "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg",
    clouds:
      "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png",
  });

  const cloudTexture = textures.clouds;

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.08;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.1;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += delta * 0.05;
    }
  });

  const atmosphereGeometry = useMemo(() => new THREE.SphereGeometry(1.6, 64, 64), []);

  return (
    <group>
      {/* Earth surface */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshPhongMaterial
          map={textures.map}
          specularMap={textures.specularMap}
          normalMap={textures.normalMap}
          specular={new THREE.Color(0x333333)}
          shininess={15}
          bumpScale={0.05}
        />
      </mesh>

      {/* Clouds layer */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.53, 64, 64]} />
        <meshPhongMaterial
          map={cloudTexture}
          transparent
          opacity={0.4}
          depthWrite={false}
        />
      </mesh>

      {/* Atmosphere glow */}
      <mesh ref={atmosphereRef} geometry={atmosphereGeometry}>
        <shaderMaterial
          vertexShader={`
            varying vec3 vNormal;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            varying vec3 vNormal;
            void main() {
              float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
              gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
            }
          `}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          transparent
        />
      </mesh>
    </group>
  );
}

function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 3, 5]} intensity={2.2} color="#ffffff" />
      <pointLight position={[-5, -2, -5]} intensity={0.8} color="#3b82f6" />
    </>
  );
}

interface EarthGlobeProps {
  className?: string;
}

export default function EarthGlobe({ className = "" }: EarthGlobeProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <SceneLighting />
          <Earth />
          <StarField count={2500} />
        </Suspense>
      </Canvas>
    </div>
  );
}
