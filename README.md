# SOMA RESONANCE: 432 Hz Sound & Wellbeing Studio

A complete, production-ready music studio and web platform specializing in music tuned to **A4 = 432 Hz**, Gregorian-inspired vocal chanting, hand-hammered singing bowls, and psychoacoustic sleep soundscapes.

---

## 1. Mathematical & Physical Tuning Specifications
- **Concert Pitch Standard:** Modern music is tuned to $A_4 = 440.0\text{ Hz}$ (ISO 16 standard).
- **Verdi Scientific Standard:** $A_4 = 432.0\text{ Hz}$.
- **Pitch Ratio:** $\frac{432}{440} \approx 0.981818$
- **Exact Cents Difference:**
  $$\Delta \text{cents} = 1200 \times \log_2\left(\frac{432}{440}\right) \approx -31.76665\text{ cents}$$
- **Verification Guarantee:** Every master recording is verified using Fast Fourier Transform (FFT) and Constant-Q Transform (CQT) spectral analysis via `librosa` and `scipy`.

---

## 2. Platform Architecture & Features

### Audio & Wellbeing Pages:
- **Home (`/`)**: Hero experience, interactive Verdi vs ISO comparison mini-player, core pillars, and curated master tracks.
- **Listen to Music (`/listen`)**: Searchable master library with multi-parameter filtering (tuning, genre, duration, somatic focus) and 24-bit lossless download triggers.
- **432 Hz Tuning Deep Dive (`/432hz`)**: Live A/B listening lab comparing 432 Hz and 440 Hz triads, acoustic math formulas, and the crucial distinction between pure 432 Hz tones and 432 Hz tuned music.
- **Gregorian Chanting (`/chanting`)**: Sacred vocal drones in Just Intonation with 6-breaths-per-minute respiratory pacing.
- **Singing Bowls & Soundscapes (`/singing-bowls`)**: Tibetan seven-metal alloy physical modeling and pure quartz crystal acoustic sweeps.
- **Sleep Music (`/sleep`)**: Slow-wave delta journeys with 2.5 Hz binaural differentials and optimal pre-sleep listening protocols.
- **Meditation & Relaxation (`/meditation`)**: Earth sub-harmonics and organic biophony forest washes.
- **Science & Transparency (`/science`)**: Objective review of peer-reviewed clinical trials (Calamassi & Pomponi 2019, Dubost et al. 2021), study limitations, and clear demarcation from medical ultrasound.
- **Pricing & Membership (`/pricing`)**: Transparent subscription tiers (Free, Sanctuary Pro $9.99/mo or $89/yr, Master Patron $299 lifetime) with simulated Stripe checkout.
- **Member Dashboard (`/dashboard`)**: Saved favorites, listening history, account entitlement badges, and billing management.
- **FAQ & Contact (`/faq`)**: Evidence-grounded answers and direct sound engineering inquiry form.
- **Studio Engine & Admin (`/admin`)**: Interactive procedural 432 Hz audio synthesizer and Human-in-the-Loop (HITL) publishing gate with mandatory scientific ethics sign-off.

---

## 3. Environment Variables & Setup

Create a `.env.local` file inside `web-app/`:

```env
# Stripe Billing Configuration (Test Mode)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_placeholder_key
STRIPE_SECRET_KEY=sk_test_placeholder_key
STRIPE_WEBHOOK_SECRET=whsec_placeholder_secret

# Python Audio Engine Service
AUDIO_ENGINE_URL=http://127.0.0.1:8000
```

---

## 4. Running the Platform Locally

### 1. Launch the Python 432 Hz DSP Engine:
```powershell
# From project root
python audio-engine/server.py
# Runs FastAPI service on http://127.0.0.1:8000
```

### 2. Run the Audio Engine Unit Tests:
```powershell
python -m pytest audio-engine/test_engine.py
```

### 3. Launch Next.js Web Application:
```powershell
cd web-app
npm run dev
# Web app runs on http://localhost:3000 (or http://localhost:3001)
```

### 4. Build for Production:
```powershell
cd web-app
npm run build
```
