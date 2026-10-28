'use client';

import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  ShieldCheck,
  ShieldAlert,
  Activity,
  Heart,
  CheckCircle2,
  ExternalLink,
  Flame
} from 'lucide-react';

export default function SciencePage() {
  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono">
          <BookOpen className="w-3.5 h-3.5" />
          <span>EVIDENCE-BASED SCIENTIFIC INQUIRY</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white">
          The Science, Research & Limitations
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          An honest, uncompromised review of empirical studies regarding 432 Hz vs 440 Hz music, autonomic nervous system responses, acoustic entrainment, and medical boundaries.
        </p>
      </div>

      {/* Critical Medical Disclaimer Banner */}
      <div className="bg-gradient-to-r from-amber-950/40 via-red-950/20 to-transparent border-l-4 border-amber-500 p-6 rounded-r-2xl space-y-3 shadow-xl">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
          <ShieldAlert className="w-5 h-5 shrink-0" />
          <span>MANDATORY SCIENTIFIC ETHICS & MEDICAL DISCLAIMER</span>
        </div>
        <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
          <strong>Soma Resonance does not make unsubstantiated medical claims.</strong> We do not assert that 432 Hz music cures cancer, infections, skin diseases, or any clinical pathology. Listening to harmonious music promotes relaxation, helps reduce sympathetic arousal, and paces breathing. However, acoustic wellness is a supportive lifestyle modality and should never substitute for evidence-based medical diagnosis or clinical treatment.
        </p>
      </div>

      {/* Core Scientific Questions Grid */}
      <div className="space-y-8">
        
        {/* Study 1: Calamassi & Pomponi (2019) */}
        <section className="bg-[#10141B] rounded-3xl p-6 sm:p-8 border border-white/5 space-y-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <span className="text-xs font-mono text-[#D4AF37]">PEER-REVIEWED DOUBLE-BLIND TRIAL</span>
            <span className="text-xs text-gray-500 font-mono">Italy (2019)</span>
          </div>
          <h2 className="text-xl font-serif font-bold text-white">
            Music Tuned to 432 Hz vs 440 Hz for Perceived Anxiety & Hemodynamic Parameters
          </h2>
          <p className="text-xs text-gray-400">
            <strong>Authors:</strong> D. Calamassi, G. P. Pomponi | <em>Explore: The Journal of Science & Healing</em>
          </p>
          <div className="bg-[#0A0D10] p-4 rounded-xl border border-white/5 space-y-2 text-xs text-gray-300">
            <p>
              <strong>Study Design:</strong> Double-blind crossover pilot trial with 33 healthy volunteers listening to identically orchestrated music tracks tuned at either 440 Hz or 432 Hz.
            </p>
            <p>
              <strong>Findings:</strong> Listening to 432 Hz music was accompanied by a statistically significant, slight decrease in mean heart rate (-4.79 bpm vs -2.97 bpm for 440 Hz, p=0.05) and subtle reductions in systolic blood pressure. Participants reported higher perceived physical relaxation.
            </p>
            <p className="text-emerald-400">
              <strong>Objective Conclusion:</strong> 432 Hz tuned music appears to facilitate autonomic parasympathetic activation slightly more effectively than 440 Hz in acute settings.
            </p>
          </div>
        </section>

        {/* Study 2: Dubost et al. (2021) */}
        <section className="bg-[#10141B] rounded-3xl p-6 sm:p-8 border border-white/5 space-y-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <span className="text-xs font-mono text-emerald-400">CLINICAL ENDOSCOPY STUDY</span>
            <span className="text-xs text-gray-500 font-mono">France (2021)</span>
          </div>
          <h2 className="text-xl font-serif font-bold text-white">
            432 Hz Music in Perioperative Anxiety Reduction During Gastrointestinal Endoscopy
          </h2>
          <p className="text-xs text-gray-400">
            <strong>Authors:</strong> C. Dubost et al. | <em>Journal of Clinical Medicine</em>
          </p>
          <div className="bg-[#0A0D10] p-4 rounded-xl border border-white/5 space-y-2 text-xs text-gray-300">
            <p>
              <strong>Study Design:</strong> Randomized prospective study testing whether 432 Hz music reduced required propofol sedative dosages and patient anxiety during minor procedural interventions.
            </p>
            <p>
              <strong>Findings:</strong> Both 432 Hz and 440 Hz music substantially reduced patient distress compared to silence. While 432 Hz trended towards calmer respiratory profiles, differences in total anesthetic requirements did not reach high statistical significance across all endpoints.
            </p>
            <p className="text-amber-300">
              <strong>Objective Conclusion:</strong> Music itself is a potent calming agent; while 432 Hz was favored for subjective pleasantness, clinical sedatives cannot simply be replaced by frequency adjustments.
            </p>
          </div>
        </section>

        {/* Study 3: Auditory Acoustics vs Medical Ultrasound */}
        <section className="bg-[#10141B] rounded-3xl p-6 sm:p-8 border border-white/5 space-y-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <span className="text-xs font-mono text-purple-400">PHYSICAL ACOUSTICS</span>
            <span className="text-xs text-gray-500 font-mono">Acoustic Physics</span>
          </div>
          <h2 className="text-xl font-serif font-bold text-white">
            The Critical Difference Between Audible Sound Waves and Medical Ultrasound
          </h2>
          <div className="space-y-3 text-xs text-gray-300 leading-relaxed">
            <p>
              A widespread internet myth claims that playing 432 Hz or 528 Hz audio tracks through desktop speakers can "destroy cancer cells" or "repair DNA". This arises from a severe scientific misunderstanding of <strong>Focused Ultrasound (HIFU)</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#080B0E] p-4 rounded-xl border border-white/5 space-y-1">
                <span className="text-[#D4AF37] font-semibold block">Audible Sound (20 Hz - 20,000 Hz)</span>
                Acoustic pressure waves traveling through air. They stimulate the hair cells of the cochlea, which send electrical impulses via the vestibulocochlear nerve to the auditory cortex and limbic system. Benefits are psychoacoustic and neurological.
              </div>
              <div className="bg-[#080B0E] p-4 rounded-xl border border-white/5 space-y-1">
                <span className="text-purple-400 font-semibold block">Medical Ultrasound (1,000,000 Hz+)</span>
                Extremely high-frequency mechanical thermal ablation used in hospital oncology. Requires focused acoustic lenses and megawatt power densities directly coupled to tissue. It has zero relation to audible music.
              </div>
            </div>
          </div>
        </section>

        {/* Study 4: Limitations & Conflicts */}
        <section id="limitations" className="bg-[#10141B] rounded-3xl p-6 sm:p-8 border border-white/5 space-y-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <span className="text-xs font-mono text-rose-400">METHODOLOGICAL RIGOR</span>
            <span className="text-xs text-gray-500 font-mono">Scientific Humility</span>
          </div>
          <h2 className="text-xl font-serif font-bold text-white">
            Study Limitations & Unresolved Questions in Current Literature
          </h2>
          <ul className="space-y-2.5 text-xs text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Sample Sizes:</strong> Most published 432 Hz trials involve modest cohorts (30 to 100 subjects). Larger multi-center replication studies are necessary to establish generalized biomarkers.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Familiarity Bias:</strong> Listeners conditioned to western pop music may initially perceive 432 Hz as slightly "darker" or unfamiliar because it is 31.8 cents flatter than commercial broadcasts.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Composition vs Tuning:</strong> Musical tempo, rhythm, timbre, and melodic contour frequently exert a more pronounced effect on the nervous system than a 1.8% change in fundamental tuning alone.</span>
            </li>
          </ul>
        </section>

      </div>
    </main>
  );
}
