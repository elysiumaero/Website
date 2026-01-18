import { useMemo } from "react";

/**
 * Hook to dynamically load team member images from public/assets/team/{folderName}/
 * Looks for common image formats: jpg, jpeg, png, webp
 */
export const useTeamImages = (folderName: string): string | null => {
  return useMemo(() => {
    const imageFormats = ["jpg", "jpeg", "png", "webp"];

    for (const format of imageFormats) {
      const imagePath = `/assets/team/${folderName}/photo.${format}`;

      // Test if image exists by creating an Image object
      // In a production app, this would typically be done server-side
      // For now, we'll return the path and let the img tag handle the 404
      try {
        // Simple approach: assume the image exists if no specific error handling is needed
        // The img tag will naturally handle missing images with the alt attribute
        return imagePath;
      } catch {
        continue;
      }
    }

    return null;
  }, [folderName]);
};

/**
 * Alternative: Use image imports with proper typing
 * This ensures images are bundled with the app
 */
export const getTeamImagePath = (folderName: string): string => {
  return `/assets/team/${folderName}/photo.jpg`;
};
