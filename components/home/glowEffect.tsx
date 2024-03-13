export default function GlowEffect() {
  function rotate(x: number, y: number, degree: number) {
    const radians = degree * (Math.PI / 180);
    const origin = [[x, y]];
    const scale = [
      [Math.cos(radians), -Math.sin(radians)],
      [Math.sin(radians), Math.cos(radians)],
    ];
    let result = [[0, 0]];
    for (let i = 0; i < 1; i++) {
      for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 2; k++) {
          result[i][k] += origin[i][j] * scale[j][k];
        }
      }
    }
    return {
      x: result[0][0],
      y: result[0][1],
    };
  }
  return (
    <div className="rotate">
      <div className="glow-purple translate-x-96 -translate-y-52 fade-out"></div>
      <div className="glow-blue -translate-x-96 -translate-y-48 fade-out"></div>
      <div className="glow-blue-light translate-y-64 fade-out"></div>
    </div>
  );
}
