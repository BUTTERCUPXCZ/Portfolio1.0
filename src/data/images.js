/* Asset resolution. You never need to edit this file.
 *
 * To add a project screenshot: drop the image into src/assets/projects/ and put
 * its file name (without the extension) in the `image:` field in profile.js.
 * No import line, no path, no extension to keep in sync. */

const files = import.meta.glob(
  '../assets/projects/*.{webp,avif,png,jpg,jpeg}',
  { eager: true, import: 'default', query: '?url' }
)

const byKey = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [
    path.split('/').pop().replace(/\.[^.]+$/, ''),
    url,
  ])
)

export function projectImage(key) {
  if (!key) return null
  const url = byKey[key] ?? null
  if (!url && import.meta.env.DEV) {
    console.warn(
      `[profile] No image named "${key}" in src/assets/projects/. ` +
        `Available: ${Object.keys(byKey).join(', ') || '(folder is empty)'}`
    )
  }
  return url
}

export const availableImageKeys = Object.keys(byKey)
