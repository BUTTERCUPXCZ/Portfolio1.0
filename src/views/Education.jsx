import { education } from '../data/profile.js'
import Entry from '../components/Entry.jsx'

export default function Education() {
  return (
    <div className="max-w-4xl space-y-6">
      {education.map((entry) => (
        <Entry
          key={entry.id}
          title={entry.school}
          meta={`${entry.endNote ? `${entry.endNote} ` : ''}${entry.end}`}
          subtitle={`${entry.degree} · ${entry.locationLine}`}
        />
      ))}
    </div>
  )
}
