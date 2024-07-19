import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import path from "path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  dotenv.config({
    path: path.join(path.resolve(), ".env"),
  });

  const env = loadEnv(mode, process.cwd(), "");

  const MODE = process.env.NODE_ENV;
  const host = process.env.HOST;
  const port = +(process.env.PORT || 5000);

  return {
    // vite config
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
      "process.env": {
        MODE,
      },
    },
    base: MODE === "development" ? "/" : "/",
    server: {
      host,
      port,
    },
    resolve: {
      // prettier-ignore
      alias: [
        { find: "@common", replacement: path.join(path.resolve(), "src/common") },
        { find: "@components", replacement: path.join(path.resolve(), "src/components") },
        { find: "@hooks", replacement: path.join(path.resolve(), "src/hooks") },
        { find: "@libs", replacement: path.join(path.resolve(), "src/libs") },
        { find: "@features", replacement: path.join(path.resolve(), "src/features") },
        { find: "@pages", replacement: path.join(path.resolve(), "src/pages") },
        { find: "@routes", replacement: path.join(path.resolve(), "src/routes") },
        { find: "@utils", replacement: path.join(path.resolve(), "src/utils") },
        { find: "@types", replacement: path.join(path.resolve(), "src/types") },
        { find: "@src", replacement: path.join(path.resolve(), "src") },
      ],
    },
    plugins: [react()],
  };
});
