import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useAnimations, useGLTF } from '@react-three/drei';

const Avatar = () => {
    const avatar = useGLTF("/avatar-animation.glb");
    const {actions, names} = useAnimations(avatar.animations, avatar.scene);
    useEffect(() => {
        actions.dance.play();
    }, []);
    return <group>
        <primitive object={avatar.scene} scale = {2} 
        position-y = {-2} position-x = {0}/>
    </group>;
};

export const AvatarCanvas = () => {
  return (
    <Canvas>
        <OrbitControls/>
        <ambientLight intensity={0.5}/>
        <pointLight position={[1, 1, 1]}/>
       <Avatar/>
    </Canvas>
  );
}
