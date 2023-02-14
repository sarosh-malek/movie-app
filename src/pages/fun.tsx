import { useEffect } from 'react';

export default function Fun() {
  useEffect(() => {
    const el = document.body.querySelector<HTMLDivElement>('.caaard');
    if (el) {
      let height = 0;
      const animate = () => {
        height += 1;
        el.style.height = height + '%';
        if (height < 100) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    }
  });
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="caaard rect w-[200px] max-h-[200px] bg-blue-400"></div>
    </div>
  );
}
