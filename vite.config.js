import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

function galleryManifest() {
  const galleryDirectory = path.resolve(process.cwd(), 'public/gallery_images')
  const manifestPath = path.resolve(process.cwd(), 'public/gallery_manifest.json')
  const supportedExtensions = new Set(['.avif', '.gif', '.jpeg', '.jpg', '.png', '.webp'])

  const createManifest = () => {
    const images = fs.existsSync(galleryDirectory)
      ? fs.readdirSync(galleryDirectory, { withFileTypes: true })
          .filter(entry => entry.isFile() && supportedExtensions.has(path.extname(entry.name).toLowerCase()))
          .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
          .map(entry => `/gallery_images/${encodeURIComponent(entry.name)}`)
      : []

    fs.writeFileSync(manifestPath, `${JSON.stringify(images, null, 2)}\n`)
  }

  return {
    name: 'gallery-manifest',
    buildStart: createManifest,
    configureServer(server) {
      createManifest()

      if (fs.existsSync(galleryDirectory)) {
        server.watcher.add(galleryDirectory)
        server.watcher.on('add', createManifest)
        server.watcher.on('unlink', createManifest)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), galleryManifest()],
})
