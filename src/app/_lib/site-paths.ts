export const BASE_PATH = process.env.NODE_ENV === "production" ? "/NextJsSample" : "";

export function publicAssetPath(path: `/${string}`) {
  return `${BASE_PATH}${path}`;
}
