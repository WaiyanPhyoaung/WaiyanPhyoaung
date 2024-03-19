export function GridBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-full dark:bg-black bg-black dark:bg-grid-white/[0.2] bg-grid-white/[0.1] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
      {children}
    </div>
  );
}
export default GridBackground;
