export const getAbsoluteImagePath = (imagePath: string, directory: string) => {
  return `/asset/${directory}${imagePath}`;
};
