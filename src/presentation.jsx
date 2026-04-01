import { useEffect, useRef } from 'react';
import {
  Deck,
  Slide,
  Heading,
  Text,
  Box,
  FlexBox,
  Appear,
  fadeTransition,
} from 'spectacle';
import exampleWebsiteImg from './assets/example-website.jpg';
import exampleJohnVideo from './assets/example-john.mp4';
import ebookImg from './assets/ebook.png';
import ebookPdf from './assets/ebook.pdf?url';

// ─── Theme ────────────────────────────────────────────────────────────────────
const theme = {
  colors: {
    primary: '#f5f0e8',
    secondary: '#e8a030',
    tertiary: '#0d0c0b',
    quaternary: '#c45c2a',
    quinary: '#8b5cf6',
  },
  fonts: {
    header: "'Syne', sans-serif",
    text: "'Syne', sans-serif",
    monospace: "'JetBrains Mono', monospace",
  },
  fontSizes: {
    h1: '64px',
    h2: '52px',
    h3: '36px',
    text: '22px',
    monospace: '18px',
  },
};

const template = ({ slideNumber, numberOfSlides }) => (
  <>
    <Box position="absolute" bottom={0} left={0} right={0} height="3px"
      style={{ background: 'linear-gradient(90deg, #c45c2a, #e8a030, #8b5cf6)' }} />
    <Box
      position="absolute"
      bottom="12px"
      right="24px"
      style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: '11px',
        color: '#3a3530',
        letterSpacing: '0.1em',
      }}
    >
      {slideNumber} / {numberOfSlides}
    </Box>
  </>
);

// ─── Reusable Components ──────────────────────────────────────────────────────

function AutoPlayVideo({ src, style }) {
  const ref = useRef(null);
  useEffect(() => {
    const v = ref.current;
    if (v) v.play().catch(() => {});
  }, []);
  return <video ref={ref} src={src} loop muted playsInline style={style} />;
}

function SlideLabel({ children }) {
  return (
    <Box
      position="absolute"
      top="32px"
      right="40px"
      style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: '#e8a030',
        opacity: 0.7,
      }}
    >
      {children}
    </Box>
  );
}

function Tag({ children, color = '#e8a030' }) {
  return (
    <Box
      display="inline-block"
      paddingLeft="12px"
      paddingRight="12px"
      paddingTop="4px"
      paddingBottom="4px"
      margin="4px"
      style={{
        background: color + '18',
        border: `1px solid ${color}44`,
        borderRadius: '4px',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '14px',
        color: color,
        fontWeight: 500,
      }}
    >
      {children}
    </Box>
  );
}

function Bullet({ children, accent = false }) {
  return (
    <FlexBox alignItems="flex-start" marginBottom="18px">
      <Box
        style={{
          color: accent ? '#e8a030' : '#c45c2a',
          fontFamily: "'Syne', sans-serif",
          fontSize: '20px',
          marginRight: '14px',
          marginTop: '2px',
          flexShrink: 0,
        }}
      >
        {accent ? '◆' : '▸'}
      </Box>
      <Text
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '22px',
          color: '#f5f0e8',
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        {children}
      </Text>
    </FlexBox>
  );
}

function SectionHeading({ children }) {
  return (
    <Box marginBottom="48px">
      <Box
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#c45c2a',
          marginBottom: '12px',
        }}
      >
        ── ── ──
      </Box>
      <Heading
        fontSize="52px"
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontWeight: 400,
          color: '#f5f0e8',
          lineHeight: 1.1,
          margin: 0,
        }}
      >
        {children}
      </Heading>
    </Box>
  );
}

// ─── Slides ───────────────────────────────────────────────────────────────────

function TitleSlide() {
  return (
    <Slide backgroundColor="#0d0c0b">
      {/* Large decorative text */}
      <Box
        position="absolute"
        top="-20px"
        right="-30px"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '280px',
          fontWeight: 800,
          color: '#1a1814',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        CC
      </Box>

      <FlexBox flexDirection="column" alignItems="flex-start" justifyContent="center" height="100%">
        <Box marginBottom="16px">
          <Tag color="#e8a030">Workshop</Tag>
          <Tag color="#c45c2a">2026</Tag>
        </Box>

        <Heading
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: '80px',
            fontWeight: 400,
            color: '#f5f0e8',
            lineHeight: 1.05,
            margin: '0 0 12px',
            maxWidth: '800px',
            fontStyle: 'italic',
          }}
        >
          Building Websites
        </Heading>
        <Heading
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '80px',
            fontWeight: 800,
            color: '#e8a030',
            lineHeight: 1.05,
            margin: '0 0 40px',
          }}
        >
          with Claude Code
        </Heading>

        <Box
          style={{
            width: '64px',
            height: '3px',
            background: 'linear-gradient(90deg, #c45c2a, #e8a030)',
            marginBottom: '32px',
          }}
        />

        <Text
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '20px',
            color: '#9d9488',
            letterSpacing: '0.05em',
          }}
        >
          From prompt to production — faster than you think
        </Text>
      </FlexBox>
    </Slide>
  );
}

function WhatIsSlide() {
  return (
    <Slide backgroundColor="#0d0c0b">
      <SlideLabel>01 / Overview</SlideLabel>
      <FlexBox height="100%" alignItems="center">
        {/* Left column */}
        <Box flex="1" paddingRight="60px">
          <SectionHeading>What is Claude Code?</SectionHeading>
          <Appear>
            <Bullet>Agentic CLI tool built by Anthropic</Bullet>
          </Appear>
          <Appear>
            <Bullet>Runs directly in your terminal — no IDE required</Bullet>
          </Appear>
          <Appear>
            <Bullet>Reads, writes, and edits files across your whole project</Bullet>
          </Appear>
          <Appear>
            <Bullet>Executes shell commands, runs tests, installs packages</Bullet>
          </Appear>
          <Appear>
            <Bullet>Understands your codebase as a whole — not just snippets</Bullet>
          </Appear>
        </Box>

        {/* Right column — terminal mockup */}
        <Appear>
          <Box
            flex="1"
            style={{
              background: '#0f0e0d',
              border: '1px solid #2a2520',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            {/* Terminal chrome */}
            <FlexBox
              alignItems="center"
              padding="12px 16px"
              style={{ background: '#1a1814', borderBottom: '1px solid #2a2520' }}
            >
              <Box style={{ width: 12, height: 12, borderRadius: '50%', background: '#c45c2a', marginRight: 8 }} />
              <Box style={{ width: 12, height: 12, borderRadius: '50%', background: '#e8a030', marginRight: 8 }} />
              <Box style={{ width: 12, height: 12, borderRadius: '50%', background: '#2a2520' }} />
              <Text style={{ fontFamily: 'JetBrains Mono', fontSize: 12, color: '#5a5248', marginLeft: 'auto', margin: '0 0 0 auto' }}>
                ~ terminal
              </Text>
            </FlexBox>
            <Box padding="24px">
              <Text style={{ fontFamily: 'JetBrains Mono', fontSize: 15, color: '#5a9e6f', margin: '0 0 8px' }}>
                $ claude
              </Text>
              <Text style={{ fontFamily: 'JetBrains Mono', fontSize: 15, color: '#9d9488', margin: '0 0 16px' }}>
                ✓ Claude Code v1.x — ready
              </Text>
              <Text style={{ fontFamily: 'JetBrains Mono', fontSize: 15, color: '#e8a030', margin: '0 0 8px' }}>
                &gt; Build me a landing page for a SaaS product
              </Text>
              <Text style={{ fontFamily: 'JetBrains Mono', fontSize: 15, color: '#f5f0e8', margin: '0 0 4px' }}>
                ● Creating index.html...
              </Text>
              <Text style={{ fontFamily: 'JetBrains Mono', fontSize: 15, color: '#f5f0e8', margin: '0 0 4px' }}>
                ● Writing styles.css...
              </Text>
              <Text style={{ fontFamily: 'JetBrains Mono', fontSize: 15, color: '#f5f0e8', margin: '0 0 4px' }}>
                ● Adding animations...
              </Text>
              <Text style={{ fontFamily: 'JetBrains Mono', fontSize: 15, color: '#5a9e6f', margin: '0' }}>
                ✓ Done in 12s
              </Text>
            </Box>
          </Box>
        </Appear>
      </FlexBox>
    </Slide>
  );
}

function CapabilitiesSlide() {
  const caps = [
    { icon: '📝', label: 'File Editing', desc: 'Create, read, modify any file in your project', color: '#e8a030' },
    { icon: '⚡', label: 'Shell Commands', desc: 'Run npm, git, curl — any terminal command', color: '#c45c2a' },
    { icon: '🔍', label: 'Web Search', desc: 'Look up docs, Stack Overflow, MDN in real time', color: '#8b5cf6' },
    { icon: '🔀', label: 'Multi-file Refactor', desc: 'Rename, restructure, move code across files', color: '#5a9e6f' },
    { icon: '🧪', label: 'Test & Debug', desc: 'Run tests, read errors, fix and retry', color: '#e8a030' },
    { icon: '🔄', label: 'Git Integration', desc: 'Commit, diff, branch — full git workflow', color: '#c45c2a' },
  ];

  return (
    <Slide backgroundColor="#0d0c0b">
      <SlideLabel>02 / Capabilities</SlideLabel>
      <Box paddingTop="20px">
        <SectionHeading>What It Can Do</SectionHeading>
        <Box
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
        >
          {caps.map((cap, i) => (
            <Appear key={cap.label}>
              <Box
                padding="24px"
                style={{
                  background: '#111009',
                  border: `1px solid ${cap.color}30`,
                  borderTop: `2px solid ${cap.color}`,
                  borderRadius: '6px',
                }}
              >
                <Text style={{ fontSize: '32px', margin: '0 0 10px', lineHeight: 1 }}>{cap.icon}</Text>
                <Text
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: cap.color,
                    margin: '0 0 6px',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  {cap.label}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '15px',
                    color: '#9d9488',
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {cap.desc}
                </Text>
              </Box>
            </Appear>
          ))}
        </Box>
      </Box>
    </Slide>
  );
}

function WorkflowSlide() {
  return (
    <Slide backgroundColor="#0d0c0b">
      <SlideLabel>03 / Workflow</SlideLabel>
      <FlexBox height="100%" flexDirection="column" justifyContent="center">
        <SectionHeading>The Dev Loop</SectionHeading>

        <FlexBox alignItems="stretch" justifyContent="space-between" marginTop="16px">
          {[
            {
              step: '01',
              verb: 'Describe',
              detail: 'Tell Claude what you want in plain English. Be specific about design, behavior, and constraints.',
              color: '#e8a030',
            },
            {
              step: '02',
              verb: 'Generate',
              detail: 'Claude reads your project, writes the code, runs commands, and self-corrects errors.',
              color: '#c45c2a',
            },
            {
              step: '03',
              verb: 'Review',
              detail: 'Check the diff. Accept, refine, or redirect. You stay in control of every change.',
              color: '#8b5cf6',
            },
            {
              step: '04',
              verb: 'Iterate',
              detail: 'Keep the conversation going. Refine, extend, fix — Claude remembers the full context.',
              color: '#5a9e6f',
            },
          ].map((item, i) => (
            <Appear key={item.step}>
              <Box
                flex="1"
                margin="0 8px"
                padding="28px 20px"
                style={{
                  background: '#111009',
                  borderBottom: `3px solid ${item.color}`,
                  borderRadius: '6px 6px 0 0',
                  position: 'relative',
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '48px',
                    fontWeight: 800,
                    color: item.color + '20',
                    position: 'absolute',
                    top: '12px',
                    right: '16px',
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  {item.step}
                </Text>
                <Text
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: '32px',
                    fontStyle: 'italic',
                    color: item.color,
                    margin: '0 0 12px',
                  }}
                >
                  {item.verb}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '15px',
                    color: '#9d9488',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.detail}
                </Text>
              </Box>
            </Appear>
          ))}
        </FlexBox>
      </FlexBox>
    </Slide>
  );
}

const claudeMdCode = `# My Project

## Overview
E-commerce site built with Next.js + Tailwind.

## Tech Stack
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS + shadcn/ui
- Database: Supabase (PostgreSQL)
- Auth: NextAuth.js

## Conventions
- Components go in /components, named PascalCase
- Use server components by default
- All API routes under /app/api/

## Do NOT modify
- /lib/auth.ts — talk to me first
- Database migrations — always ask`;

function BestPracticesSlide() {
  return (
    <Slide backgroundColor="#0d0c0b">
      <SlideLabel>04 / Best Practices</SlideLabel>
      <FlexBox height="100%" alignItems="center">
        <Box flex="1.1" paddingRight="48px">
          <SectionHeading>Working Well with Claude</SectionHeading>
          <Appear>
            <Bullet accent>Write a CLAUDE.md file — it's your AI briefing doc</Bullet>
          </Appear>
          <Appear>
            <Bullet>Be specific: stack, conventions, what to avoid</Bullet>
          </Appear>
          <Appear>
            <Bullet accent>Review every diff before accepting</Bullet>
          </Appear>
          <Appear>
            <Bullet>Use git — commit before big changes so you can revert</Bullet>
          </Appear>
          <Appear>
            <Bullet accent>Break big tasks into steps — Claude handles scope well</Bullet>
          </Appear>
          <Appear>
            <Bullet>Correct mistakes in plain English — no need to re-explain context</Bullet>
          </Appear>
        </Box>

        <Appear>
          <Box flex="1">
            <Text
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#e8a030',
                marginBottom: '10px',
                margin: '0 0 10px',
              }}
            >
              CLAUDE.md example
            </Text>
            <Box
              style={{
                background: '#0a0908',
                border: '1px solid #2a2520',
                borderRadius: '6px',
                overflow: 'hidden',
              }}
            >
              <Box
                padding="10px 16px"
                style={{ background: '#1a1814', borderBottom: '1px solid #2a2520' }}
              >
                <Text style={{ fontFamily: 'JetBrains Mono', fontSize: 13, color: '#5a5248', margin: 0 }}>
                  CLAUDE.md
                </Text>
              </Box>
              <Box padding="20px">
                <pre
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '13px',
                    color: '#c8c0b4',
                    lineHeight: 1.7,
                    margin: 0,
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {claudeMdCode}
                </pre>
              </Box>
            </Box>
          </Box>
        </Appear>
      </FlexBox>
    </Slide>
  );
}

const beforeCode = `<!-- Before: hand-coded -->
<section style="padding:20px">
  <h2 style="color:#333;font-size:24px">
    Our Features
  </h2>
  <div style="display:flex">
    <div style="padding:10px;border:1px solid #ccc">
      <h3>Fast</h3>
      <p>Really fast.</p>
    </div>
  </div>
</section>`;

const afterCode = `<!-- After: Claude-generated -->
<section class="py-24 bg-slate-950">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-4xl font-bold text-white
      tracking-tight mb-16 text-center">
      Our Features
    </h2>
    <div class="grid grid-cols-3 gap-8">
      <div class="group p-8 rounded-2xl
        bg-slate-900 border border-slate-800
        hover:border-indigo-500 transition-all
        hover:-translate-y-1 duration-300">
        <h3 class="text-xl font-semibold
          text-white mb-3">Fast</h3>
        <p class="text-slate-400 leading-relaxed">
          Lightning-fast performance.
        </p>
      </div>
    </div>
  </div>
</section>`;

function ExamplesSlide() {
  return (
    <Slide backgroundColor="#0d0c0b">
      <SlideLabel>05 / Examples</SlideLabel>
      <Box paddingTop="10px">
        <SectionHeading>Before & After</SectionHeading>
        <FlexBox alignItems="flex-start">
          <Box flex="1" marginRight="16px">
            <Box
              padding="8px 16px"
              marginBottom="8px"
              style={{
                background: '#c45c2a18',
                border: '1px solid #c45c2a44',
                borderRadius: '4px',
                display: 'inline-block',
              }}
            >
              <Text style={{ fontFamily: 'Syne, sans-serif', fontSize: 13, fontWeight: 700, color: '#c45c2a', margin: 0, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Before — hand-coded
              </Text>
            </Box>
            <Box
              style={{
                background: '#0a0908',
                border: '1px solid #2a2520',
                borderLeft: '3px solid #c45c2a',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <pre
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '13px',
                  color: '#9d9488',
                  lineHeight: 1.7,
                  margin: 0,
                  padding: '20px',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {beforeCode}
              </pre>
            </Box>
          </Box>

          <Box flex="1">
            <Appear>
              <Box>
                <Box
                  padding="8px 16px"
                  marginBottom="8px"
                  style={{
                    background: '#5a9e6f18',
                    border: '1px solid #5a9e6f44',
                    borderRadius: '4px',
                    display: 'inline-block',
                  }}
                >
                  <Text style={{ fontFamily: 'Syne, sans-serif', fontSize: 13, fontWeight: 700, color: '#5a9e6f', margin: 0, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    After — Claude-generated
                  </Text>
                </Box>
                <Box
                  style={{
                    background: '#0a0908',
                    border: '1px solid #2a2520',
                    borderLeft: '3px solid #5a9e6f',
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}
                >
                  <pre
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '13px',
                      color: '#c8c0b4',
                      lineHeight: 1.7,
                      margin: 0,
                      padding: '20px',
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {afterCode}
                  </pre>
                </Box>
              </Box>
            </Appear>
          </Box>
        </FlexBox>

        <Appear>
          <Box marginTop="20px" padding="16px 24px" style={{ background: '#e8a03012', border: '1px solid #e8a03030', borderRadius: '6px' }}>
            <Text style={{ fontFamily: 'Syne, sans-serif', fontSize: 18, color: '#e8a030', margin: 0 }}>
              Prompt: <span style={{ color: '#f5f0e8', fontStyle: 'italic' }}>"Rewrite this features section with modern Tailwind — dark theme, hover animations, clean grid layout"</span>
            </Text>
          </Box>
        </Appear>
      </Box>
    </Slide>
  );
}

function TipsSlide() {
  const tips = [
    {
      category: 'Slash Commands',
      color: '#e8a030',
      items: [
        { cmd: '/clear', desc: 'Reset conversation context' },
        { cmd: '/compact', desc: 'Summarize to save tokens' },
        { cmd: '/review', desc: 'Review current changes' },
      ],
    },
    {
      category: 'Git Integration',
      color: '#c45c2a',
      items: [
        { cmd: 'commit changes', desc: 'Claude writes the commit message' },
        { cmd: 'show me the diff', desc: 'Explain what changed and why' },
        { cmd: 'undo that', desc: 'Revert to last commit safely' },
      ],
    },
    {
      category: 'Power Moves',
      color: '#8b5cf6',
      items: [
        { cmd: 'hooks', desc: 'Run scripts before/after Claude acts' },
        { cmd: 'MCP servers', desc: 'Connect to Figma, Linear, databases' },
        { cmd: '--dangerously-skip-permissions', desc: 'Fully autonomous mode' },
      ],
    },
  ];

  return (
    <Slide backgroundColor="#0d0c0b">
      <SlideLabel>06 / Tips & Tricks</SlideLabel>
      <Box paddingTop="10px">
        <SectionHeading>Go Further</SectionHeading>
        <FlexBox alignItems="flex-start">
          {tips.map((group) => (
            <Box key={group.category} flex="1" margin="0 10px">
              <Text
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: group.color,
                  marginBottom: '16px',
                  margin: '0 0 16px',
                  paddingBottom: '8px',
                  borderBottom: `1px solid ${group.color}40`,
                }}
              >
                {group.category}
              </Text>
              {group.items.map((item) => (
                <Appear key={item.cmd}>
                  <Box
                    marginBottom="12px"
                    padding="14px 16px"
                    style={{
                      background: '#111009',
                      border: '1px solid #2a2520',
                      borderRadius: '6px',
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '14px',
                        color: group.color,
                        margin: '0 0 4px',
                      }}
                    >
                      {item.cmd}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Syne, sans-serif',
                        fontSize: '14px',
                        color: '#7a7068',
                        margin: 0,
                        lineHeight: 1.4,
                      }}
                    >
                      {item.desc}
                    </Text>
                  </Box>
                </Appear>
              ))}
            </Box>
          ))}
        </FlexBox>
      </Box>
    </Slide>
  );
}

function ImpeccableIntroSlide() {
  return (
    <Slide backgroundColor="#0d0c0b">
      {/* Large decorative background text */}
      <Box
        position="absolute"
        bottom="-40px"
        right="-20px"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '220px',
          fontWeight: 800,
          color: '#8b5cf608',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.04em',
        }}
      >
        IMP
      </Box>

      <SlideLabel>07 / Impeccable</SlideLabel>
      <FlexBox height="100%" alignItems="center">
        {/* Left column */}
        <Box flex="1.1" paddingRight="60px">
          <SectionHeading>Build with Impeccable</SectionHeading>
          <Appear>
            <Bullet accent>A curated set of Claude Code skills for frontend design quality</Bullet>
          </Appear>
          <Appear>
            <Bullet>Type <span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#8b5cf6', fontSize: '18px' }}>/skill-name</span> — Claude becomes a design specialist</Bullet>
          </Appear>
          <Appear>
            <Bullet accent>Each skill has deep domain knowledge baked in</Bullet>
          </Appear>
          <Appear>
            <Bullet>Works on any stack — React, Vue, plain HTML, Tailwind, CSS…</Bullet>
          </Appear>
          <Appear>
            <Bullet accent>Stack them: create → refine → polish → ship</Bullet>
          </Appear>
        </Box>

        {/* Right column — skill invocation example */}
        <Appear>
          <Box flex="1">
            <Box
              style={{
                background: '#0f0e0d',
                border: '1px solid #8b5cf630',
                borderTop: '2px solid #8b5cf6',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <FlexBox
                alignItems="center"
                padding="12px 16px"
                style={{ background: '#1a1814', borderBottom: '1px solid #2a2520' }}
              >
                <Box style={{ width: 10, height: 10, borderRadius: '50%', background: '#c45c2a', marginRight: 8 }} />
                <Box style={{ width: 10, height: 10, borderRadius: '50%', background: '#e8a030', marginRight: 8 }} />
                <Box style={{ width: 10, height: 10, borderRadius: '50%', background: '#2a2520' }} />
                <Text style={{ fontFamily: 'JetBrains Mono', fontSize: 12, color: '#5a5248', margin: '0 0 0 auto' }}>
                  ~ my-project
                </Text>
              </FlexBox>
              <Box padding="24px">
                <Text style={{ fontFamily: 'JetBrains Mono', fontSize: 14, color: '#5a9e6f', margin: '0 0 8px' }}>
                  $ claude
                </Text>
                <Text style={{ fontFamily: 'JetBrains Mono', fontSize: 14, color: '#e8a030', margin: '0 0 16px' }}>
                  &gt; /frontend-design
                </Text>
                <Text style={{ fontFamily: 'JetBrains Mono', fontSize: 13, color: '#9d9488', margin: '0 0 16px', lineHeight: 1.6 }}>
                  ✓ Design specialist mode active<br />
                  Analyzing your project…
                </Text>
                <Text style={{ fontFamily: 'JetBrains Mono', fontSize: 14, color: '#e8a030', margin: '0 0 16px' }}>
                  &gt; /animate
                </Text>
                <Text style={{ fontFamily: 'JetBrains Mono', fontSize: 13, color: '#9d9488', margin: '0 0 16px', lineHeight: 1.6 }}>
                  ✓ Reviewing interactions…<br />
                  Adding spring physics to modal…
                </Text>
                <Text style={{ fontFamily: 'JetBrains Mono', fontSize: 14, color: '#e8a030', margin: '0 0 16px' }}>
                  &gt; /polish
                </Text>
                <Text style={{ fontFamily: 'JetBrains Mono', fontSize: 13, color: '#5a9e6f', margin: 0, lineHeight: 1.6 }}>
                  ✓ Alignment, spacing & details fixed<br />
                  Ready to ship.
                </Text>
              </Box>
            </Box>
          </Box>
        </Appear>
      </FlexBox>
    </Slide>
  );
}

function ImpeccableExampleSlide() {
  return (
    <Slide backgroundColor="#0d0c0b">
      <SlideLabel>07 / Impeccable</SlideLabel>
      <FlexBox height="100%" alignItems="center">
        {/* Left column */}
        <Box flex="1" paddingRight="48px">
          <SectionHeading>Live Example</SectionHeading>
          <Appear>
            <Bullet accent>Built entirely with Claude Code</Bullet>
          </Appear>
          <Appear>
            <Bullet>Started from a plain prompt — no design file</Bullet>
          </Appear>
          <Appear>
            <Bullet accent><span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#8b5cf6', fontSize: '18px' }}>/frontend-design</span> for the initial build</Bullet>
          </Appear>
          <Appear>
            <Bullet><span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#e8a030', fontSize: '18px' }}>/animate</span> for micro-interactions</Bullet>
          </Appear>
          <Appear>
            <Bullet accent><span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#5a9e6f', fontSize: '18px' }}>/polish</span> for the final details</Bullet>
          </Appear>
        </Box>

        {/* Right column — screenshot */}
        <Appear>
          <Box
            flex="1.4"
            style={{
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid #2a2520',
              boxShadow: '0 24px 64px #00000080',
            }}
          >
            {/* Browser chrome */}
            <FlexBox
              alignItems="center"
              padding="10px 16px"
              style={{ background: '#1a1814', borderBottom: '1px solid #2a2520' }}
            >
              <Box style={{ width: 10, height: 10, borderRadius: '50%', background: '#c45c2a', marginRight: 7 }} />
              <Box style={{ width: 10, height: 10, borderRadius: '50%', background: '#e8a030', marginRight: 7 }} />
              <Box style={{ width: 10, height: 10, borderRadius: '50%', background: '#2a2520', marginRight: 16 }} />
              <Box
                flex="1"
                padding="4px 12px"
                style={{
                  background: '#0d0c0b',
                  borderRadius: '4px',
                  border: '1px solid #2a2520',
                }}
              >
                <Text style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#5a5248', margin: 0 }}>
                  tontonfrancky.com
                </Text>
              </Box>
            </FlexBox>
            <img
              src={exampleWebsiteImg}
              alt="Example website built with Claude Code and Impeccable"
              style={{ display: 'block', width: '100%' }}
            />
          </Box>
        </Appear>
      </FlexBox>
    </Slide>
  );
}

function ImpeccableExampleJohnSlide() {
  return (
    <Slide backgroundColor="#0d0c0b">
      <SlideLabel>07 / Impeccable</SlideLabel>
      <FlexBox height="100%" alignItems="center">
        {/* Left column */}
        <Box flex="1" paddingRight="48px">
          <SectionHeading>Live Example</SectionHeading>
          <Box marginBottom="24px">
            <Text
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '20px',
                color: '#8b5cf6',
                margin: '0 0 4px',
              }}
            >
              johntran-code.com
            </Text>
            <Text style={{ fontFamily: 'Syne, sans-serif', fontSize: '15px', color: '#5a5248', margin: 0 }}>
              Personal site — built with Claude Code &amp; Impeccable
            </Text>
          </Box>
          <Appear>
            <Bullet accent>Zero boilerplate — described in plain English</Bullet>
          </Appear>
          <Appear>
            <Bullet><span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#8b5cf6', fontSize: '18px' }}>/frontend-design</span> for the initial build</Bullet>
          </Appear>
          <Appear>
            <Bullet accent><span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#e8a030', fontSize: '18px' }}>/animate</span> &amp; <span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#e8a030', fontSize: '18px' }}>/delight</span> for interactions</Bullet>
          </Appear>
          <Appear>
            <Bullet><span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#5a9e6f', fontSize: '18px' }}>/polish</span> for the final details</Bullet>
          </Appear>
        </Box>

        {/* Right column — video */}
        <Appear>
          <Box
            flex="1.4"
            style={{
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid #2a2520',
              boxShadow: '0 24px 64px #00000080',
            }}
          >
            {/* Browser chrome */}
            <FlexBox
              alignItems="center"
              padding="10px 16px"
              style={{ background: '#1a1814', borderBottom: '1px solid #2a2520' }}
            >
              <Box style={{ width: 10, height: 10, borderRadius: '50%', background: '#c45c2a', marginRight: 7 }} />
              <Box style={{ width: 10, height: 10, borderRadius: '50%', background: '#e8a030', marginRight: 7 }} />
              <Box style={{ width: 10, height: 10, borderRadius: '50%', background: '#2a2520', marginRight: 16 }} />
              <Box
                flex="1"
                padding="4px 12px"
                style={{
                  background: '#0d0c0b',
                  borderRadius: '4px',
                  border: '1px solid #2a2520',
                }}
              >
                <Text style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#5a5248', margin: 0 }}>
                  johntran-code.com
                </Text>
              </Box>
            </FlexBox>
            <AutoPlayVideo src={exampleJohnVideo} style={{ display: 'block', width: '100%' }} />
          </Box>
        </Appear>
      </FlexBox>
    </Slide>
  );
}

function ImpeccableSkillsSlide() {
  const skillGroups = [
    {
      label: 'Create',
      color: '#8b5cf6',
      skills: [
        { cmd: '/frontend-design', desc: 'Production-grade UI from scratch — distinctive, not generic' },
        { cmd: '/overdrive', desc: 'Technically ambitious effects: shaders, physics, scroll-driven reveals' },
      ],
    },
    {
      label: 'Refine',
      color: '#e8a030',
      skills: [
        { cmd: '/animate', desc: 'Purposeful motion & micro-interactions that improve usability' },
        { cmd: '/delight', desc: 'Moments of joy and personality that make UIs memorable' },
        { cmd: '/bolder', desc: 'Amplify safe designs — more impact, same usability' },
      ],
    },
    {
      label: 'Fix & Polish',
      color: '#5a9e6f',
      skills: [
        { cmd: '/polish', desc: 'Final pass: alignment, spacing, consistency before shipping' },
        { cmd: '/audit', desc: 'Accessibility, performance, theming — full quality report' },
        { cmd: '/optimize', desc: 'Loading speed, rendering, bundle size improvements' },
      ],
    },
    {
      label: 'Design System',
      color: '#c45c2a',
      skills: [
        { cmd: '/extract', desc: 'Pull out reusable components & design tokens' },
        { cmd: '/normalize', desc: 'Enforce consistency across your design system' },
        { cmd: '/typeset', desc: 'Fix font choices, hierarchy, sizing, and readability' },
      ],
    },
  ];

  return (
    <Slide backgroundColor="#0d0c0b">
      <SlideLabel>07 / Impeccable</SlideLabel>
      <Box paddingTop="10px">
        <SectionHeading>The Skill Library</SectionHeading>
        <Box
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
          }}
        >
          {skillGroups.map((group) => (
            <Box key={group.label}>
              <Text
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: group.color,
                  margin: '0 0 12px',
                  paddingBottom: '8px',
                  borderBottom: `1px solid ${group.color}40`,
                }}
              >
                {group.label}
              </Text>
              {group.skills.map((skill) => (
                <Appear key={skill.cmd}>
                  <Box
                    marginBottom="10px"
                    padding="12px 14px"
                    style={{
                      background: '#111009',
                      border: `1px solid ${group.color}20`,
                      borderLeft: `2px solid ${group.color}`,
                      borderRadius: '4px',
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '13px',
                        color: group.color,
                        margin: '0 0 4px',
                      }}
                    >
                      {skill.cmd}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Syne, sans-serif',
                        fontSize: '12px',
                        color: '#6a6258',
                        margin: 0,
                        lineHeight: 1.4,
                      }}
                    >
                      {skill.desc}
                    </Text>
                  </Box>
                </Appear>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Slide>
  );
}

function EbookSlide() {
  return (
    <Slide backgroundColor="#0d0c0b">
      <SlideLabel>08 / E-Book</SlideLabel>
      <FlexBox height="100%" alignItems="center">

        {/* Left — cover */}
        <Box flex="1" paddingRight="60px" style={{ display: 'flex', justifyContent: 'center' }}>
          <Appear>
            <Box
              style={{
                position: 'relative',
                display: 'inline-block',
                filter: 'drop-shadow(0 32px 64px #00000099)',
              }}
            >
              {/* Subtle glow behind cover */}
              <Box
                position="absolute"
                style={{
                  inset: '-20px',
                  background: 'radial-gradient(ellipse at center, #8b5cf620 0%, transparent 70%)',
                  borderRadius: '12px',
                  zIndex: 0,
                }}
              />
              <img
                src={ebookImg}
                alt="E-book: Building Websites with Claude Code & Impeccable"
                style={{
                  display: 'block',
                  maxHeight: '420px',
                  borderRadius: '6px',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            </Box>
          </Appear>
        </Box>

        {/* Right — description */}
        <Box flex="1.1">
          <SectionHeading>The E-Book</SectionHeading>
          <Appear>
            <Bullet accent>Step-by-step guide to building a complete website</Bullet>
          </Appear>
          <Appear>
            <Bullet>From blank project to polished, production-ready UI</Bullet>
          </Appear>
          <Appear>
            <Bullet accent>Covers the full Claude Code + Impeccable workflow</Bullet>
          </Appear>
          <Appear>
            <Bullet>Prompting strategies, skill stacking, and real examples</Bullet>
          </Appear>
          <Appear>
            <Box marginTop="32px" padding="20px 24px" style={{
              background: '#8b5cf610',
              border: '1px solid #8b5cf630',
              borderLeft: '3px solid #8b5cf6',
              borderRadius: '4px',
            }}>
              <Text style={{ fontFamily: 'Syne, sans-serif', fontSize: '15px', color: '#9d9488', margin: '0 0 6px' }}>
                Available now
              </Text>
              <Text style={{ fontFamily: "'Instrument Serif', serif", fontSize: '22px', fontStyle: 'italic', color: '#f5f0e8', margin: 0 }}>
                Build Websites with Claude Code &amp; Impeccable
              </Text>
            </Box>
          </Appear>
        </Box>

      </FlexBox>
    </Slide>
  );
}

function EbookPdfSlide() {
  return (
    <Slide backgroundColor="#0d0c0b">
      <SlideLabel>08 / E-Book</SlideLabel>
      <Box
        position="absolute"
        style={{ inset: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}
      >
        <Text style={{ fontFamily: "'Instrument Serif', serif", fontSize: '28px', fontStyle: 'italic', color: '#f5f0e8', margin: 0, flexShrink: 0 }}>
          Build Websites with Claude Code &amp; Impeccable
        </Text>
        <Box style={{ flex: 1, borderRadius: '6px', overflow: 'hidden', border: '1px solid #2a2520' }}>
          <iframe
            src={`${ebookPdf}#toolbar=0&navpanes=0&view=FitH`}
            style={{ display: 'block', width: '100%', height: '100%', border: 'none' }}
            title="E-Book PDF Viewer"
          />
        </Box>
      </Box>
    </Slide>
  );
}

function QASlide() {
  return (
    <Slide backgroundColor="#0d0c0b">
      <FlexBox height="100%" flexDirection="column" alignItems="flex-start" justifyContent="center">
        {/* Big decorative Q */}
        <Box
          position="absolute"
          bottom="-60px"
          right="-20px"
          style={{
            fontFamily: 'Instrument Serif, serif',
            fontSize: '400px',
            fontStyle: 'italic',
            color: '#1a1814',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          ?
        </Box>

        <Box marginBottom="20px">
          <Tag color="#e8a030">Q&amp;A</Tag>
        </Box>

        <Heading
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: '88px',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#f5f0e8',
            lineHeight: 1.05,
            margin: '0 0 40px',
          }}
        >
          Questions?
        </Heading>

        <Box
          style={{ width: '64px', height: '3px', background: 'linear-gradient(90deg, #c45c2a, #e8a030)', marginBottom: '40px' }}
        />

        <FlexBox flexDirection="column" alignItems="flex-start">
          <Appear>
            <Box marginBottom="20px">
              <Text style={{ fontFamily: 'Syne, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#5a5248', margin: '0 0 6px' }}>
                Get started
              </Text>
              <Text style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '22px', color: '#e8a030', margin: 0 }}>
                npm install -g @anthropic-ai/claude-code
              </Text>
            </Box>
          </Appear>

          <Appear>
            <Box marginBottom="20px">
              <Text style={{ fontFamily: 'Syne, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#5a5248', margin: '0 0 6px' }}>
                Docs
              </Text>
              <Text style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '22px', color: '#c45c2a', margin: 0 }}>
                docs.anthropic.com/claude-code
              </Text>
            </Box>
          </Appear>

          <Appear>
            <Box>
              <Text style={{ fontFamily: 'Syne, sans-serif', fontSize: '14px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#5a5248', margin: '0 0 6px' }}>
                Community
              </Text>
              <Text style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '22px', color: '#8b5cf6', margin: 0 }}>
                github.com/anthropics/claude-code
              </Text>
            </Box>
          </Appear>
        </FlexBox>
      </FlexBox>
    </Slide>
  );
}

// ─── Deck ─────────────────────────────────────────────────────────────────────

export default function Presentation() {
  return (
    <Deck theme={theme} template={template} transition={fadeTransition}>
      <TitleSlide />
      <WhatIsSlide />
      <CapabilitiesSlide />
      <WorkflowSlide />
      <BestPracticesSlide />
      <ExamplesSlide />
      <TipsSlide />
      <ImpeccableIntroSlide />
      <ImpeccableExampleSlide />
      <ImpeccableExampleJohnSlide />
      <ImpeccableSkillsSlide />
      <EbookSlide />
      <EbookPdfSlide />
      <QASlide />
    </Deck>
  );
}
