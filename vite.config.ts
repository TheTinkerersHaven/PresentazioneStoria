import { defineConfig } from 'vite';

// Accesso dalla LAN: Vite blocca gli Host non previsti («Blocked request»),
// allowedHosts: true disattiva il controllo (richiesta esplicita).
export default defineConfig({
  server: {
    allowedHosts: true,
  },
});
