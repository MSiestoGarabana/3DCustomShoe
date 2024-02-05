import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei"; //esto es lo que nos permite rotar cosas, uno de los formatos que maneja THREE es GLTF , este es el hoook que usaremos para cargar los modulos 3d
import { Shoe } from "./3DModels/Shoe";
import "./App.css";

function App() {
  const [mesh, setMesh] = useState("#ffffff");
  const [stripes, setStripes] = useState("#ffffff");
  const [soul, setSoul] = useState("#ffffff");

  return (
    <div className="App">
      <h2>Demo by Miguel Siesto</h2>
      <div className="product-canvas">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight />
            <spotLight
              intensity={1000}
              angle={2}
              penumbra={1}
              position={[10, 15, 10]}
              castShadow
            />
            <Shoe
              customColors={{
                mesh: mesh,
                stripes: stripes,
                soul: soul,
              }}
            />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />
          </Suspense>
        </Canvas>
      </div>
      <div className="card">
        <h2>Color chooser</h2>
        <div className="colors">
          <div>
            <input
              type="color"
              id="head"
              name="head"
              value={mesh}
              onChange={(e) => setMesh(e.target.value)}
            />
            <label for="head">Main</label>
          </div>

          <div>
            <input
              type="color"
              id="body"
              name="body"
              value={stripes}
              onChange={(e) => setStripes(e.target.value)}
            />
            <label for="body">Stripes</label>
          </div>
          <div>
            <input
              type="color"
              id="body"
              name="body"
              value={soul}
              onChange={(e) => setSoul(e.target.value)}
            />
            <label for="body">Soul</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
