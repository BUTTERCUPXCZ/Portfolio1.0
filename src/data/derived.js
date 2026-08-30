/* Computed values. Everything here is generated from src/data/profile.js —
 * nothing in this file is meant to be edited by hand.
 *
 * The point of this layer: `location` is written once in profile.js and feeds
 * four consumers (the "based in" line, the header clock, the header
 * coordinates, and the address Google reads). They cannot drift apart. */

import { profile, identity, location, contact, seo } from './profile.js'

/* ---------------------------------------------------------------- location */
export const locationLine = `${location.city}, ${location.country}`

const degrees = (value, positive, negative) =>
  `${Math.abs(value).toFixed(4)}° ${value >= 0 ? positive : negative}`

export const coordinatesLine = `${degrees(location.latitude, 'N', 'S')}, ${degrees(
  location.longitude,
  'E',
  'W'
)}`

export const timeZone = location.timeZone
export const timeLabel = location.timeLabel
export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`

/* ------------------------------------------------------------------ strings */
export const formatPeriod = ({ start, end }) => `${start} — ${end ?? 'Present'}`

export const emailHref = `mailto:${contact.email}`
export const phoneHref = `tel:${contact.phoneE164}`

export const copyrightLine = `© ${new Date().getFullYear()} ${identity.name} — All rights reserved`

export const pageTitle = `${identity.name} — ${identity.title}`

/* -------------------------------------------------------------- collections */
export const visibleProjects = profile.projects.filter((p) => !p.hidden)

/* ------------------------------------------------------------------ metadata */
export const absoluteUrl = (path) => new URL(path, seo.siteUrl).href

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: identity.name,
    alternateName: identity.fullName,
    jobTitle: identity.title,
    description: seo.description,
    url: seo.siteUrl,
    image: absoluteUrl(seo.ogImage),
    email: contact.email,
    ...(contact.showPhone ? { telephone: contact.phoneE164 } : {}),
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: location.region,
      addressCountry: location.countryCode,
    },
    homeLocation: {
      '@type': 'Place',
      name: locationLine,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: location.latitude,
        longitude: location.longitude,
      },
    },
    alumniOf: profile.education.map((e) => ({
      '@type': 'CollegeOrUniversity',
      name: e.school,
    })),
    worksFor: profile.experience
      .filter((e) => e.end === null)
      .map((e) => ({
        '@type': 'Organization',
        name: e.company,
        ...(e.links?.length ? { sameAs: e.links.map((l) => l.href) } : {}),
      })),
    knowsAbout: profile.skills.flatMap((group) => group.items),
    sameAs: profile.social.map((s) => s.href),
  }
}
