import React, { useEffect } from 'react';

function MouseMovementComponent() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      console.log(`Mouse position: X=${event.clientX}, Y=${event.clientY}`);
    };

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h1>Move your mouse around</h1>
    </div>
  );
}

export default MouseMovementComponent;
