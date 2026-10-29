import { identity } from '../data/profile.js'

/* The centrepiece of the hero panel: the one sticker everybody has worn. A
   coloured band says hello, the white writing area carries the first name at
   poster size, and the title runs underneath like it was filled in by hand. */
export default function NameTag() {
  const [first] = identity.name.split(' ')

  return (
    <div
      style={{ '--tilt': '-4deg' }}
      className="sticker w-full overflow-hidden rounded-[1.75rem] bg-white"
    >
      <p className="bg-sticker-pink px-6 pt-4 pb-3 text-center">
        <span className="block text-[clamp(2rem,4.2vw,3rem)] leading-none font-black uppercase [font-stretch:68%]">
          Hello,
        </span>
        <span className="type-label mt-1 block text-[0.75rem]">my name is</span>
      </p>

      <p className="px-6 pt-5 pb-6 text-center">
        <span className="block text-[clamp(4.5rem,9vw,7rem)] leading-[0.85] font-black uppercase [font-stretch:62%]">
          {first}
        </span>
        <span className="type-label mt-3 block text-[0.75rem] opacity-70">
          {identity.title}
        </span>
      </p>
    </div>
  )
}
