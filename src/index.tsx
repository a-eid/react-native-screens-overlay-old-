import { NativeModules } from 'react-native';

type ScreensOverlayType = {
  multiply(a: number, b: number): Promise<number>;
};

const { ScreensOverlay } = NativeModules;

export default ScreensOverlay as ScreensOverlayType;
