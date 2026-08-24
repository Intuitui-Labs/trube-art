// react-native-wgpu@0.5.x ships without TypeScript declarations.
// Minimal ambient shim so the WebGPU driver surface type-checks;
// replace with the official types when migrating to react-native-webgpu.
declare module 'react-native-wgpu' {
  export type CanvasRef = any;
  export const Canvas: any;
  export const useCanvasContext: any;
}
