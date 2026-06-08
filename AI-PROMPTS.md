# MORVA — AI Image & Video Prompts

Use these in **Midjourney v6 / Niji / Flux / DALL·E** for stills, and **Runway Gen-3 / Pika / Kling / Luma Dream Machine** for video.
All prompts are tuned for the MORVA brand: **dark, gold, editorial, cinematic, luxury, hospitality (restaurants & cafés)**.

---

## Reusable style tokens

Append (or weight) to any prompt for brand consistency:

```
cinematic luxury restaurant photography, dark moody atmosphere, brushed gold accents,
soft warm key light, deep blacks, shallow depth of field, 35mm film grain, editorial
composition, negative space, hasselblad medium format, dolby vision color grade,
no text, no logos, no people unless specified --ar 16:9 --style raw --v 6
```

For Arabic / MENA context, add: `Levantine ambience, Amman rooftop, arabesque
mashrabiya screens, oud-warm tones, hand-thrown ceramics`.

---

## STILL IMAGES (for the Featured Work & Portfolio cards, hero backgrounds, About)

### 1. Hero backdrop — abstract gold orb
```
abstract liquid molten gold sphere, slow rotating, on pure black background,
volumetric haze, soft specular highlight from upper left, faint film grain,
luxury editorial, hyper-detailed, octane render, 8k --ar 16:9 --style raw --v 6
```

### 2. Restaurant project card — "Tannour" hero shot
```
modern Levantine restaurant interior at golden hour, warm lantern light through
mashrabiya screens, dark walnut tables set with brass tableware, hand-rolled
flatbread on a stone slab, soft smoke rising, depth of field, editorial food
magazine cover, cinematic, --ar 4:3 --style raw --v 6
```

### 3. Specialty coffee café — "Bayt al-Bunn"
```
specialty coffee roastery in Amman, brass espresso machine reflecting warm
amber light, a barista's hand pouring latte art into a matte black ceramic
cup, single-origin coffee beans scattered on burlap, dark moody background,
shallow focus, editorial, --ar 4:3 --style raw --v 6
```

### 4. Rooftop lounge — "Layali"
```
panoramic Amman rooftop lounge at blue hour, brass pendant lights, low velvet
seating, city lights bokeh below, two flutes of champagne on a marble table,
gold cocktail garnish, atmospheric, cinematic --ar 4:3 --style raw --v 6
```

### 5. Dessert café — "Karaz"
```
single piece of luxury Levantine dessert (kunafa with rose petals and crushed
pistachio), top-down on a black slate, gold leaf accent, single warm spotlight,
dramatic shadows, food-jewelry photography, hyper-detailed, --ar 4:3 --style raw --v 6
```

### 6. Seafood waterfront — "Marsa Aqaba"
```
fine dining seafood restaurant on the Red Sea waterfront at sunset, dark wood
deck, gold-rimmed plates, fresh oysters on crushed ice, warm sun reflecting
on calm water in background, lens flare, editorial luxury hospitality
photography, --ar 4:3 --style raw --v 6
```

### 7. Café chain — "Saha"
```
sleek modern café interior in Amman, terrazzo floor, matte black counter,
soft pendant lights, a single matcha latte in a hand-thrown ceramic cup,
minimal styling, mid-afternoon warm light through arched window, editorial,
--ar 4:3 --style raw --v 6
```

### 8. About — team / studio atmosphere
```
minimalist design studio interior at night, dark walnut desks, warm amber
desk lamps, large window with Amman city lights in background, open
notebooks with hand-drawn UI sketches, a single brass MacBook stand,
editorial workspace photography, no faces visible, --ar 16:9 --style raw --v 6
```

### 9. AI Solutions — abstract intelligence
```
abstract gold particle field forming a calm flowing shape on pure black,
volumetric light, slow motion sense, soft glow, like a liquid neural
network, hyper-detailed, cinematic, octane render, --ar 16:9 --style raw --v 6
```

### 10. Hero — alternate (typography in space)
```
minimalist black void with floating brushed gold serif letter "M" suspended
in the center, soft volumetric haze, single warm rim light, luxury brand
photography, editorial, ultra-detailed, --ar 16:9 --style raw --v 6
```

---

## VIDEO CLIPS (for hero, section backgrounds, transitions)

Use **Runway Gen-3** or **Kling 1.5 / Pika 1.5** for these. All 5–10 seconds, loopable.

### V1 — Hero: slowly rotating molten gold orb (loop)
```
A perfect liquid gold sphere slowly rotating in deep black space, soft
specular highlight, gentle volumetric haze, ultra slow motion, cinematic,
no camera move, ready to loop seamlessly, 5s
```

### V2 — Steam rising from a coffee cup (Bayt al-Bunn)
```
Macro of a black ceramic coffee cup on dark wood, soft amber light from
the left, slow curling steam rising and dissolving, shallow depth of
field, cinematic 24fps, 6s
```

### V3 — Wine being poured (Layali)
```
Slow motion red wine pouring into a crystal glass on a brass bar top,
warm pendant light bokeh in background, dramatic shadows, cinematic,
80fps captured, played at 24fps, 5s
```

### V4 — Gold leaf falling onto kunafa (Karaz)
```
Top-down macro shot of edible gold leaf drifting down onto a small
plate of kunafa with crushed pistachio and a rose petal, slow motion,
single warm spotlight, deep black background, 5s
```

### V5 — Calm sea at sunset (Marsa)
```
Slow cinematic dolly across the Red Sea at sunset, golden hour light
on calm rippled water, warm horizon line, no boats, no people,
loopable, 8s
```

### V6 — Cocktail being stirred (Layali alt)
```
Macro of a gold-rimmed crystal coupe, a brass bar spoon slowly
stirring an amber cocktail with a single ice sphere, depth of field,
warm key light, dark background, 5s
```

### V7 — Pages of an editorial book turning
```
Top-down view of a luxury hospitality magazine, warm desk lamp light,
hands (out of frame) slowly turning the page revealing a full-bleed
restaurant photo, cinematic, shallow DoF, 6s
```

### V8 — Particles forming the MORVA "M" (intro animation)
```
Hundreds of small gold particles drifting in deep black space, slowly
swirling and converging to form the letter "M" in a tall serif,
volumetric light, cinematic, 7s, ends frozen on the letter
```

### V9 — Slow push into a dim restaurant interior
```
A slow cinematic dolly push into a dimly lit Levantine restaurant,
warm lanterns, mashrabiya screens cast patterned shadows, a single
candle on a centre table, no people, 6s
```

### V10 — Abstract gold liquid forming a wave
```
Liquid brushed gold flowing across a black surface forming a slow
calm wave, then settling, ultra-slow motion, cinematic, ready to
loop, 8s
```

---

## How to use the videos on the site

Place exported MP4/WEBM files in `public/video/` and use them as a
section background like this:

```tsx
<video
  src="/video/hero-orb.webm"
  autoPlay
  muted
  loop
  playsInline
  poster="/video/hero-orb.jpg"
  className="absolute inset-0 h-full w-full object-cover"
/>
```

Targets:
- **Hero orb V1** → replace the CSS orb in `HeroCanvas.tsx`
- **V2/V3/V6** → background of `Testimonials.tsx` or `ContactCTA.tsx`
- **V5** → background of the Marsa case-study hero
- **V8** → splash intro animation (one-shot, on first load)

Keep each clip **under 2 MB** (use [Squoosh](https://squoosh.app) or `ffmpeg -crf 30 -vf "scale=1280:-2"`).

---

## Negative prompts (paste into Midjourney's `--no` field)

```
--no text, logos, watermarks, ugly hands, deformed, low quality, harsh flash,
crowded composition, modern instagram filter, oversaturated, hdr, neon,
purple, blue tint
```
