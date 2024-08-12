'use client';

import { useEffect, useRef } from 'react';
import { useEditor } from '@/features/editor/hooks/use-editor';

export const Editor = () => {
  const { init } = useEditor();

  const canvasRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    init({
      initialCanvas: '',
      initialContainer: containerRef.current!,
    });
  }, [init]);

  return (
    <div ref={containerRef}>
      <canvas ref={canvasRef} />
    </div>
  );
};
