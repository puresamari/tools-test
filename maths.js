export const Clamp = (v, min, max) => v < min ? min : v > max ? max : v;

export const Clamp01 = v => Clamp(v, 0, 1);