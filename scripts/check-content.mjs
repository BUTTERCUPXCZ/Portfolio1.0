/* Validates src/data/profile.js before a build can succeed.
 * Run it yourself with:  npm run check
 * It also runs automatically as part of `npm run build`. */

import { readdirSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { profile } from '../src/data/profile.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const errors = []
const warnings = []
const fail = (message) => errors.push(message)

/* --- location -------------------------------------------------------- */
if (!Intl.supportedValuesOf('timeZone').includes(profile.location.timeZone)) {
  fail(
    `location.timeZone "${profile.location.timeZone}" is not a real timezone. ` +
      'The Philippines is "Asia/Manila" — there is no "Asia/Davao".'
  )
}
if (
  Math.abs(profile.location.latitude) > 90 ||
  Math.abs(profile.location.longitude) > 180
) {
  fail('location latitude/longitude is out of range.')
}

/* --- projects -------------------------------------------------------- */
const projectDir = resolve(root, 'src/assets/projects')
const imageKeys = existsSync(projectDir)
  ? readdirSync(projectDir).map((file) => file.replace(/\.[^.]+$/, ''))
  : []

const dupes = (list) => list.filter((v, i, a) => a.indexOf(v) !== i)

for (const role of profile.experience) {
  const repeated = dupes(role.stack ?? [])
  if (repeated.length) {
    fail(`experience "${role.id}": stack lists ${repeated.join(', ')} more than once`)
  }
}
for (const group of profile.skills) {
  const repeated = dupes(group.items)
  if (repeated.length) {
    fail(`skills "${group.id}": lists ${repeated.join(', ')} more than once`)
  }
}

const seenSlugs = new Set()
for (const project of profile.projects) {
  if (seenSlugs.has(project.slug)) fail(`duplicate project slug "${project.slug}"`)
  seenSlugs.add(project.slug)

  if (project.image && !imageKeys.includes(project.image)) {
    fail(
      `project "${project.slug}": no file named "${project.image}.*" in ` +
        `src/assets/projects/ (available: ${imageKeys.join(', ') || 'none'})`
    )
  }
  const repeatedStack = dupes(project.stack ?? [])
  if (repeatedStack.length) {
    fail(`project "${project.slug}": stack lists ${repeatedStack.join(', ')} more than once`)
  }
  if (project.featured && !project.image) {
    fail(
      `project "${project.slug}": featured:true needs an image. ` +
        'Either add one or set featured:false.'
    )
  }

  for (const [kind, value] of Object.entries(project.links)) {
    if (value === null) continue
    if (value.startsWith('/')) {
      if (!existsSync(resolve(root, 'public', value.slice(1)))) {
        fail(`project "${project.slug}" ${kind}: ${value} is missing from public/`)
      }
    } else if (!value.startsWith('https://')) {
      fail(`project "${project.slug}" ${kind}: "${value}" must start with https:// or /`)
    }
  }
}

for (const key of imageKeys) {
  if (!profile.projects.some((p) => p.image === key)) {
    warnings.push(`unused image src/assets/projects/${key}.* — use it or delete it`)
  }
}

/* --- required files -------------------------------------------------- */
for (const file of [profile.contact.cv.href, profile.seo.ogImage, '/favicon.svg']) {
  if (!existsSync(resolve(root, 'public', file.slice(1)))) {
    fail(`missing public${file}`)
  }
}

/* --- links and required fields --------------------------------------- */
for (const link of profile.social) {
  if (!link.href.startsWith('https://')) {
    fail(`social "${link.id}": href must start with https://`)
  }
}
for (const role of profile.experience) {
  if (!role.start) fail(`experience "${role.id}": start date is required`)
  if (!role.company) fail(`experience "${role.id}": company is required`)
  for (const link of role.links ?? []) {
    if (!link.href?.startsWith('https://')) {
      fail(`experience "${role.id}" link "${link.label}": href must start with https://`)
    }
    if (!link.label) fail(`experience "${role.id}": every link needs a label`)
  }
}
if (!profile.seo.siteUrl.endsWith('/')) fail('seo.siteUrl must end with /')
if (profile.seo.description.length > 160) {
  warnings.push(
    `seo.description is ${profile.seo.description.length} characters — Google truncates near 160`
  )
}

/* --- report ---------------------------------------------------------- */
for (const warning of warnings) console.warn(`  warn   ${warning}`)

if (errors.length) {
  for (const error of errors) console.error(`  ERROR  ${error}`)
  console.error(`\n${errors.length} problem(s) in src/data/profile.js — build stopped.`)
  process.exit(1)
}

console.log(
  `content OK — ${profile.projects.length} projects, ` +
    `${profile.experience.length} roles, ${profile.education.length} education entries`
)
