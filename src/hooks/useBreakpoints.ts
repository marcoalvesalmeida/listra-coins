import { useWindowDimensions, PixelRatio, Platform } from "react-native";
import { useMemo } from "react";

type Breakpoints = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

type UseBreakpointsReturn = {
  widthBreakpoints: {
    isSm: boolean;
    isMd: boolean;
    isLg: boolean;
    isXl: boolean;
  };
  heightBreakpoints: {
    isSm: boolean;
    isMd: boolean;
    isLg: boolean;
    isXl: boolean;
  };
};

const useBreakpoints = (): UseBreakpointsReturn => {
  const { width, height } = useWindowDimensions();
  const pixelDensity = PixelRatio.get();

  const widthBreakpoints: Breakpoints = useMemo(() => {
    if (pixelDensity >= 3) {
      return {
        sm: 375,
        md: 768,
        lg: 1024,
        xl: 1440,
      };
    } else if (pixelDensity >= 2) {
      return {
        sm: 320,
        md: 720,
        lg: 960,
        xl: 1280,
      };
    } else {
      return {
        sm: 280,
        md: 640,
        lg: 800,
        xl: 1200,
      };
    }
  }, [pixelDensity]);

  const heightBreakpoints: Breakpoints = useMemo(() => {
    if (pixelDensity >= 2) {
      return {
        sm: 668,
        md: 800,
        lg: 900,
        xl: 1080,
      };
    } else {
      return {
        sm: 480,
        md: 640,
        lg: 800,
        xl: 900,
      };
    }
  }, [pixelDensity]);

  const widthIsSm = width < widthBreakpoints.sm;
  const widthIsMd = width >= widthBreakpoints.sm && width < widthBreakpoints.md;
  const widthIsLg = width >= widthBreakpoints.md && width < widthBreakpoints.lg;
  const widthIsXl = width >= widthBreakpoints.lg;

  const heightIsSm = height < heightBreakpoints.sm;
  const heightIsMd =
    height >= heightBreakpoints.sm && height < heightBreakpoints.md;
  const heightIsLg =
    height >= heightBreakpoints.md && height < heightBreakpoints.lg;
  const heightIsXl = height >= heightBreakpoints.lg;

  return {
    widthBreakpoints: {
      isSm: widthIsSm,
      isMd: widthIsMd,
      isLg: widthIsLg,
      isXl: widthIsXl,
    },
    heightBreakpoints: {
      isSm: heightIsSm,
      isMd: heightIsMd,
      isLg: heightIsLg,
      isXl: heightIsXl,
    },
  };
};

export default useBreakpoints;
