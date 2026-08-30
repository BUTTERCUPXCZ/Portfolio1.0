"""Prepares src/assets/portrait.jpg from a source photograph.

    npm run portrait -- src/assets/sssss.jpg

The published file is a square head-and-shoulders crop, converted to greyscale,
at 2x the largest size the rail renders it -- which is all a retina screen can
use. Full-size originals stay out of the bundle: nothing imports them, so Vite
never sees them.

Greyscale is baked in rather than applied as a CSS filter so the file is simply
what it is: it prints correctly, it needs no runtime work, and it cannot fall
out of step with the theme. The rest of the page is achromatic, and the photo
was the only chromatic thing on it.

CROP is in source-image pixels and is specific to the photograph named above.
Point this at a different photo and you will need to re-measure it.

Requires Pillow.
"""

import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "src/assets/portrait.jpg"

CROP = (200, 205, 770, 775)  # head, phone and shoulders; keeps the room out
SIZE = 480


def main(source):
    photo = ImageOps.exif_transpose(Image.open(source)).convert("RGB")
    photo = photo.crop(CROP).resize((SIZE, SIZE), Image.LANCZOS)
    photo = ImageOps.grayscale(photo).convert("RGB")
    photo.save(OUT, "JPEG", quality=86, optimize=True, progressive=True)
    print(f"portrait: {OUT.relative_to(ROOT)} — {OUT.stat().st_size // 1024} KB")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
