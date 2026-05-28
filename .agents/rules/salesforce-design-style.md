---
trigger: always_on
---

## Purpose

This document defines how the Anti-Gravity workflow role should align with Salesforce Lightning Design System 2 (SLDS 2) so that workflow experiences stay visually consistent, scalable, and accessible across Salesforce-style interfaces.[1]

## Alignment Principles

Anti-Gravity should follow SLDS 2 as the primary design standard because SLDS 2 is the current Salesforce design system and is built to support consistent, scalable, and future-ready UI development.[1]

The workflow role should be designed with these principles:

- Use SLDS 2 foundations, components, and patterns as the default source for UI decisions.[1]
- Prefer consistency over custom styling unless a business requirement clearly demands variation.[1]
- Support a design-to-code workflow that stays compatible with Salesforce standards and reusable implementation patterns.[1]
- Ensure accessibility is treated as a required standard, not an optional enhancement, because accessibility is a dedicated part of the SLDS 2 system.[1]

## Role Definition

The Anti-Gravity workflow role should act as a governance and implementation layer that checks whether workflow screens, states, and user interactions match Salesforce design expectations.[1]

This role should be responsible for:

- Reviewing workflow UI against SLDS 2 foundations, components, and patterns.[1]
- Preventing ad hoc styling that breaks Salesforce visual consistency.[1]
- Encouraging reusable design tokens and CSS custom property based styling where applicable, since SLDS 2 prioritizes CSS custom properties in its architecture.[1]
- Supporting scalable workflows that can evolve with theming, dark mode readiness, and future Salesforce UI capabilities.[1]

## Design Standards to Enforce

### 1. Foundations

Anti-Gravity should align page structure, spacing, typography, color use, and theming decisions with SLDS 2 foundations so workflows feel native inside the Salesforce ecosystem.[1]

### 2. Components

Buttons, forms, modals, status indicators, navigation elements, and other workflow controls should use Salesforce-approved component patterns wherever possible instead of creating custom replacements.[1]

### 3. Patterns

Multi-step workflows, approvals, handoffs, and guided user actions should follow standard SLDS patterns so users experience predictable behavior and consistent interaction models.[1]

### 4. Accessibility

Every workflow role output should be reviewed for accessibility alignment because SLDS 2 includes accessibility as a core part of the design system structure.[1]

### 5. Future Readiness

Anti-Gravity should avoid rigid custom UI implementations and instead use standards that stay compatible with advanced theming, dark mode direction, and evolving AI-driven Salesforce experiences described in SLDS 2.[1]

## Implementation Requirements

To align Anti-Gravity with Salesforce design standards, the workflow role should apply the following requirements:

- Use SLDS 2 as the baseline reference for all workflow UI decisions.[1]
- Map each workflow screen to the closest SLDS component or pattern before proposing a custom design.[1]
- Use design tokens or CSS custom properties in implementation where the system allows them, because SLDS 2 emphasizes this architecture.[1]
- Validate that designs can move efficiently from design tools to code while preserving Salesforce consistency.[1]
- Include accessibility review in workflow definition, UI review, and release readiness checks.[1]
- Document exceptions whenever Anti-Gravity intentionally diverges from SLDS 2.[1]

## Governance Checklist

Use this checklist before approving any workflow role output:

- Is the UI based on an SLDS 2 foundation, component, or pattern?[1]
- Does the design avoid unnecessary custom styles?[1]
- Does the implementation support reusable theming and CSS custom property based styling?[1]
- Is accessibility validated as part of the workflow review?[1]
- Does the workflow feel native to Salesforce rather than externally styled?[1]
- Are any deviations from Salesforce standards documented and justified?[1]

## Standard Statement

Anti-Gravity must align all workflow role outputs with Salesforce Lightning Design System 2 by default. Any workflow UI, interaction pattern, or styling decision should inherit from SLDS 2 foundations, approved components, accessibility guidance, and scalable theming practices to maintain Salesforce-consistent experiences across the product.[1]

Reference url : https://www.lightningdesignsystem.com/2e1ef8501/p/85bd85-lightning-design-system-2
