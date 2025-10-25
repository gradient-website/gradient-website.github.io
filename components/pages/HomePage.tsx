'use client';

import React from 'react';
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Globe2,
  GraduationCap,
  Sparkles,
  Trophy,
  Users2,
} from 'lucide-react';

import { Button } from '../ui/button';
import { MailingListForm } from '../MailingListForm';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const focusAreas = [
    {
      title: 'Olympiad Programs',
      description:
        'Rigorous problem-solving experiences across mathematics, computing, and the sciences designed with leading faculty.',
      icon: Trophy,
    },
    {
      title: 'JunctionX Hackathons',
      description:
        'Immersive collaboration sprints that blend academic research with industry mentorship to accelerate bold ideas.',
      icon: Sparkles,
    },
    {
      title: 'Partner Initiatives',
      description:
        'Co-created learning labs with universities, research centers, and technology partners that scale student impact.',
      icon: Building2,
    },
  ];

  const valueHighlights = [
    {
      title: 'Mentorship Network',
      description: 'World finalists, researchers, and alumni supporting each cohort with weekly clinics and feedback.',
      icon: Users2,
    },
    {
      title: 'Research-Backed Curriculum',
      description: 'Content authored with faculty advisors and constantly iterated through data-driven learning loops.',
      icon: GraduationCap,
    },
    {
      title: 'Global Community',
      description: 'Participants representing 15 countries collaborate through shared studios and cross-campus exchanges.',
      icon: Globe2,
    },
  ];

  const programs = [
    {
      title: 'Foundations Lab',
      description:
        'Semester-long seminar series with curated modules in mathematics, AI, and engineering fundamentals tailored for Olympiad prep.',
    },
    {
      title: 'Mentored Sprints',
      description:
        'Twelve-week project cycles pairing student teams with research mentors to prototype solutions ahead of JunctionX showcases.',
    },
    {
      title: 'JunctionX Studio',
      description:
        'Flagship festival hosted across global campuses with live challenges, career pathways, and partner-led immersions.',
    },
  ];

  const upcomingEvents = [
    {
      title: 'Gradient Olympiad Finals',
      date: 'June 21 – 23 • Hybrid',
      description: 'Three days of championship rounds, masterclasses, and keynotes from industry innovators.',
      focus: 'Olympiads',
    },
    {
      title: 'JunctionX Innovation Week',
      date: 'September 12 – 18 • Helsinki',
      description: 'Global hackathon with partner labs, venture studio sessions, and rapid prototyping support.',
      focus: 'JunctionX',
    },
    {
      title: 'Partner Strategy Forum',
      date: 'November 4 • Virtual',
      description: 'Leaders from universities and sponsors co-design next year’s learning agenda and collaboration roadmap.',
      focus: 'Partnerships',
    },
  ];

  const impactMetrics = [
    { label: 'Students coached', value: '5,000+' },
    { label: 'Partner institutions', value: '50+' },
    { label: 'Countries represented', value: '15' },
  ];

  const partnerBadges = [
    'University Alliances',
    'Research Labs',
    'STEM Foundations',
    'Innovation Councils',
    'Community Sponsors',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-80">
          <div className="absolute -top-20 -left-16 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-400/50 to-sky-500/70 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gradient-to-br from-sky-500/40 to-indigo-500/70 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white/80">
                Academic excellence, reimagined
              </div>
              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Fostering champions through collaborative discovery
              </h1>
              <p className="mt-6 text-lg text-white/70 sm:text-xl">
                Gradient connects ambitious students with mentors, researchers, and partners to co-create Olympiads and JunctionX experiences that accelerate learning and real-world impact.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button
                  onClick={() => onNavigate('about')}
                  className="bg-gradient-to-r from-emerald-400 via-sky-500 to-indigo-500 px-8 py-5 text-base font-medium text-white shadow-lg shadow-sky-500/30 transition hover:from-emerald-300 hover:via-sky-400 hover:to-indigo-500"
                >
                  Explore Gradient
                </Button>
                <Button
                  variant="outline"
                  onClick={() => onNavigate('events')}
                  className="border-white/30 bg-transparent px-8 py-5 text-base text-white transition hover:bg-white/10"
                >
                  See upcoming events
                </Button>
              </div>
              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                {impactMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-3xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-1 text-sm font-medium text-white/70">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-500">
                      <CalendarDays className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/70">Next highlight</p>
                      <p className="text-lg font-semibold text-white">Gradient Olympiad Finals</p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-white/60" />
                </div>
                <div className="mt-6 space-y-4 text-sm text-white/70">
                  <p>June 21 – 23 • Hybrid global campus</p>
                  <p>
                    Finalists from 30+ universities gather for masterclasses, collaborative labs, and live championship rounds with real-time feedback.
                  </p>
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">Featuring</p>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    <li>• Research design clinics with faculty mentors</li>
                    <li>• Cross-disciplinary challenge studios</li>
                    <li>• Partner-led career immersions</li>
                  </ul>
                </div>
                <div className="mt-8">
                  <MailingListForm variant="hero" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Where ambition meets structure</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our programs blend competitive rigor with collaborative mentorship to unlock new levels of academic discovery for every participant.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {focusAreas.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-500 text-white shadow-lg shadow-emerald-400/30">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{title}</h3>
                <p className="mt-3 text-sm text-gray-600">{description}</p>
                <div className="mt-6 flex items-center text-sm font-medium text-sky-600">
                  Discover more
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Signature learning journeys</h2>
              <p className="mt-4 text-lg text-gray-600">
                Gradient pathways guide teams from foundational mastery through venture-scale implementation, ensuring each milestone is supported by experts and peers.
              </p>
              <div className="mt-8 space-y-4">
                {valueHighlights.map(({ title, description, icon: Icon }) => (
                  <div key={title} className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50/80 p-5">
                    <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-sky-500 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                      <p className="mt-2 text-sm text-gray-600">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {programs.map((program, index) => (
                <div
                  key={program.title}
                  className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-sky-50 p-8 shadow-sm"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-200/70 to-sky-200/80 blur-2xl" />
                  <div className="relative z-10">
                    <div className="inline-flex items-center rounded-full bg-slate-900/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-900/70">
                      Module {index + 1}
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-gray-900">{program.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">Upcoming highlights</h2>
              <p className="mt-3 max-w-2xl text-base text-white/70">
                Dive into the next chapters of Gradient—from intensive Olympiad finals to JunctionX festivals and strategic partner forums.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => onNavigate('events')}
              className="border-white/30 bg-white/10 px-6 py-3 text-white transition hover:bg-white/20"
            >
              View the full calendar
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8">
                <div>
                  <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">
                    {event.focus}
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{event.title}</h3>
                  <p className="mt-2 text-sm font-medium text-white/70">{event.date}</p>
                  <p className="mt-4 text-sm text-white/70">{event.description}</p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => onNavigate('events')}
                  className="mt-8 border-white/30 bg-transparent text-white hover:bg-white/10"
                >
                  Reserve a spot
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Impact that scales with every cohort</h2>
              <p className="mt-4 text-lg text-gray-600">
                Gradient alumni lead research labs, launch ventures, and mentor the next generation. Our growing ecosystem ensures every participant has a pathway from curiosity to lasting change.
              </p>
              <Button
                onClick={() => onNavigate('partners')}
                className="mt-8 bg-gradient-to-r from-emerald-400 via-sky-500 to-indigo-500 px-8 py-4 text-white shadow-lg shadow-sky-500/30 hover:from-emerald-300 hover:via-sky-400 hover:to-indigo-500"
              >
                Explore our partnerships
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {impactMetrics.map((metric) => (
                <div key={metric.label} className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
                  <p className="text-4xl font-semibold text-slate-900">{metric.value}</p>
                  <p className="mt-2 text-sm font-medium text-gray-600">{metric.label}</p>
                </div>
              ))}
              <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
                <p className="text-4xl font-semibold text-slate-900">92%</p>
                <p className="mt-2 text-sm font-medium text-gray-600">Return as mentors after graduating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner badges */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">Trusted collaborators</p>
            <h2 className="mt-4 text-2xl font-semibold text-gray-900">A network of academic and industry pioneers</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {partnerBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-3 rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-sm font-medium text-gray-700"
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-br from-emerald-400 to-sky-500" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
        <div className="absolute inset-0 opacity-80">
          <div className="absolute -bottom-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-400/50 to-sky-500/70 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold sm:text-4xl">Ready to shape the future of competitive learning?</h2>
          <p className="mt-4 text-lg text-white/70">
            Join our mailing list for early access to Olympiad tracks, JunctionX studio updates, and collaboration opportunities with our partner network.
          </p>
          <div className="mt-8">
            <MailingListForm />
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-white/60">
            <button
              onClick={() => onNavigate('team')}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"
            >
              Meet the team
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"
            >
              Start a partnership
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}