import { defineConfig } from "vite" 

export default defineConfig({
    base: "/",
    plugins: [
        // your plugins,
        {
          name: "singleHMR",
          handleHotUpdate({ modules }) {
            modules.map((m) => {
              m.importedModules = new Set();
              m.importers = new Set();
            });
    
            return modules;
          },
        },
      ],
    });