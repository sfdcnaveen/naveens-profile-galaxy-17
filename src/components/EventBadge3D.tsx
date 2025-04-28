import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Physics, RigidBody, useSphericalJoint } from '@react-three/rapier';
import * as THREE from 'three';
import { Line } from '@react-three/drei';
import type { RigidBodyApi } from '@react-three/rapier';

interface BandProps {
  fixed: React.RefObject<RigidBodyApi>;
  j1: React.RefObject<RigidBodyApi>;
  j2: React.RefObject<RigidBodyApi>;
  j3: React.RefObject<RigidBodyApi>;
}

function Band({ fixed, j1, j2, j3 }: BandProps): JSX.Element {
  const [points, setPoints] = useState([
    new THREE.Vector3(),
    new THREE.Vector3(),
    new THREE.Vector3(),
    new THREE.Vector3(),
  ]);

  useFrame(() => {
    if (j3.current && j2.current && j1.current && fixed.current) {
      setPoints([
        j3.current.translation(),
        j2.current.translation(),
        j1.current.translation(),
        fixed.current.translation(),
      ]);
    }
  });

  // Only render Line if all points are valid
  if (points.some((pt) => !pt)) return null;

  return (
    <Line
      points={points}
      color="#111"
      lineWidth={2}
    />
  );
}

interface BadgeCardProps {
  j3: React.RefObject<RigidBodyApi>;
}

interface DraggedState {
  x: number;
  y: number;
  z: number;
}

function BadgeCard({ j3 }: BadgeCardProps) {
  const card = useRef<RigidBodyApi>(null!);
  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();
  const [dragged, setDragged] = useState<DraggedState | false>(false);

  // Always call useSphericalJoint at the top level
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]]);

  useFrame((state) => {
    if (dragged && card.current) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      card.current.setNextKinematicTranslation({
        x: vec.x - (typeof dragged === 'object' ? dragged.x : 0),
        y: vec.y - (typeof dragged === 'object' ? dragged.y : 0),
        z: vec.z - (typeof dragged === 'object' ? dragged.z : 0),
      });
    }
    if (card.current) {
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  if (!j3.current) return null;

  return (
    <RigidBody
      ref={card}
      colliders="cuboid"
      position={[0, -1.45, 0]}
      type={dragged ? 'kinematicPosition' : 'dynamic'}
    >
      <mesh
        castShadow
        receiveShadow
        onPointerDown={(e) => {
          e.stopPropagation();
          if (card.current) {
            const t = card.current.translation();
            setDragged({ x: t.x, y: t.y, z: t.z });
          }
        }}
        onPointerUp={() => setDragged(false)}
        onPointerLeave={() => setDragged(false)}
      >
        <boxGeometry args={[2.5, 3.5, 0.2]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
      {/* You can add more details here, e.g., your name, event, etc. */}
    </RigidBody>
  );
}

export default function EventBadge3D() {
  const fixed = useRef<RigidBodyApi>(null!);
  const j1 = useRef<RigidBodyApi>(null!);
  const j2 = useRef<RigidBodyApi>(null!);
  const j3 = useRef<RigidBodyApi>(null!);

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }} style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} />
      <Physics gravity={[0, -9.81, 0]}>
        <RigidBody ref={fixed} type="fixed" position={[0, 2, 0]} />
        <RigidBody ref={j1} type="dynamic" position={[0, 1, 0]} />
        <RigidBody ref={j2} type="dynamic" position={[0, 0, 0]} />
        <RigidBody ref={j3} type="dynamic" position={[0, -1, 0]} />
        <Band fixed={fixed} j1={j1} j2={j2} j3={j3} />
        <BadgeCard j3={j3} />
      </Physics>
    </Canvas>
  );
}
