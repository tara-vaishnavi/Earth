import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import StarField from "./StarField";

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return reducedMotion;
}

function Earth({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  const textures = useTexture({
    map: "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg",
    specularMap:
      "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg",
    normalMap:
      "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg",
    clouds:
      "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png",
  });

  useFrame((_, delta) => {
    const drift = delta * 0.08;

    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        reducedMotion ? 0.2 : pointer.y * 0.35 + 0.2,
        reducedMotion ? 1 : 0.04,
      );
      if (!reducedMotion) groupRef.current.rotation.y += drift;
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        reducedMotion ? 0 : pointer.x * 0.25,
        reducedMotion ? 1 : 0.04,
      );
    }

    if (meshRef.current && !reducedMotion) {
      meshRef.current.rotation.y += drift * 1.2;
    }

    if (cloudsRef.current && !reducedMotion) {
      cloudsRef.current.rotation.y += delta * 0.14;
    }

    if (atmosphereRef.current && !reducedMotion) {
      atmosphereRef.current.rotation.y += delta * 0.06;
    }
  });

  const atmosphereGeometry = useMemo(() => new THREE.SphereGeometry(1.7, 64, 64), []);

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} scale={1.08}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshPhongMaterial
          map={textures.map}
          specularMap={textures.specularMap}
          normalMap={textures.normalMap}
          specular={new THREE.Color(0x333333)}
          shininess={18}
          bumpScale={0.05}
        />
      </mesh>

      <mesh ref={cloudsRef} scale={1.08}>
        <sphereGeometry args={[1.53, 64, 64]} />
        <meshPhongMaterial
          map={textures.clouds}
          transparent
          opacity={0.45}
          depthWrite={false}
        />
      </mesh>

      <mesh ref={atmosphereRef} geometry={atmosphereGeometry} scale={1.08}>
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
              float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
              gl_FragColor = vec4(0.2, 0.7, 1.0, 1.0) * intensity;
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
      <ambientLight intensity={0.28} />
      <directionalLight position={[5, 3, 5]} intensity={2.4} color="#ffffff" />
      <pointLight position={[-6, -2, -4]} intensity={0.9} color="#3b82f6" />
      <pointLight position={[4, -3, 6]} intensity={0.8} color="#67e8f9" />
    </>
  );
}

interface EarthGlobeProps {
  className?: string;
}

export default function EarthGlobe({ className = "" }: EarthGlobeProps) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 4.2], fov: 42 }} gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <SceneLighting />
          <Earth reducedMotion={reducedMotion} />
          <StarField count={1800} />
        </Suspense>
      </Canvas>
    </div>
  );
}
