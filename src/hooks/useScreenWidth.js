'use client';
import { useState, useEffect } from 'react';

function useScreenWidth() {
  const isClient = typeof window === 'object'; // Check if we're on the client side
  const [screenWidth, setScreenWidth] = useState(
    isClient ? window?.innerWidth : 0
  );

  useEffect(() => {
    if (!isClient) {
      return; // Do nothing on the server
    }
    // Function to update screenWidth whenever the window is resized
    function handleResize() {
      setScreenWidth(window?.innerWidth);
    }

    // Attach the event listener
    window?.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window?.removeEventListener('resize', handleResize);
    };
  }, [isClient]);

  return screenWidth;
}

export { useScreenWidth };
