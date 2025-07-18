# Unified Monorepo for SkillsTechTalk & HappyWeekender

This monorepo contains two full-stack products: **SkillsTechTalk** and **HappyWeekender**, each with a web app and a mobile app, supported by a shared Node.js API.

> Monorepo managed with [TurboRepo](https://turbo.build/repo) and [pnpm](https://pnpm.io/)

---

## Folder Structure

```
unified-monorepo/
├── apps/
│   ├── api/                      # Node.js API (Express)
│   ├── skillstechtalk-web/       # Web app (React + Vite)
│   ├── happyweekender-web/       # Web app (React + Vite)
│   ├── skillstechtalk-mobile/    # Mobile app (React Native + Expo)
│   └── happyweekender-mobile/    # Mobile app (React Native + Expo)
├── packages/
│   └── ui/                       # Shared components/utilities
├── pnpm-workspace.yaml
├── turbo.json
├── tsconfig.base.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- [pnpm](https://pnpm.io/) installed globally
- [Expo CLI](https://docs.expo.dev/get-started/installation/) for mobile apps:
  ```bash
  npm install -g expo-cli
  ```

---

## Install Dependencies

```bash
pnpm install
```

---

## Run Development Servers

### API Server (Express + TypeScript)

```bash
pnpm --filter @unified/api dev
```

Runs on [http://localhost:3001](http://localhost:3001)

---

### Web Apps (React + Vite)

#### SkillsTechTalk Web

```bash
pnpm --filter skillstechtalk-web dev
```

#### HappyWeekender Web

```bash
pnpm --filter happyweekender-web dev
```

Each app runs on its own Vite dev server (usually ports 5173, 5174...)

---

### Mobile Apps (React Native + Expo)

> In separate terminals or tabs:

#### SkillsTechTalk Mobile

```bash
cd apps/skillstechtalk-mobile
expo start (or pnpm start)
```

#### HappyWeekender Mobile

```bash
cd apps/happyweekender-mobile
expo start (or pnpm start)
```

Scan the QR code using the **Expo Go** app on your phone.

---

## Build Commands

You can also use TurboRepo to build everything:

```bash
pnpm turbo run build
```

---

## Next Steps

- Connect API to MongoDB
- Add authentication
- Share components via `packages/ui`
- Write tests using Vitest or Jest