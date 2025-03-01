import { useEffect, useState } from 'react';

const PracticePage = () => {
  let circles = [];

  useEffect(() => {
    const handleClick = (event) => {
      const randomRadius = Math.random() * (100 - 50) + 50; // Random size between 50 and 100
      const newCircle = document.createElement('div');

      newCircle.style.position = 'absolute';
      newCircle.style.width = `${randomRadius}px`;
      newCircle.style.height = `${randomRadius}px`;
      newCircle.style.border = '1px solid black';
      newCircle.style.borderRadius = '50%';
      newCircle.style.top = `${event.clientY - randomRadius / 2}px`;
      newCircle.style.left = `${event.clientX - randomRadius / 2}px`;

      document.body.appendChild(newCircle);
      circles.push({
        element: newCircle,
        x: event.clientX,
        y: event.clientY,
        radius: randomRadius / 2,
      });

      if (circles.length === 3) {
        if (checkIntersection(circles[0], circles[1])) {
          console.log('Circles intersect!');
        }
        document.body.removeChild(circles[0].element);
        document.body.removeChild(circles[1].element);
        circles.shift();
        circles.shift();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  function checkIntersection(circle1, circle2) {
    const dx = circle1.x - circle2.x;
    const dy = circle1.y - circle2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < circle1.radius + circle2.radius;
  }

  return (
    <div className='flex flex-col justify-center items-center bg-gray-300'>
      <h1 className='text-3xl font-bold mb-3 border-b-4 w-full text-center'>
        Practice Page
      </h1>
      <div className='flex flex-col'>
        <div className='flex flex-col justify-center items-center border-2 border-b-sky-700 p-5 gap-5'>
          <h2 className='text-2xl w-full border-b-2 text-center'>
            Practicing for different questions
          </h2>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PracticePage;
