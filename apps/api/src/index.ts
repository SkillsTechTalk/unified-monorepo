import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const flashcards = [
  {
    "id": 1,
    "question": "What is JSX?",
    "answer": "JSX is a syntax extension for JavaScript used with React to describe what the UI should look like.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 2,
    "question": "What is the virtual DOM?",
    "answer": "The virtual DOM is a lightweight copy of the real DOM used by React to optimize rendering.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 3,
    "question": "What are React hooks?",
    "answer": "Hooks let you use state and other React features in functional components.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 4,
    "question": "What does useEffect do?",
    "answer": "useEffect performs side effects in function components.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 5,
    "question": "What is useState?",
    "answer": "useState is a hook that lets you add React state to functional components.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 6,
    "question": "What is the difference between controlled and uncontrolled components?",
    "answer": "Controlled components are bound to state, while uncontrolled components maintain their own internal state.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 7,
    "question": "What is prop drilling?",
    "answer": "Prop drilling is passing data through multiple components via props.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 8,
    "question": "How does React handle re-renders?",
    "answer": "React re-renders components when their state or props change.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 9,
    "question": "What is React.memo?",
    "answer": "React.memo is a HOC that prevents re-renders if props haven't changed.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 10,
    "question": "How do you optimize performance in React apps?",
    "answer": "Use memoization, lazy loading, code splitting, and React.PureComponent.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 11,
    "question": "What is context in React?",
    "answer": "Context provides a way to pass data through the component tree without passing props manually.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 12,
    "question": "What is a key in React lists?",
    "answer": "Keys help React identify which items have changed, are added, or are removed.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 13,
    "question": "What is a higher-order component (HOC)?",
    "answer": "An HOC is a function that takes a component and returns a new component.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 14,
    "question": "What is the difference between useCallback and useMemo?",
    "answer": "useCallback memoizes functions; useMemo memoizes values.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 15,
    "question": "How does React handle events?",
    "answer": "React wraps native events in its synthetic event system.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 16,
    "question": "What are React portals?",
    "answer": "Portals provide a way to render children into a DOM node outside the parent hierarchy.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 17,
    "question": "What is server-side rendering (SSR) in React?",
    "answer": "SSR renders React components on the server before sending HTML to the client.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 18,
    "question": "How does Next.js extend React?",
    "answer": "Next.js adds SSR, routing, and API handling to React.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 19,
    "question": "What is hydration in React?",
    "answer": "Hydration attaches event listeners to server-rendered HTML.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 20,
    "question": "What is reconciliation?",
    "answer": "Reconciliation is React's process of updating the DOM when state changes.",
    "category": "React",
    "difficulty": "Medium"
  },
  // AI (20 questions)
  {
    id: 1,
    question: "What is a Large Language Model (LLM)?",
    answer: "An LLM is a neural network trained on vast text data for tasks like text generation and comprehension. Example: GPT-4o (2025) powers chatbots and code assistants.",
    category: "AI",
    difficulty: "Medium",
  },
  {
    id: 2,
    question: "What is prompt engineering?",
    answer: "Prompt engineering crafts inputs to optimize LLM outputs. Example: 'Write a REST API in TypeScript, include error handling' yields better code than 'Write an API.'",
    category: "AI",
    difficulty: "Medium",
  },
  {
    id: 3,
    question: "How does fine-tuning an LLM work?",
    answer: "Fine-tuning trains a pre-trained LLM on domain-specific data to improve performance. Example: Fine-tune LLaMA on medical texts for healthcare Q&A.",
    category: "AI",
    difficulty: "Hard",
  },
  {
    id: 4,
    question: "What is Retrieval-Augmented Generation (RAG)?",
    answer: "RAG combines LLMs with external data retrieval for accurate responses. Example: Query a vector database for docs, then generate answers with GPT.",
    category: "AI",
    difficulty: "Hard",
  },
  {
    id: 5,
    question: "What are the ethical concerns of AI in 2025?",
    answer: "Concerns include bias (e.g., skewed training data), privacy (e.g., data leaks), and misuse (e.g., deepfakes). Mitigations involve audits and regulations.",
    category: "AI",
    difficulty: "Medium",
  },
  {
    id: 6,
    question: "How do you integrate an LLM into a web app?",
    answer: "Use APIs (e.g., OpenAI) or host models (e.g., Hugging Face). Example: `fetch('https://api.openai.com/v1/completions', { headers: { Authorization: 'Bearer <key>' } })`.",
    category: "AI",
    difficulty: "Medium",
  },
  {
    id: 7,
    question: "What is transfer learning in AI?",
    answer: "Transfer learning reuses a pre-trained model for a new task, reducing training time. Example: Use BERT for sentiment analysis with minimal fine-tuning.",
    category: "AI",
    difficulty: "Medium",
  },
  {
    id: 8,
    question: "What is the role of embeddings in AI?",
    answer: "Embeddings map data (e.g., text) to vectors for similarity comparison. Example: Cosine similarity on word embeddings for semantic search.",
    category: "AI",
    difficulty: "Hard",
  },
  {
    id: 9,
    question: "How does AI model quantization improve performance?",
    answer: "Quantization reduces model precision (e.g., from 32-bit to 8-bit), lowering memory and compute needs. Example: Run quantized LLaMA on edge devices.",
    category: "AI",
    difficulty: "Hard",
  },
  {
    id: 10,
    question: "What is the difference between supervised and unsupervised learning?",
    answer: "Supervised learning uses labeled data (e.g., image classification), while unsupervised learning finds patterns in unlabeled data (e.g., clustering).",
    category: "AI",
    difficulty: "Medium",
  },
  {
    id: 11,
    question: "What is reinforcement learning?",
    answer: "Reinforcement learning trains agents via rewards for actions. Example: AlphaGo learns moves by maximizing game wins.",
    category: "AI",
    difficulty: "Hard",
  },
  {
    id: 12,
    question: "How do you evaluate an LLM's performance?",
    answer: "Use metrics like BLEU, ROUGE, or human evaluation for tasks like translation. Example: Compare generated text to reference answers.",
    category: "AI",
    difficulty: "Medium",
  },
  {
    id: 13,
    question: "What is the role of vector databases in AI?",
    answer: "Vector databases store embeddings for similarity search, used in RAG. Example: Pinecone retrieves docs for LLM context.",
    category: "AI",
    difficulty: "Hard",
  },
  {
    id: 14,
    question: "What is AI model drift?",
    answer: "Model drift occurs when a model's performance degrades due to changing data distributions. Example: Retrain a fraud detection model on new transactions.",
    category: "AI",
    difficulty: "Medium",
  },
  {
    id: 15,
    question: "How do you deploy an AI model at scale?",
    answer: "Use frameworks like ONNX, containers (Docker), and orchestrators (Kubernetes). Example: Deploy a TensorFlow model on AWS SageMaker.",
    category: "AI",
    difficulty: "Hard",
  },
  {
    id: 16,
    question: "What is federated learning?",
    answer: "Federated learning trains models across devices without centralizing data, preserving privacy. Example: Train a keyboard predictor on user phones.",
    category: "AI",
    difficulty: "Hard",
  },
  {
    id: 17,
    question: "What are AI agents in 2025?",
    answer: "AI agents are autonomous systems combining LLMs, tools, and memory for tasks. Example: An agent books flights using APIs and user preferences.",
    category: "AI",
    difficulty: "Medium",
  },
  {
    id: 18,
    question: "How does attention mechanism work in transformers?",
    answer: "Attention weighs input tokens' importance, enabling context-aware processing. Example: In BERT, self-attention links words in a sentence.",
    category: "AI",
    difficulty: "Hard",
  },
  {
    id: 19,
    question: "What is the role of AI in code generation?",
    answer: "AI generates code from prompts, improving productivity. Example: GitHub Copilot suggests TypeScript functions based on comments.",
    category: "AI",
    difficulty: "Medium",
  },
  {
    id: 20,
    question: "How do you mitigate AI bias in 2025?",
    answer: "Use diverse training data, audit models, and apply fairness metrics. Example: Remove gender bias in hiring algorithms with balanced datasets.",
    category: "AI",
    difficulty: "Hard",
  },

  // Cloud (10 questions)
  {
    id: 21,
    question: "What is Kubernetes, and why is it used?",
    answer: "Kubernetes orchestrates containerized apps, managing deployment, scaling, and networking. Example: Deploy a microservice with `kubectl apply -f deployment.yaml`.",
    category: "Cloud",
    difficulty: "Medium",
  },
  {
    id: 22,
    question: "What is the difference between IaaS, PaaS, and SaaS?",
    answer: "IaaS provides infrastructure (e.g., AWS EC2), PaaS platforms (e.g., Azure App Service), and SaaS applications (e.g., Google Workspace).",
    category: "Cloud",
    difficulty: "Easy",
  },
  {
    id: 23,
    question: "How does AWS Lambda work?",
    answer: "Lambda runs serverless functions triggered by events (e.g., HTTP requests). Example: A function processes S3 uploads, billed per invocation.",
    category: "Cloud",
    difficulty: "Medium",
  },
  {
    id: 24,
    question: "What is a multi-cloud strategy?",
    answer: "Multi-cloud uses multiple providers (e.g., AWS, Azure) to avoid lock-in and optimize costs. Example: Run compute on AWS, storage on GCP.",
    category: "Cloud",
    difficulty: "Hard",
  },
  {
    id: 25,
    question: "How do you secure cloud infrastructure?",
    answer: "Use IAM roles, encryption, VPCs, and monitoring. Example: Restrict S3 bucket access with `aws s3api put-bucket-policy`.",
    category: "Cloud",
    difficulty: "Medium",
  },
  {
    id: 26,
    question: "What is Infrastructure as Code (IaC)?",
    answer: "IaC defines infrastructure using code (e.g., Terraform). Example: `resource 'aws_instance' 'example' { ami = 'ami-123' }` provisions an EC2 instance.",
    category: "Cloud",
    difficulty: "Medium",
  },
  {
    id: 27,
    question: "What is the role of a CDN?",
    answer: "A Content Delivery Network caches content at edge locations for low latency. Example: Cloudflare serves static assets globally.",
    category: "Cloud",
    difficulty: "Easy",
  },
  {
    id: 28,
    question: "How does autoscaling work in cloud environments?",
    answer: "Autoscaling adjusts resources based on demand. Example: AWS Auto Scaling adds EC2 instances when CPU exceeds 70%.",
    category: "Cloud",
    difficulty: "Medium",
  },
  {
    id: 29,
    question: "What is a serverless database?",
    answer: "A serverless database scales automatically, managed by the provider. Example: AWS Aurora Serverless adjusts capacity for SQL queries.",
    category: "Cloud",
    difficulty: "Medium",
  },
  {
    id: 30,
    question: "How do you monitor cloud applications?",
    answer: "Use tools like AWS CloudWatch, Prometheus, or Grafana for metrics and logs. Example: Set CloudWatch alarms for high latency.",
    category: "Cloud",
    difficulty: "Medium",
  },

  // DevOps (5 questions)
  {
    id: 31,
    question: "What is CI/CD, and why is it important?",
    answer: "CI/CD automates building, testing, and deploying code. Example: GitHub Actions runs `npm test` and deploys to Vercel on push.",
    category: "DevOps",
    difficulty: "Medium",
  },
  {
    id: 32,
    question: "What is GitOps?",
    answer: "GitOps uses Git as the source of truth for infrastructure and app deployment. Example: ArgoCD applies Kubernetes manifests from a Git repo.",
    category: "DevOps",
    difficulty: "Hard",
  },
  {
    id: 33,
    question: "How do you implement blue-green deployments?",
    answer: "Blue-green deployments switch traffic between two environments (blue: live, green: new). Example: AWS ELB swaps traffic after green passes tests.",
    category: "DevOps",
    difficulty: "Medium",
  },
  {
    id: 34,
    question: "What is the role of Docker in DevOps?",
    answer: "Docker containers package apps with dependencies for consistent deployment. Example: `docker run -p 80:80 myapp` runs a containerized app.",
    category: "DevOps",
    difficulty: "Medium",
  },
  {
    id: 35,
    question: "What is a pipeline as code?",
    answer: "Pipeline as code defines CI/CD workflows in versioned files. Example: `.github/workflows/ci.yml` runs tests and deploys on push.",
    category: "DevOps",
    difficulty: "Medium",
  },

  // Security (5 questions)
  {
    id: 36,
    question: "What is OWASP Top 10?",
    answer: "OWASP Top 10 lists critical web app security risks (e.g., injection, broken authentication). Example: Mitigate XSS with input sanitization.",
    category: "Security",
    difficulty: "Medium",
  },
  {
    id: 37,
    question: "How do you prevent SQL injection?",
    answer: "Use parameterized queries or ORMs. Example: EF Core's `dbContext.Users.Where(u => u.Id == id)` avoids raw SQL vulnerabilities.",
    category: "Security",
    difficulty: "Medium",
  },
  {
    id: 38,
    question: "What is zero-trust architecture?",
    answer: "Zero-trust assumes no trust, requiring verification for all access. Example: Enforce MFA and role-based access in AWS IAM.",
    category: "Security",
    difficulty: "Hard",
  },
  {
    id: 39,
    question: "How do you secure API endpoints?",
    answer: "Use OAuth 2.0, JWT, rate limiting, and input validation. Example: Validate JWT with `app.UseAuthentication()`.",
    category: "Security",
    difficulty: "Medium",
  },
  {
    id: 40,
    question: "What is a supply chain attack?",
    answer: "A supply chain attack compromises software via dependencies or build tools. Example: Mitigate with SBOMs and dependency scanning.",
    category: "Security",
    difficulty: "Hard",
  },

  // TypeScript (5 questions)
  {
    id: 41,
    question: "What are TypeScript's union types?",
    answer: "Union types allow multiple types. Example: `let x: string | number;` accepts strings or numbers, checked with type guards.",
    category: "TypeScript",
    difficulty: "Medium",
  },
  {
    id: 42,
    question: "How do you use generics in TypeScript?",
    answer: "Generics create reusable components with type safety. Example: `function identity<T>(arg: T): T { return arg; }` works for any type.",
    category: "TypeScript",
    difficulty: "Medium",
  },
  {
    id: 43,
    question: "What is the `unknown` type in TypeScript?",
    answer: "`unknown` is a safer alternative to `any`, requiring type checks before use. Example: `if (typeof x === 'string') { x.toUpperCase(); }`.",
    category: "TypeScript",
    difficulty: "Medium",
  },
  {
    id: 44,
    question: "How do you declare a partial type?",
    answer: "Use `Partial<T>` to make all properties optional. Example: `interface User { name: string; } const partial: Partial<User> = {};`.",
    category: "TypeScript",
    difficulty: "Medium",
  },
  {
    id: 45,
    question: "What is TypeScript's `never` type?",
    answer: "`never` represents values that never occur, used in exhaustive checks. Example: `function fail(): never { throw new Error(); }`.",
    category: "TypeScript",
    difficulty: "Hard",
  },

  // Monorepo (5 questions)
  {
    id: 46,
    question: "What are the benefits of a monorepo?",
    answer: "Monorepos simplify dependency management, code sharing, and CI/CD. Example: Turborepo caches builds for `apps/*` and `packages/*`.",
    category: "Monorepo",
    difficulty: "Medium",
  },
  {
    id: 47,
    question: "How does Turborepo optimize monorepo builds?",
    answer: "Turborepo caches tasks (e.g., `build`, `dev`) and runs them in parallel. Example: `turbo run dev` only rebuilds changed apps.",
    category: "Monorepo",
    difficulty: "Medium",
  },
  {
    id: 48,
    question: "What is a pnpm workspace?",
    answer: "pnpm workspaces manage multiple packages in a monorepo, sharing dependencies. Example: `pnpm-workspace.yaml` lists `apps/**` and `packages/*`.",
    category: "Monorepo",
    difficulty: "Medium",
  },
  {
    id: 49,
    question: "How do you handle versioning in a monorepo?",
    answer: "Use tools like Lerna or `pnpm publish`. Example: `pnpm -r publish` versions and publishes changed packages.",
    category: "Monorepo",
    difficulty: "Hard",
  },
  {
    id: 50,
    question: "What are challenges of monorepos in 2025?",
    answer: "Challenges include build times, CI complexity, and merge conflicts. Mitigate with Turborepo caching and modular design.",
    category: "Monorepo",
    difficulty: "Hard",
  },
  {
    "id": 6,
    "question": "What is JSX?",
    "answer": "JSX is a syntax extension for JavaScript used with React to describe what the UI should look like.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 7,
    "question": "What is the virtual DOM?",
    "answer": "The virtual DOM is a lightweight copy of the real DOM used by React to optimize rendering.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 8,
    "question": "What are React hooks?",
    "answer": "Hooks let you use state and other React features in functional components.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 9,
    "question": "What does useEffect do?",
    "answer": "useEffect performs side effects in function components.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 10,
    "question": "What is useState?",
    "answer": "useState is a hook that lets you add React state to functional components.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 11,
    "question": "What is the difference between controlled and uncontrolled components?",
    "answer": "Controlled components are bound to state, while uncontrolled components maintain their own internal state.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 12,
    "question": "What is prop drilling?",
    "answer": "Prop drilling is passing data through multiple components via props.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 13,
    "question": "How does React handle re-renders?",
    "answer": "React re-renders components when their state or props change.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 14,
    "question": "What is React.memo?",
    "answer": "React.memo is a HOC that prevents re-renders if props haven't changed.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 15,
    "question": "How do you optimize performance in React apps?",
    "answer": "Use memoization, lazy loading, code splitting, and React.PureComponent.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 16,
    "question": "What is context in React?",
    "answer": "Context provides a way to pass data through the component tree without passing props manually.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 17,
    "question": "What is a key in React lists?",
    "answer": "Keys help React identify which items have changed, are added, or are removed.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 18,
    "question": "What is a higher-order component (HOC)?",
    "answer": "An HOC is a function that takes a component and returns a new component.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 19,
    "question": "What is the difference between useCallback and useMemo?",
    "answer": "useCallback memoizes functions; useMemo memoizes values.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 20,
    "question": "How does React handle events?",
    "answer": "React wraps native events in its synthetic event system.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 21,
    "question": "What are React portals?",
    "answer": "Portals provide a way to render children into a DOM node outside the parent hierarchy.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 22,
    "question": "What is server-side rendering (SSR) in React?",
    "answer": "SSR renders React components on the server before sending HTML to the client.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 23,
    "question": "How does Next.js extend React?",
    "answer": "Next.js adds SSR, routing, and API handling to React.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 24,
    "question": "What is hydration in React?",
    "answer": "Hydration attaches event listeners to server-rendered HTML.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    "id": 25,
    "question": "What is reconciliation?",
    "answer": "Reconciliation is React's process of updating the DOM when state changes.",
    "category": "React",
    "difficulty": "Medium"
  },
  {
    id: 51,
    question: `What are the architectural trade-offs when dealing with data partitioning strategies?`,
    answer: `The architectural trade-offs in data partitioning strategies involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 52,
    question: `What are the architectural trade-offs when dealing with event-driven architecture?`,
    answer: `The architectural trade-offs in event-driven architecture involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Hard'
  },
  {
    id: 53,
    question: `What are the architectural trade-offs when dealing with metrics vs logs vs traces?`,
    answer: `The architectural trade-offs in metrics vs logs vs traces involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Security',
    difficulty: 'Easy'
  },
  {
    id: 54,
    question: `What are the architectural trade-offs when dealing with blue-green deployments?`,
    answer: `The architectural trade-offs in blue-green deployments involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Medium'
  },
  {
    id: 55,
    question: `What are the architectural trade-offs when dealing with api gateway patterns?`,
    answer: `The architectural trade-offs in api gateway patterns involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'System Design',
    difficulty: 'Hard'
  },
  {
    id: 56,
    question: `What are the architectural trade-offs when dealing with security architecture for apis?`,
    answer: `The architectural trade-offs in security architecture for apis involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'System Design',
    difficulty: 'Hard'
  },
  {
    id: 57,
    question: `What are the architectural trade-offs when dealing with api gateway patterns?`,
    answer: `The architectural trade-offs in api gateway patterns involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'System Design',
    difficulty: 'Hard'
  },
  {
    id: 58,
    question: `What are the architectural trade-offs when dealing with scalability strategies?`,
    answer: `The architectural trade-offs in scalability strategies involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'System Design',
    difficulty: 'Easy'
  },
  {
    id: 59,
    question: `What are the architectural trade-offs when dealing with load balancing strategies?`,
    answer: `The architectural trade-offs in load balancing strategies involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Medium'
  },
  {
    id: 60,
    question: `What are the architectural trade-offs when dealing with designing fault-tolerant systems?`,
    answer: `The architectural trade-offs in designing fault-tolerant systems involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Hard'
  },
  {
    id: 61,
    question: `What are the architectural trade-offs when dealing with database sharding?`,
    answer: `The architectural trade-offs in database sharding involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Hard'
  },
  {
    id: 62,
    question: `What are the architectural trade-offs when dealing with data partitioning strategies?`,
    answer: `The architectural trade-offs in data partitioning strategies involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Medium'
  },
  {
    id: 63,
    question: `What are the architectural trade-offs when dealing with service mesh?`,
    answer: `The architectural trade-offs in service mesh involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Hard'
  },
  {
    id: 64,
    question: `What are the architectural trade-offs when dealing with log aggregation?`,
    answer: `The architectural trade-offs in log aggregation involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 65,
    question: `What are the architectural trade-offs when dealing with designing a multi-tenant saas platform?`,
    answer: `The architectural trade-offs in designing a multi-tenant saas platform involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 66,
    question: `What are the architectural trade-offs when dealing with designing for data consistency?`,
    answer: `The architectural trade-offs in designing for data consistency involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Medium'
  },
  {
    id: 67,
    question: `What are the architectural trade-offs when dealing with service mesh?`,
    answer: `The architectural trade-offs in service mesh involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'System Design',
    difficulty: 'Medium'
  },
  {
    id: 68,
    question: `What are the architectural trade-offs when dealing with microservices vs monolith?`,
    answer: `The architectural trade-offs in microservices vs monolith involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Medium'
  },
  {
    id: 69,
    question: `What are the architectural trade-offs when dealing with static and dynamic code analysis?`,
    answer: `The architectural trade-offs in static and dynamic code analysis involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'System Design',
    difficulty: 'Medium'
  },
  {
    id: 70,
    question: `What are the architectural trade-offs when dealing with cdn usage and edge caching?`,
    answer: `The architectural trade-offs in cdn usage and edge caching involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 71,
    question: `What are the architectural trade-offs when dealing with authentication and authorization?`,
    answer: `The architectural trade-offs in authentication and authorization involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Hard'
  },
  {
    id: 72,
    question: `What are the architectural trade-offs when dealing with application telemetry?`,
    answer: `The architectural trade-offs in application telemetry involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Hard'
  },
  {
    id: 73,
    question: `What are the architectural trade-offs when dealing with domain-driven design (ddd)?`,
    answer: `The architectural trade-offs in domain-driven design (ddd) involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'System Design',
    difficulty: 'Hard'
  },
  {
    id: 74,
    question: `What are the architectural trade-offs when dealing with rate limiting and throttling?`,
    answer: `The architectural trade-offs in rate limiting and throttling involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Easy'
  },
  {
    id: 75,
    question: `What are the architectural trade-offs when dealing with secure data storage and transfer?`,
    answer: `The architectural trade-offs in secure data storage and transfer involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Easy'
  },
  {
    id: 76,
    question: `What are the architectural trade-offs when dealing with zero trust security model?`,
    answer: `The architectural trade-offs in zero trust security model involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Easy'
  },
  {
    id: 77,
    question: `What are the architectural trade-offs when dealing with cloud cost optimization?`,
    answer: `The architectural trade-offs in cloud cost optimization involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Easy'
  },
  {
    id: 78,
    question: `What are the architectural trade-offs when dealing with serverless architecture?`,
    answer: `The architectural trade-offs in serverless architecture involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Easy'
  },
  {
    id: 79,
    question: `What are the architectural trade-offs when dealing with data privacy regulations (gdpr, ccpa)?`,
    answer: `The architectural trade-offs in data privacy regulations (gdpr, ccpa) involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Security',
    difficulty: 'Easy'
  },
  {
    id: 80,
    question: `What are the architectural trade-offs when dealing with architecting for high availability?`,
    answer: `The architectural trade-offs in architecting for high availability involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'System Design',
    difficulty: 'Hard'
  },
  {
    id: 81,
    question: `What are the architectural trade-offs when dealing with architecting for high availability?`,
    answer: `The architectural trade-offs in architecting for high availability involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Hard'
  },
  {
    id: 82,
    question: `What are the architectural trade-offs when dealing with security in microservices?`,
    answer: `The architectural trade-offs in security in microservices involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Medium'
  },
  {
    id: 83,
    question: `What are the architectural trade-offs when dealing with microservices vs monolith?`,
    answer: `The architectural trade-offs in microservices vs monolith involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Easy'
  },
  {
    id: 84,
    question: `What are the architectural trade-offs when dealing with audit logging and compliance?`,
    answer: `The architectural trade-offs in audit logging and compliance involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Easy'
  },
  {
    id: 85,
    question: `What are the architectural trade-offs when dealing with blue-green deployments?`,
    answer: `The architectural trade-offs in blue-green deployments involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Medium'
  },
  {
    id: 86,
    question: `What are the architectural trade-offs when dealing with cloud cost optimization?`,
    answer: `The architectural trade-offs in cloud cost optimization involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Hard'
  },
  {
    id: 87,
    question: `What are the architectural trade-offs when dealing with secure data storage and transfer?`,
    answer: `The architectural trade-offs in secure data storage and transfer involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Easy'
  },
  {
    id: 88,
    question: `What are the architectural trade-offs when dealing with api gateway patterns?`,
    answer: `The architectural trade-offs in api gateway patterns involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 89,
    question: `What are the architectural trade-offs when dealing with handling partial failures in distributed systems?`,
    answer: `The architectural trade-offs in handling partial failures in distributed systems involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Easy'
  },
  {
    id: 90,
    question: `What are the architectural trade-offs when dealing with caching strategies?`,
    answer: `The architectural trade-offs in caching strategies involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Hard'
  },
  {
    id: 91,
    question: `What are the architectural trade-offs when dealing with service orchestration vs choreography?`,
    answer: `The architectural trade-offs in service orchestration vs choreography involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Medium'
  },
  {
    id: 92,
    question: `What are the architectural trade-offs when dealing with authentication and authorization?`,
    answer: `The architectural trade-offs in authentication and authorization involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Hard'
  },
  {
    id: 93,
    question: `What are the architectural trade-offs when dealing with event sourcing and cqrs?`,
    answer: `The architectural trade-offs in event sourcing and cqrs involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Easy'
  },
  {
    id: 94,
    question: `What are the architectural trade-offs when dealing with secrets management?`,
    answer: `The architectural trade-offs in secrets management involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Easy'
  },
  {
    id: 95,
    question: `What are the architectural trade-offs when dealing with domain-driven design (ddd)?`,
    answer: `The architectural trade-offs in domain-driven design (ddd) involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Security',
    difficulty: 'Easy'
  },
  {
    id: 96,
    question: `What are the architectural trade-offs when dealing with disaster recovery planning?`,
    answer: `The architectural trade-offs in disaster recovery planning involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Hard'
  },
  {
    id: 97,
    question: `What are the architectural trade-offs when dealing with scaling write-heavy systems?`,
    answer: `The architectural trade-offs in scaling write-heavy systems involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Medium'
  },
  {
    id: 98,
    question: `What are the architectural trade-offs when dealing with designing for data consistency?`,
    answer: `The architectural trade-offs in designing for data consistency involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'System Design',
    difficulty: 'Easy'
  },
  {
    id: 99,
    question: `What are the architectural trade-offs when dealing with cloud cost optimization?`,
    answer: `The architectural trade-offs in cloud cost optimization involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Hard'
  },
  {
    id: 100,
    question: `What are the architectural trade-offs when dealing with polyglot persistence?`,
    answer: `The architectural trade-offs in polyglot persistence involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Easy'
  },
  {
    id: 101,
    question: `What are the architectural trade-offs when dealing with choosing between sql and nosql?`,
    answer: `The architectural trade-offs in choosing between sql and nosql involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Hard'
  },
  {
    id: 102,
    question: `What are the architectural trade-offs when dealing with polyglot persistence?`,
    answer: `The architectural trade-offs in polyglot persistence involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Easy'
  },
  {
    id: 103,
    question: `What are the architectural trade-offs when dealing with application telemetry?`,
    answer: `The architectural trade-offs in application telemetry involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Medium'
  },
  {
    id: 104,
    question: `What are the architectural trade-offs when dealing with oauth2 and openid connect?`,
    answer: `The architectural trade-offs in oauth2 and openid connect involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Easy'
  },
  {
    id: 105,
    question: `What are the architectural trade-offs when dealing with domain-driven design (ddd)?`,
    answer: `The architectural trade-offs in domain-driven design (ddd) involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'System Design',
    difficulty: 'Hard'
  },
  {
    id: 106,
    question: `What are the architectural trade-offs when dealing with scalability strategies?`,
    answer: `The architectural trade-offs in scalability strategies involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Security',
    difficulty: 'Easy'
  },
  {
    id: 107,
    question: `What are the architectural trade-offs when dealing with container orchestration with kubernetes?`,
    answer: `The architectural trade-offs in container orchestration with kubernetes involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Hard'
  },
  {
    id: 108,
    question: `What are the architectural trade-offs when dealing with bounded contexts and aggregates?`,
    answer: `The architectural trade-offs in bounded contexts and aggregates involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Medium'
  },
  {
    id: 109,
    question: `What are the architectural trade-offs when dealing with handling partial failures in distributed systems?`,
    answer: `The architectural trade-offs in handling partial failures in distributed systems involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Security',
    difficulty: 'Easy'
  },
  {
    id: 110,
    question: `What are the architectural trade-offs when dealing with canary releases?`,
    answer: `The architectural trade-offs in canary releases involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Easy'
  },
  {
    id: 111,
    question: `What are the architectural trade-offs when dealing with microservices vs monolith?`,
    answer: `The architectural trade-offs in microservices vs monolith involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Hard'
  },
  {
    id: 112,
    question: `What are the architectural trade-offs when dealing with disaster recovery planning?`,
    answer: `The architectural trade-offs in disaster recovery planning involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Hard'
  },
  {
    id: 113,
    question: `What are the architectural trade-offs when dealing with service mesh?`,
    answer: `The architectural trade-offs in service mesh involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Easy'
  },
  {
    id: 114,
    question: `What are the architectural trade-offs when dealing with microservices vs monolith?`,
    answer: `The architectural trade-offs in microservices vs monolith involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Easy'
  },
  {
    id: 115,
    question: `What are the architectural trade-offs when dealing with oauth2 and openid connect?`,
    answer: `The architectural trade-offs in oauth2 and openid connect involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'System Design',
    difficulty: 'Hard'
  },
  {
    id: 116,
    question: `What are the architectural trade-offs when dealing with event sourcing and cqrs?`,
    answer: `The architectural trade-offs in event sourcing and cqrs involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Hard'
  },
  {
    id: 117,
    question: `What are the architectural trade-offs when dealing with microservices vs monolith?`,
    answer: `The architectural trade-offs in microservices vs monolith involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Medium'
  },
  {
    id: 118,
    question: `What are the architectural trade-offs when dealing with service mesh?`,
    answer: `The architectural trade-offs in service mesh involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'System Design',
    difficulty: 'Medium'
  },
  {
    id: 119,
    question: `What are the architectural trade-offs when dealing with log aggregation?`,
    answer: `The architectural trade-offs in log aggregation involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Medium'
  },
  {
    id: 120,
    question: `What are the architectural trade-offs when dealing with application telemetry?`,
    answer: `The architectural trade-offs in application telemetry involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Hard'
  },
  {
    id: 121,
    question: `What are the architectural trade-offs when dealing with secrets management?`,
    answer: `The architectural trade-offs in secrets management involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'System Design',
    difficulty: 'Hard'
  },
  {
    id: 122,
    question: `What are the architectural trade-offs when dealing with audit logging and compliance?`,
    answer: `The architectural trade-offs in audit logging and compliance involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Medium'
  },
  {
    id: 123,
    question: `What are the architectural trade-offs when dealing with serverless architecture?`,
    answer: `The architectural trade-offs in serverless architecture involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Hard'
  },
  {
    id: 124,
    question: `What are the architectural trade-offs when dealing with caching strategies?`,
    answer: `The architectural trade-offs in caching strategies involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Hard'
  },
  {
    id: 125,
    question: `What are the architectural trade-offs when dealing with cloud cost optimization?`,
    answer: `The architectural trade-offs in cloud cost optimization involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'System Design',
    difficulty: 'Medium'
  },
  {
    id: 126,
    question: `What are the architectural trade-offs when dealing with cloud cost optimization?`,
    answer: `The architectural trade-offs in cloud cost optimization involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Easy'
  },
  {
    id: 127,
    question: `What are the architectural trade-offs when dealing with versioning apis?`,
    answer: `The architectural trade-offs in versioning apis involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Easy'
  },
  {
    id: 128,
    question: `What are the architectural trade-offs when dealing with cdn usage and edge caching?`,
    answer: `The architectural trade-offs in cdn usage and edge caching involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Medium'
  },
  {
    id: 129,
    question: `What are the architectural trade-offs when dealing with designing for data consistency?`,
    answer: `The architectural trade-offs in designing for data consistency involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Medium'
  },
  {
    id: 130,
    question: `What are the architectural trade-offs when dealing with service orchestration vs choreography?`,
    answer: `The architectural trade-offs in service orchestration vs choreography involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Hard'
  },
  {
    id: 131,
    question: `What are the architectural trade-offs when dealing with secure data storage and transfer?`,
    answer: `The architectural trade-offs in secure data storage and transfer involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Easy'
  },
  {
    id: 132,
    question: `What are the architectural trade-offs when dealing with secure data storage and transfer?`,
    answer: `The architectural trade-offs in secure data storage and transfer involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Medium'
  },
  {
    id: 133,
    question: `What are the architectural trade-offs when dealing with cdn usage and edge caching?`,
    answer: `The architectural trade-offs in cdn usage and edge caching involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Security',
    difficulty: 'Hard'
  },
  {
    id: 134,
    question: `What are the architectural trade-offs when dealing with service decomposition strategies?`,
    answer: `The architectural trade-offs in service decomposition strategies involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Easy'
  },
  {
    id: 135,
    question: `What are the architectural trade-offs when dealing with secure data storage and transfer?`,
    answer: `The architectural trade-offs in secure data storage and transfer involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Hard'
  },
  {
    id: 136,
    question: `What are the architectural trade-offs when dealing with rate limiting and throttling?`,
    answer: `The architectural trade-offs in rate limiting and throttling involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'System Design',
    difficulty: 'Hard'
  },
  {
    id: 137,
    question: `What are the architectural trade-offs when dealing with observability and monitoring?`,
    answer: `The architectural trade-offs in observability and monitoring involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Security',
    difficulty: 'Easy'
  },
  {
    id: 138,
    question: `What are the architectural trade-offs when dealing with polyglot persistence?`,
    answer: `The architectural trade-offs in polyglot persistence involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Easy'
  },
  {
    id: 139,
    question: `What are the architectural trade-offs when dealing with scaling read-heavy systems?`,
    answer: `The architectural trade-offs in scaling read-heavy systems involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Medium'
  },
  {
    id: 140,
    question: `What are the architectural trade-offs when dealing with secrets management?`,
    answer: `The architectural trade-offs in secrets management involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Medium'
  },
  {
    id: 141,
    question: `What are the architectural trade-offs when dealing with latency vs throughput?`,
    answer: `The architectural trade-offs in latency vs throughput involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Medium'
  },
  {
    id: 142,
    question: `What are the architectural trade-offs when dealing with metrics vs logs vs traces?`,
    answer: `The architectural trade-offs in metrics vs logs vs traces involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Easy'
  },
  {
    id: 143,
    question: `What are the architectural trade-offs when dealing with handling partial failures in distributed systems?`,
    answer: `The architectural trade-offs in handling partial failures in distributed systems involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Security',
    difficulty: 'Hard'
  },
  {
    id: 144,
    question: `What are the architectural trade-offs when dealing with static and dynamic code analysis?`,
    answer: `The architectural trade-offs in static and dynamic code analysis involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Security',
    difficulty: 'Hard'
  },
  {
    id: 145,
    question: `What are the architectural trade-offs when dealing with oauth2 and openid connect?`,
    answer: `The architectural trade-offs in oauth2 and openid connect involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Easy'
  },
  {
    id: 146,
    question: `What are the architectural trade-offs when dealing with threat modeling?`,
    answer: `The architectural trade-offs in threat modeling involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Hard'
  },
  {
    id: 147,
    question: `What are the architectural trade-offs when dealing with scalability strategies?`,
    answer: `The architectural trade-offs in scalability strategies involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Medium'
  },
  {
    id: 148,
    question: `What are the architectural trade-offs when dealing with authentication and authorization?`,
    answer: `The architectural trade-offs in authentication and authorization involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Easy'
  },
  {
    id: 149,
    question: `What are the architectural trade-offs when dealing with canary releases?`,
    answer: `The architectural trade-offs in canary releases involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Medium'
  },
  {
    id: 150,
    question: `What are the architectural trade-offs when dealing with scaling read-heavy systems?`,
    answer: `The architectural trade-offs in scaling read-heavy systems involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Hard'
  },
  {
    id: 151,
    question: `What are the architectural trade-offs when dealing with handling partial failures in distributed systems?`,
    answer: `The architectural trade-offs in handling partial failures in distributed systems involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Hard'
  },
  {
    id: 152,
    question: `What are the architectural trade-offs when dealing with scaling read-heavy systems?`,
    answer: `The architectural trade-offs in scaling read-heavy systems involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Security',
    difficulty: 'Hard'
  },
  {
    id: 153,
    question: `What are the architectural trade-offs when dealing with zero trust security model?`,
    answer: `The architectural trade-offs in zero trust security model involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Easy'
  },
  {
    id: 154,
    question: `What are the architectural trade-offs when dealing with infrastructure as code (iac)?`,
    answer: `The architectural trade-offs in infrastructure as code (iac) involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Security',
    difficulty: 'Hard'
  },
  {
    id: 155,
    question: `What are the architectural trade-offs when dealing with blue-green deployments?`,
    answer: `The architectural trade-offs in blue-green deployments involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Easy'
  },
  {
    id: 156,
    question: `What are the architectural trade-offs when dealing with caching strategies?`,
    answer: `The architectural trade-offs in caching strategies involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Easy'
  },
  {
    id: 157,
    question: `What are the architectural trade-offs when dealing with service orchestration vs choreography?`,
    answer: `The architectural trade-offs in service orchestration vs choreography involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Easy'
  },
  {
    id: 158,
    question: `What are the architectural trade-offs when dealing with domain-driven design (ddd)?`,
    answer: `The architectural trade-offs in domain-driven design (ddd) involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 159,
    question: `What are the architectural trade-offs when dealing with security architecture for apis?`,
    answer: `The architectural trade-offs in security architecture for apis involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'System Design',
    difficulty: 'Medium'
  },
  {
    id: 160,
    question: `What are the architectural trade-offs when dealing with choosing between sql and nosql?`,
    answer: `The architectural trade-offs in choosing between sql and nosql involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Medium'
  },
  {
    id: 161,
    question: `What are the architectural trade-offs when dealing with database sharding?`,
    answer: `The architectural trade-offs in database sharding involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Easy'
  },
  {
    id: 162,
    question: `What are the architectural trade-offs when dealing with rate limiting and throttling?`,
    answer: `The architectural trade-offs in rate limiting and throttling involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Easy'
  },
  {
    id: 163,
    question: `What are the architectural trade-offs when dealing with scaling write-heavy systems?`,
    answer: `The architectural trade-offs in scaling write-heavy systems involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Hard'
  },
  {
    id: 164,
    question: `What are the architectural trade-offs when dealing with log aggregation?`,
    answer: `The architectural trade-offs in log aggregation involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Easy'
  },
  {
    id: 165,
    question: `What are the architectural trade-offs when dealing with service mesh?`,
    answer: `The architectural trade-offs in service mesh involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Medium'
  },
  {
    id: 166,
    question: `What are the architectural trade-offs when dealing with event-driven architecture?`,
    answer: `The architectural trade-offs in event-driven architecture involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Easy'
  },
  {
    id: 167,
    question: `What are the architectural trade-offs when dealing with service decomposition strategies?`,
    answer: `The architectural trade-offs in service decomposition strategies involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Hard'
  },
  {
    id: 168,
    question: `What are the architectural trade-offs when dealing with designing a multi-tenant saas platform?`,
    answer: `The architectural trade-offs in designing a multi-tenant saas platform involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Medium'
  },
  {
    id: 169,
    question: `What are the architectural trade-offs when dealing with latency vs throughput?`,
    answer: `The architectural trade-offs in latency vs throughput involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Medium'
  },
  {
    id: 170,
    question: `What are the architectural trade-offs when dealing with threat modeling?`,
    answer: `The architectural trade-offs in threat modeling involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Medium'
  },
  {
    id: 171,
    question: `What are the architectural trade-offs when dealing with container orchestration with kubernetes?`,
    answer: `The architectural trade-offs in container orchestration with kubernetes involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Hard'
  },
  {
    id: 172,
    question: `What are the architectural trade-offs when dealing with cloud cost optimization?`,
    answer: `The architectural trade-offs in cloud cost optimization involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Medium'
  },
  {
    id: 173,
    question: `What are the architectural trade-offs when dealing with designing for data consistency?`,
    answer: `The architectural trade-offs in designing for data consistency involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Hard'
  },
  {
    id: 174,
    question: `What are the architectural trade-offs when dealing with data partitioning strategies?`,
    answer: `The architectural trade-offs in data partitioning strategies involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Medium'
  },
  {
    id: 175,
    question: `What are the architectural trade-offs when dealing with secrets management?`,
    answer: `The architectural trade-offs in secrets management involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'System Design',
    difficulty: 'Easy'
  },
  {
    id: 176,
    question: `What are the architectural trade-offs when dealing with data partitioning strategies?`,
    answer: `The architectural trade-offs in data partitioning strategies involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'System Design',
    difficulty: 'Easy'
  },
  {
    id: 177,
    question: `What are the architectural trade-offs when dealing with rate limiting and throttling?`,
    answer: `The architectural trade-offs in rate limiting and throttling involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Easy'
  },
  {
    id: 178,
    question: `What are the architectural trade-offs when dealing with secure data storage and transfer?`,
    answer: `The architectural trade-offs in secure data storage and transfer involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Easy'
  },
  {
    id: 179,
    question: `What are the architectural trade-offs when dealing with security architecture for apis?`,
    answer: `The architectural trade-offs in security architecture for apis involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Security',
    difficulty: 'Hard'
  },
  {
    id: 180,
    question: `What are the architectural trade-offs when dealing with designing for data consistency?`,
    answer: `The architectural trade-offs in designing for data consistency involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 181,
    question: `What are the architectural trade-offs when dealing with architecting for high availability?`,
    answer: `The architectural trade-offs in architecting for high availability involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Easy'
  },
  {
    id: 182,
    question: `What are the architectural trade-offs when dealing with versioning apis?`,
    answer: `The architectural trade-offs in versioning apis involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Security',
    difficulty: 'Hard'
  },
  {
    id: 183,
    question: `What are the architectural trade-offs when dealing with scalability strategies?`,
    answer: `The architectural trade-offs in scalability strategies involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Medium'
  },
  {
    id: 184,
    question: `What are the architectural trade-offs when dealing with caching strategies?`,
    answer: `The architectural trade-offs in caching strategies involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'System Design',
    difficulty: 'Hard'
  },
  {
    id: 185,
    question: `What are the architectural trade-offs when dealing with log aggregation?`,
    answer: `The architectural trade-offs in log aggregation involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Medium'
  },
  {
    id: 186,
    question: `What are the architectural trade-offs when dealing with latency vs throughput?`,
    answer: `The architectural trade-offs in latency vs throughput involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Hard'
  },
  {
    id: 187,
    question: `What are the architectural trade-offs when dealing with security architecture for apis?`,
    answer: `The architectural trade-offs in security architecture for apis involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Security',
    difficulty: 'Hard'
  },
  {
    id: 188,
    question: `What are the architectural trade-offs when dealing with ci/cd pipelines?`,
    answer: `The architectural trade-offs in ci/cd pipelines involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Hard'
  },
  {
    id: 189,
    question: `What are the architectural trade-offs when dealing with infrastructure as code (iac)?`,
    answer: `The architectural trade-offs in infrastructure as code (iac) involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Easy'
  },
  {
    id: 190,
    question: `What are the architectural trade-offs when dealing with designing for data consistency?`,
    answer: `The architectural trade-offs in designing for data consistency involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Easy'
  },
  {
    id: 191,
    question: `What are the architectural trade-offs when dealing with blue-green deployments?`,
    answer: `The architectural trade-offs in blue-green deployments involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Easy'
  },
  {
    id: 192,
    question: `What are the architectural trade-offs when dealing with threat modeling?`,
    answer: `The architectural trade-offs in threat modeling involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Hard'
  },
  {
    id: 193,
    question: `What are the architectural trade-offs when dealing with domain-driven design (ddd)?`,
    answer: `The architectural trade-offs in domain-driven design (ddd) involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Hard'
  },
  {
    id: 194,
    question: `What are the architectural trade-offs when dealing with designing for data consistency?`,
    answer: `The architectural trade-offs in designing for data consistency involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'AI Architecture',
    difficulty: 'Hard'
  },
  {
    id: 195,
    question: `What are the architectural trade-offs when dealing with oauth2 and openid connect?`,
    answer: `The architectural trade-offs in oauth2 and openid connect involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'System Design',
    difficulty: 'Hard'
  },
  {
    id: 196,
    question: `What are the architectural trade-offs when dealing with load balancing strategies?`,
    answer: `The architectural trade-offs in load balancing strategies involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Easy'
  },
  {
    id: 197,
    question: `What are the architectural trade-offs when dealing with load balancing strategies?`,
    answer: `The architectural trade-offs in load balancing strategies involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Cloud Architecture',
    difficulty: 'Easy'
  },
  {
    id: 198,
    question: `What are the architectural trade-offs when dealing with cdn usage and edge caching?`,
    answer: `The architectural trade-offs in cdn usage and edge caching involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 199,
    question: `What are the architectural trade-offs when dealing with cdn usage and edge caching?`,
    answer: `The architectural trade-offs in cdn usage and edge caching involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'DevOps',
    difficulty: 'Medium'
  },
  {
    id: 200,
    question: `What are the architectural trade-offs when dealing with security architecture for apis?`,
    answer: `The architectural trade-offs in security architecture for apis involve balancing scalability, maintainability, performance, and complexity depending on business requirements and system constraints.`,
    category: 'Software Architecture',
    difficulty: 'Easy'
  },
  // Existing sample flashcards (as provided)
  {
    id: 201,
    question: 'What is the time complexity of binary search?',
    answer: 'O(log n), where n is the number of elements in the sorted array. This is because with each comparison, we eliminate half of the remaining elements.',
    category: 'Algorithms',
    difficulty: 'Easy',
  },
  {
    id: 202,
    question: 'Explain the concept of Big O notation.',
    answer: 'Big O notation is used to describe the performance or complexity of an algorithm. It represents the worst-case scenario of how long an algorithm takes to execute as a function of the input size.',
    category: 'Computer Science',
    difficulty: 'Medium',
  },
  {
    id: 203,
    question: 'What is the difference between let, const, and var in JavaScript?',
    answer: 'let and const are block-scoped, while var is function-scoped. const cannot be reassigned, while let and var can. var declarations are hoisted, while let and const are not.',
    category: 'JavaScript',
    difficulty: 'Medium',
  },
  {
    id: 204,
    question: 'Explain the concept of React hooks.',
    answer: 'React hooks are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8 to allow using state without writing a class.',
    category: 'React',
    difficulty: 'Medium',
  },
  {
    id: 205,
    question: 'What is the difference between SQL and NoSQL databases?',
    answer: 'SQL databases are relational and use structured query language, while NoSQL databases are non-relational and can store unstructured data. SQL databases are better for complex queries and relationships, while NoSQL databases are better for scalability and flexibility.',
    category: 'Databases',
    difficulty: 'Hard',
  },

  // 20 Questions about React
  {
    id: 206,
    question: 'Explain the Virtual DOM in React and how it improves performance.',
    answer: 'The Virtual DOM is a lightweight copy of the actual DOM. React compares the Virtual DOM with the real DOM to find differences and then updates only the changed parts of the real DOM, minimizing direct manipulation and improving performance.',
    category: 'React',
    difficulty: 'Medium',
  },
  {
    id: 207,
    question: 'What are React Hooks, and name some commonly used ones?',
    answer: 'React Hooks are functions that let you use state and other React features in functional components. Common hooks include `useState`, `useEffect`, `useContext`, `useReducer`, `useCallback`, `useMemo`, and `useRef`.',
    category: 'React',
    difficulty: 'Medium',
  },
  {
    id: 208,
    question: 'Differentiate between controlled and uncontrolled components in React.',
    answer: 'Controlled components have their form data handled by React state, while uncontrolled components handle form data by the DOM itself (using a `ref` to get values). Controlled components are generally preferred for validation and immediate feedback.',
    category: 'React',
    difficulty: 'Medium',
  },
  {
    id: 209,
    question: 'What is JSX, and what are its benefits?',
    answer: 'JSX (JavaScript XML) is a syntax extension for JavaScript recommended by React to describe what the UI should look like. Benefits include making UI code more readable, allowing React to show more useful error messages, and enabling compilation optimizations.',
    category: 'React',
    difficulty: 'Easy',
  },
  {
    id: 210,
    question: 'Explain the concept of component lifecycle methods in class components.',
    answer: 'Lifecycle methods are special methods built into React class components that get executed at different phases of a component\'s existence: mounting (e.g., `componentDidMount`), updating (e.g., `componentDidUpdate`), and unmounting (e.g., `componentWillUnmount`).',
    category: 'React',
    difficulty: 'Hard',
  },
  {
    id: 211,
    question: 'How do you optimize performance in a React application?',
    answer: 'Techniques include using `React.memo` for functional components, `shouldComponentUpdate` for class components, lazy loading components with `React.lazy` and `Suspense`, optimizing image assets, debouncing/throttling event handlers, and using production builds.',
    category: 'React',
    difficulty: 'Hard',
  },
  {
    id: 212,
    question: 'What is Redux, and why is it used with React?',
    answer: 'Redux is a predictable state container for JavaScript apps. It helps manage the application\'s state in a single, centralized store, making state changes predictable and easier to debug, especially in large React applications with complex state management needs.',
    category: 'React',
    difficulty: 'Medium',
  },
  {
    id: 213,
    question: 'Explain the purpose of `useEffect` Hook.',
    answer: '`useEffect` is a Hook that lets you synchronize a component with an external system. It replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` for side effects in functional components.',
    category: 'React',
    difficulty: 'Medium',
  },
  {
    id: 214,
    question: 'How do you handle routing in a React application?',
    answer: 'Routing in React is typically handled using libraries like React Router. It allows for declarative routing, nested routes, and dynamic route matching, enabling single-page applications with multiple views.',
    category: 'React',
    difficulty: 'Easy',
  },
  {
    id: 215,
    question: 'What is Context API in React, and when would you use it?',
    answer: 'The Context API provides a way to pass data through the component tree without having to pass props down manually at every level. It\'s useful for "global" data like user authentication, theme, or preferred language that many components might need.',
    category: 'React',
    difficulty: 'Medium',
  },
  {
    id: 216,
    question: 'What is the purpose of keys in React lists?',
    answer: 'Keys help React identify which items have changed, are added, or are removed. They give a stable identity to elements in the list, improving performance and avoiding issues when reordering list items.',
    category: 'React',
    difficulty: 'Easy',
  },
  {
    id: 217,
    question: 'Describe server-side rendering (SSR) in React and its benefits.',
    answer: 'SSR in React involves rendering React components to HTML on the server before sending them to the client. Benefits include faster initial page load times, better SEO, and improved user experience on slower networks or devices.',
    category: 'React',
    difficulty: 'Hard',
  },
  {
    id: 218,
    question: 'What are Higher-Order Components (HOCs) in React?',
    answer: 'HOCs are a powerful pattern for reusing component logic. They are functions that take a component as an argument and return a new component with enhanced props or behavior.',
    category: 'React',
    difficulty: 'Hard',
  },
  {
    id: 219,
    question: 'Explain the concept of prop drilling and how to avoid it.',
    answer: 'Prop drilling (or "threading") is the process of passing data from a higher-level component to a deeply nested child component by passing it through intermediate components that don\'t directly use the data. It can be avoided using Context API, Redux, or component composition.',
    category: 'React',
    difficulty: 'Medium',
  },
  {
    id: 220,
    question: 'What is `useState` Hook used for?',
    answer: '`useState` is a Hook that allows you to add state variables to functional components. It returns a pair: the current state value and a function that lets you update it.',
    category: 'React',
    difficulty: 'Easy',
  },
  {
    id: 221,
    question: 'How do you handle forms in React?',
    answer: 'Forms are handled by using controlled components, where form element values are bound to component state, and changes are handled by event listeners like `onChange`.',
    category: 'React',
    difficulty: 'Medium',
  },
  {
    id: 222,
    question: 'What are Fragments in React?',
    answer: 'Fragments let you group a list of children without adding extra nodes to the DOM. They are useful when you need to return multiple elements from a component without wrapping them in an unnecessary div.',
    category: 'React',
    difficulty: 'Easy',
  },
  {
    id: 223,
    question: 'Explain the purpose of `useCallback` Hook.',
    answer: '`useCallback` is a Hook that returns a memoized callback function. It helps prevent unnecessary re-renders of child components that rely on callback props by providing a stable reference to the function across renders.',
    category: 'React',
    difficulty: 'Hard',
  },
  {
    id: 224,
    question: 'What is the role of `propTypes` in React?',
    answer: '`propTypes` are used for type checking props passed to a component. They help catch bugs and provide better documentation by ensuring components receive the correct type of data.',
    category: 'React',
    difficulty: 'Medium',
  },
  {
    id: 225,
    question: 'How do you perform API calls in React components?',
    answer: 'API calls are typically performed inside the `useEffect` Hook for functional components (or `componentDidMount` for class components) to fetch data after the component has rendered or when dependencies change.',
    category: 'React',
    difficulty: 'Medium',
  },

  // 20 Questions about Angular
  {
    id: 226,
    question: 'What is Angular, and what are its key features?',
    answer: 'Angular is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google. Key features include declarative templates, dependency injection, a powerful CLI, two-way data binding, and a component-based architecture.',
    category: 'Angular',
    difficulty: 'Easy',
  },
  {
    id: 227,
    question: 'Explain the role of `NgModule` in Angular.',
    answer: '`NgModule` is a declarative way to compile and configure Angular applications. It defines a set of components, directives, pipes, and services that belong together, organizing the application into cohesive blocks of functionality.',
    category: 'Angular',
    difficulty: 'Medium',
  },
  {
    id: 228,
    question: 'What is data binding in Angular, and what are its types?',
    answer: 'Data binding is a mechanism that allows you to link data between the component\'s TypeScript code and the HTML template. Types include Interpolation (`{{ }}`), Property Binding (`[ ]`), Event Binding (`( )`), and Two-way Data Binding (`[( )]`).',
    category: 'Angular',
    difficulty: 'Medium',
  },
  {
    id: 229,
    question: 'Differentiate between components and directives in Angular.',
    answer: 'Components are directives with a template that define a view (a part of the UI). Directives are classes that add additional behavior to elements in your application, without defining a new view themselves.',
    category: 'Angular',
    difficulty: 'Medium',
  },
  {
    id: 230,
    question: 'Explain Dependency Injection (DI) in Angular.',
    answer: 'DI is a design pattern used to deliver dependencies (services, objects) to a class rather than the class creating them itself. Angular\'s DI system simplifies component configuration, promotes reusability, and makes testing easier.',
    category: 'Angular',
    difficulty: 'Hard',
  },
  {
    id: 231,
    question: 'What are Angular services, and when would you use them?',
    answer: 'Services are singleton classes that contain reusable code and logic, typically for data fetching, logging, or business logic. They are injected into components or other services to promote separation of concerns and reusability.',
    category: 'Angular',
    difficulty: 'Easy',
  },
  {
    id: 232,
    question: 'Describe the Angular CLI and its benefits.',
    answer: 'The Angular CLI (Command Line Interface) is a command-line tool that helps you initialize, develop, scaffold, and maintain Angular applications. Benefits include rapid project setup, standardized code generation, and simplified build processes.',
    category: 'Angular',
    difficulty: 'Easy',
  },
  {
    id: 233,
    question: 'What is routing in Angular, and how do you configure it?',
    answer: 'Routing in Angular allows for navigation between different views (components) of a single-page application. It\'s configured using the `RouterModule` and defining routes as an array of objects that map URL paths to components.',
    category: 'Angular',
    difficulty: 'Medium',
  },
  {
    id: 234,
    question: 'Explain the concept of RxJS Observables in Angular.',
    answer: 'Observables are a core part of RxJS, a library for reactive programming. In Angular, they are used for asynchronous operations like HTTP requests, event handling, and real-time data streams, providing powerful operators for data transformation and manipulation.',
    category: 'Angular',
    difficulty: 'Hard',
  },
  {
    id: 235,
    question: 'What are pipes in Angular, and what are their types?',
    answer: 'Pipes are simple functions used in Angular templates to transform data before displaying it. They take an input value and return a new value. Types include pure pipes (computed once) and impure pipes (computed every change detection cycle).',
    category: 'Angular',
    difficulty: 'Medium',
  },
  {
    id: 236,
    question: 'Differentiate between Ahead-of-Time (AOT) and Just-in-Time (JIT) compilation in Angular.',
    answer: 'AOT compilation compiles your Angular HTML and TypeScript code into JavaScript at build time, resulting in faster rendering and smaller bundles. JIT compilation compiles the code in the browser at runtime, which is slower but can be useful during development.',
    category: 'Angular',
    difficulty: 'Hard',
  },
  {
    id: 237,
    question: 'How do you handle forms in Angular?',
    answer: 'Angular provides two approaches for handling forms: Template-driven forms (simpler for basic forms, logic mostly in the template) and Reactive forms (more powerful and scalable for complex forms, logic mostly in the component class).',
    category: 'Angular',
    difficulty: 'Medium',
  },
  {
    id: 238,
    question: 'What are Angular Guards, and when would you use them?',
    answer: 'Angular Guards are interfaces that can be implemented to control access to routes. They allow you to define logic to permit or deny navigation (e.g., `CanActivate`, `CanLoad`, `CanDeactivate`).',
    category: 'Angular',
    difficulty: 'Hard',
  },
  {
    id: 239,
    question: 'Explain change detection in Angular.',
    answer: 'Change detection is the mechanism Angular uses to update the DOM when application data changes. By default, it runs after every asynchronous event (e.g., HTTP request, user interaction) to check if any component data has changed and then updates the view.',
    category: 'Angular',
    difficulty: 'Hard',
  },
  {
    id: 240,
    question: 'What is a decorator in TypeScript/Angular?',
    answer: 'Decorators are special kinds of declarations that can be attached to classes, methods, accessors, properties, or parameters. They provide a way to add annotations and a meta-programming syntax for class declarations and members in Angular (e.g., `@Component`, `@Injectable`).',
    category: 'Angular',
    difficulty: 'Medium',
  },
  {
    id: 241,
    question: 'How do you make an HTTP request in Angular?',
    answer: 'HTTP requests are made using the `HttpClient` service, which is part of the `@angular/common/http` module. You inject it into your service or component and use its methods (e.g., `get`, `post`) to interact with APIs, returning Observables.',
    category: 'Angular',
    difficulty: 'Easy',
  },
  {
    id: 242,
    question: 'What is `ngZone` in Angular?',
    answer: '`ngZone` is a wrapper around Zone.js that helps Angular detect when to run change detection. It enables Angular to automatically detect changes that occur within a zone, even if they originate from outside Angular\'s direct control (e.g., third-party libraries).',
    category: 'Angular',
    difficulty: 'Hard',
  },
  {
    id: 243,
    question: 'Differentiate between `ng-if` and `ng-show`/`ng-hide` (or modern equivalents `*ngIf` and `[hidden]`) in Angular.',
    answer: '`*ngIf` adds or removes elements from the DOM entirely, while `[hidden]` (or `ng-show`/`ng-hide` in AngularJS) uses CSS `display` property to show or hide elements, keeping them in the DOM. `*ngIf` is generally preferred for performance when elements are conditionally rendered.',
    category: 'Angular',
    difficulty: 'Medium',
  },
  {
    id: 244,
    question: 'Explain lazy loading in Angular and its benefits.',
    answer: 'Lazy loading is a technique where modules are loaded on demand, rather than pre-loaded when the application starts. Benefits include faster initial load times for larger applications and improved application performance by reducing the initial bundle size.',
    category: 'Angular',
    difficulty: 'Hard',
  },
  {
    id: 245,
    question: 'What is a Host Listener and Host Binding in Angular?',
    answer: '`@HostListener` is a decorator used to listen for events on the host element of a directive or component. `@HostBinding` is a decorator used to bind properties of the host element to properties of the directive or component class.',
    category: 'Angular',
    difficulty: 'Hard',
  },

  // 20 Questions about .NET
  {
    id: 246,
    question: 'What is the .NET Framework / .NET (Core)?',
    answer: '.NET Framework is a proprietary software framework developed by Microsoft for Windows-only applications. .NET (formerly .NET Core) is an open-source, cross-platform successor to .NET Framework, designed for broader use across Windows, Linux, and macOS.',
    category: '.NET',
    difficulty: 'Easy',
  },
  {
    id: 247,
    question: 'Explain the Common Language Runtime (CLR) in .NET.',
    answer: 'The CLR is the virtual machine component of the .NET Framework and .NET (Core). It manages the execution of .NET programs, providing services like garbage collection, exception handling, security, and type safety, ensuring platform independence.',
    category: '.NET',
    difficulty: 'Medium',
  },
  {
    id: 248,
    question: 'What is CIL (Common Intermediate Language) / MSIL (Microsoft Intermediate Language)?',
    answer: 'CIL/MSIL is a set of CPU-independent instructions into which all .NET languages (like C#, VB.NET) are compiled. The CLR then translates CIL into native machine code at runtime using a Just-In-Time (JIT) compiler.',
    category: '.NET',
    difficulty: 'Medium',
  },
  {
    id: 249,
    question: 'Differentiate between managed and unmanaged code in .NET.',
    answer: 'Managed code is code that runs under the management of the CLR, benefiting from its services like garbage collection and security. Unmanaged code (e.g., C++ code) does not run under CLR control and requires manual memory management.',
    category: '.NET',
    difficulty: 'Medium',
  },
  {
    id: 250,
    question: 'Explain Garbage Collection (GC) in .NET.',
    answer: 'GC is an automatic memory management feature in .NET. It automatically reclaims memory occupied by objects that are no longer referenced by the application, preventing memory leaks and simplifying development.',
    category: '.NET',
    difficulty: 'Medium',
  },
  {
    id: 251,
    question: 'What is ASP.NET Core, and what are its advantages?',
    answer: 'ASP.NET Core is an open-source, cross-platform framework for building modern, cloud-based, internet-connected applications. Advantages include high performance, cross-platform support, unified MVC and Web API, and built-in dependency injection.',
    category: '.NET',
    difficulty: 'Easy',
  },
  {
    id: 252,
    question: 'Describe the role of Kestrel in ASP.NET Core.',
    answer: 'Kestrel is a cross-platform web server for ASP.NET Core. It is the default, high-performance web server that processes HTTP requests directly. It can run standalone or behind a reverse proxy like IIS or Nginx.',
    category: '.NET',
    difficulty: 'Medium',
  },
  {
    id: 253,
    question: 'What is Entity Framework Core (EF Core)?',
    answer: 'EF Core is an open-source, lightweight, and extensible object-relational mapper (ORM) for .NET. It enables developers to work with a database using .NET objects, eliminating the need for most of the data-access code.',
    category: '.NET',
    difficulty: 'Medium',
  },
  {
    id: 254,
    question: 'Explain Middleware in ASP.NET Core.',
    answer: 'Middleware are software components assembled into an application pipeline to handle requests and responses. Each component chooses whether to pass the request to the next component in the pipeline, allowing for modular and configurable request processing.',
    category: '.NET',
    difficulty: 'Hard',
  },
  {
    id: 255,
    question: 'What is Dependency Injection (DI) in .NET Core?',
    answer: 'DI is a built-in feature in .NET Core used to implement Inversion of Control (IoC). It allows you to configure services at startup and then inject them into classes where they are needed, promoting loose coupling and testability.',
    category: '.NET',
    difficulty: 'Medium',
  },
  {
    id: 256,
    question: 'Differentiate between .NET Framework and .NET (Core) for new projects in 2025.',
    answer: 'In 2025, .NET (Core) is the recommended choice for new projects due to its cross-platform nature, better performance, active development, and cloud-native capabilities. .NET Framework is primarily for maintaining legacy Windows-specific applications.',
    category: '.NET',
    difficulty: 'Easy',
  },
  {
    id: 257,
    question: 'What are Blazor and its hosting models?',
    answer: 'Blazor is a .NET framework for building interactive client-side web UI with C# instead of JavaScript. Its hosting models are Blazor Server (UI handled on server via SignalR) and Blazor WebAssembly (UI handled in browser via WebAssembly).',
    category: '.NET',
    difficulty: 'Hard',
  },
  {
    id: 258,
    question: 'Explain Razor Pages in ASP.NET Core.',
    answer: 'Razor Pages is a feature in ASP.NET Core that makes coding page-focused scenarios easier and more productive. It\'s a server-side framework for building web UIs with HTML, CSS, and C# code that share a common layout.',
    category: '.NET',
    difficulty: 'Medium',
  },
  {
    id: 259,
    question: 'What is LINQ (Language Integrated Query) in .NET?',
    answer: 'LINQ is a set of extensions to the .NET languages that allows you to write queries against various data sources (e.g., collections, databases, XML) using a SQL-like syntax directly within your C# or VB.NET code.',
    category: '.NET',
    difficulty: 'Medium',
  },
  {
    id: 260,
    question: 'Describe asynchronous programming in .NET using async/await.',
    answer: 'Asynchronous programming in .NET uses the `async` and `await` keywords to write non-blocking code. This improves application responsiveness by allowing the UI thread (or main thread) to remain free while long-running operations complete in the background.',
    category: '.NET',
    difficulty: 'Medium',
  },
  {
    id: 261,
    question: 'What is a NuGet package?',
    answer: 'NuGet is the package manager for .NET. A NuGet package is a single ZIP file with the `.nupkg` extension that contains compiled code, other related files, and a descriptive manifest (like a package.json for Node.js).',
    category: '.NET',
    difficulty: 'Easy',
  },
  {
    id: 262,
    question: 'How do you configure application settings in .NET Core?',
    answer: 'Application settings in .NET Core are typically managed using `appsettings.json` files. These can be overridden by environment variables or command-line arguments, providing a flexible configuration system for different environments.',
    category: '.NET',
    difficulty: 'Medium',
  },
  {
    id: 263,
    question: 'What is the purpose of `IHostBuilder` in .NET Generic Host?',
    answer: '`IHostBuilder` is used to configure and create a host for your application, allowing you to bootstrap an application that shares common infrastructure (configuration, logging, DI) regardless of whether it\'s a web app, console app, or background service.',
    category: '.NET',
    difficulty: 'Hard',
  },
  {
    id: 264,
    question: 'Differentiate between `IActionResult` and `ActionResult<T>` in ASP.NET Core MVC/Web API.',
    answer: '`IActionResult` is an interface that allows an action method to return various action results (e.g., `ViewResult`, `JsonResult`, `StatusCodeResult`). `ActionResult<T>` is a generic type that allows an action method to return either an `IActionResult` or a specific type `T`, providing type safety while still allowing flexible return types.',
    category: '.NET',
    difficulty: 'Hard',
  },
  {
    id: 265,
    question: 'Explain the concept of .NET MAUI.',
    answer: '.NET MAUI (Multi-platform App UI) is a cross-platform framework for creating native mobile and desktop apps with C# and XAML from a single codebase. It is the evolution of Xamarin.Forms.',
    category: '.NET',
    difficulty: 'Medium',
  },

  // 20 Questions about C#
  {
    id: 266,
    question: 'What are the key features of C#?',
    answer: 'C# is an object-oriented, type-safe, and managed language. Key features include automatic garbage collection, LINQ, async/await, properties, generics, extension methods, and type inference (var keyword).',
    category: 'C#',
    difficulty: 'Easy',
  },
  {
    id: 267,
    question: 'Explain the difference between `class` and `struct` in C#.',
    answer: '`class` is a reference type, allocated on the heap, and passed by reference. `struct` is a value type, allocated on the stack (mostly), and passed by value. Structs are generally used for small data structures that do not require inheritance.',
    category: 'C#',
    difficulty: 'Medium',
  },
  {
    id: 268,
    question: 'What is an interface in C#?',
    answer: 'An interface defines a contract that a class or struct can implement. It contains only declarations of methods, properties, events, or indexers, but not their implementation. A class can implement multiple interfaces.',
    category: 'C#',
    difficulty: 'Medium',
  },
  {
    id: 269,
    question: 'Differentiate between `abstract class` and `interface` in C#.',
    answer: 'An `abstract class` can have both abstract and concrete methods, can have fields and constructors, and a class can inherit from only one abstract class. An `interface` can only have method signatures (pre-C# 8), no fields/constructors, and a class can implement multiple interfaces.',
    category: 'C#',
    difficulty: 'Hard',
  },
  {
    id: 270,
    question: 'Explain method overloading and method overriding in C#.',
    answer: 'Method overloading occurs when a class has multiple methods with the same name but different parameters (different signatures). Method overriding occurs when a derived class provides its own implementation of a method that is already defined in its base class (using `virtual` and `override` keywords).',
    category: 'C#',
    difficulty: 'Medium',
  },
  {
    id: 271,
    question: 'What are Generics in C#, and why are they used?',
    answer: 'Generics allow you to design classes, methods, and interfaces that operate on a specified type without committing to a specific data type at compile time. They improve code reusability, type safety, and performance.',
    category: 'C#',
    difficulty: 'Medium',
  },
  {
    id: 272,
    question: 'What is `LINQ` in C#?',
    answer: 'LINQ (Language Integrated Query) provides a uniform query syntax for retrieving data from various data sources (collections, databases, XML) directly within C# or VB.NET code, combining the power of query capabilities with the robustness of object-oriented programming.',
    category: 'C#',
    difficulty: 'Medium',
  },
  {
    id: 273,
    question: 'Explain `async` and `await` keywords in C# for asynchronous programming.',
    answer: '`async` is a modifier that marks a method as asynchronous, allowing it to contain `await` expressions. `await` is an operator that can only be used inside an `async` method to pause the execution of the method until the awaited asynchronous operation completes, without blocking the calling thread.',
    category: 'C#',
    difficulty: 'Medium',
  },
  {
    id: 274,
    question: 'What are Delegates in C#?',
    answer: 'A delegate is a type that safely encapsulates a method. It is similar to a function pointer in C or C++, but it is type-safe and secure. Delegates are used for event handling, callbacks, and defining custom event handlers.',
    category: 'C#',
    difficulty: 'Hard',
  },
  {
    id: 275,
    question: 'Differentiate between `IEnumerable` and `IQueryable` in C#.',
    answer: '`IEnumerable` processes queries on the client side (in-memory), fetching all data first and then filtering. `IQueryable` processes queries on the server side (database), executing the query on the data source and fetching only the filtered results, which is more efficient for large datasets.',
    category: 'C#',
    difficulty: 'Hard',
  },
  {
    id: 276,
    question: 'What are Extension Methods in C#?',
    answer: 'Extension methods allow you to add new methods to existing types without modifying the original type or creating a new derived type. They are static methods marked with the `this` keyword as the first parameter, making them appear as instance methods.',
    category: 'C#',
    difficulty: 'Medium',
  },
  {
    id: 277,
    question: 'Explain the concept of nullable types in C#.',
    answer: 'Nullable types allow value types (like `int`, `bool`, `DateTime`) to represent `null` values. They are declared by appending a `?` to the type (e.g., `int?`). C# 8.0 introduced nullable reference types for compile-time null-checking.',
    category: 'C#',
    difficulty: 'Medium',
  },
  {
    id: 278,
    question: 'What is `const` vs `readonly` vs `static readonly` in C#?',
    answer: '`const` is a compile-time constant, must be initialized at declaration. `readonly` is a runtime constant, initialized at declaration or in the constructor. `static readonly` is a single instance of a `readonly` field for all instances of a class, initialized once during class loading.',
    category: 'C#',
    difficulty: 'Hard',
  },
  {
    id: 279,
    question: 'What are Attributes in C#?',
    answer: 'Attributes are declarative tags that can be placed on code entities (assemblies, classes, methods, properties, etc.) to associate metadata with them. This metadata can be retrieved at runtime using reflection (e.g., `[Serializable]`, `[Obsolete]`).',
    category: 'C#',
    difficulty: 'Hard',
  },
  {
    id: 280,
    question: 'Explain the `using` statement in C#.',
    answer: 'The `using` statement defines a scope at the end of which an `IDisposable` object is disposed of. It ensures that unmanaged resources (like file handles, database connections) are properly released, even if an exception occurs.',
    category: 'C#',
    difficulty: 'Medium',
  },
  {
    id: 281,
    question: 'What is the purpose of `sealed` keyword in C#?',
    answer: 'The `sealed` keyword prevents a class from being inherited by other classes, or a method from being overridden in a derived class. It\'s used to restrict extensibility.',
    category: 'C#',
    difficulty: 'Medium',
  },
  {
    id: 282,
    question: 'Differentiate between `var` and `dynamic` in C#.',
    answer: '`var` is implicitly typed; the type is determined at compile time but still strictly typed. `dynamic` is truly dynamic; the type checking is deferred until runtime, allowing for more flexible but less compile-time safe code.',
    category: 'C#',
    difficulty: 'Hard',
  },
  {
    id: 283,
    question: 'What are Extension Methods in C#?',
    answer: 'Extension methods enable you to add methods to existing types without creating new derived types, recompiling, or modifying the original type. They are defined as static methods of a static class, with the `this` keyword as the first parameter of the method.',
    category: 'C#',
    difficulty: 'Medium',
  },
  {
    id: 284,
    question: 'Explain the concept of `yield return` in C#.',
    answer: '`yield return` is used to implement iterators. It allows a method to return an `IEnumerable` or `IEnumerator` without creating a temporary collection. The state of the iterator is preserved, and the method\'s execution is resumed from where it left off each time `MoveNext()` is called.',
    category: 'C#',
    difficulty: 'Hard',
  },
  {
    id: 285,
    question: 'What is a `Tuple` in C#?',
    answer: 'A `Tuple` is a data structure introduced in C# 4.0 (and enhanced in C# 7.0 with Value Tuples) that allows you to store a fixed number of elements of different data types. It provides a lightweight way to group related data without creating a custom class or struct.',
    category: 'C#',
    difficulty: 'Medium',
  },

  // 20 Questions about Software Architecture
  {
    id: 286,
    question: 'What is software architecture, and why is it important?',
    answer: 'Software architecture is the fundamental structure of a software system, including its components, their relationships, and the principles/guidelines governing its design and evolution. It\'s important for managing complexity, ensuring quality attributes (scalability, security), guiding development, and facilitating communication.',
    category: 'Software Architecture',
    difficulty: 'Easy',
  },
  {
    id: 287,
    question: 'Explain the difference between monolithic and microservices architectures.',
    answer: 'A monolithic architecture is a single, tightly coupled application. Microservices architecture is a collection of small, independent services, each running in its own process and communicating via lightweight mechanisms. Monoliths are simpler to develop initially; microservices offer better scalability, resilience, and independent deployment.',
    category: 'Software Architecture',
    difficulty: 'Medium',
  },
  {
    id: 288,
    question: 'What are the key non-functional requirements (NFRs) in software architecture?',
    answer: 'NFRs (also known as quality attributes) define how a system performs, rather than what it does. Key NFRs include scalability, performance, security, reliability, maintainability, usability, and availability.',
    category: 'Software Architecture',
    difficulty: 'Medium',
  },
  {
    id: 289,
    question: 'Describe the principles of good software design (e.g., SOLID).',
    answer: 'SOLID principles include: Single Responsibility Principle (SRP), Open/Closed Principle (OCP), Liskov Substitution Principle (LSP), Interface Segregation Principle (ISP), and Dependency Inversion Principle (DIP). These principles promote maintainable, scalable, and understandable code.',
    category: 'Software Architecture',
    difficulty: 'Hard',
  },
  {
    id: 290,
    question: 'Explain the concept of Domain-Driven Design (DDD) in software architecture.',
    answer: 'DDD is an approach to software development that emphasizes defining the domain model based on business logic and ubiquitous language, aiming to make complex designs more manageable by connecting the implementation to an evolving model of the core business concepts.',
    category: 'Software Architecture',
    difficulty: 'Hard',
  },
  {
    id: 291,
    question: 'What is an API Gateway, and why is it used in microservices architecture?',
    answer: 'An API Gateway is a single entry point for clients to access multiple microservices. It handles requests, routing them to the appropriate services, and can provide cross-cutting concerns like authentication, rate limiting, and response aggregation, simplifying client interaction with complex microservice systems.',
    category: 'Software Architecture',
    difficulty: 'Medium',
  },
  {
    id: 292,
    question: 'Describe event-driven architecture (EDA) and its benefits.',
    answer: 'EDA is an architectural paradigm where components communicate by producing and consuming events. Benefits include loose coupling, increased scalability, improved responsiveness, and better fault tolerance, making it suitable for distributed systems and real-time processing.',
    category: 'Software Architecture',
    difficulty: 'Hard',
  },
  {
    id: 293,
    question: 'What is eventual consistency in distributed systems?',
    answer: 'Eventual consistency is a consistency model where, if no new updates are made to a given data item, eventually all accesses to that item will return the last updated value. It prioritizes availability and partition tolerance over immediate consistency (CAP Theorem).',
    category: 'Software Architecture',
    difficulty: 'Hard',
  },
  {
    id: 294,
    question: 'Explain the CAP Theorem.',
    answer: 'The CAP Theorem states that a distributed data store can only simultaneously guarantee two out of three properties: Consistency (all nodes see the same data at the same time), Availability (every request receives a response), and Partition tolerance (system continues to operate despite network partitions).',
    category: 'Software Architecture',
    difficulty: 'Hard',
  },
  {
    id: 295,
    question: 'What is the role of an architect in an Agile environment?',
    answer: 'In an Agile environment, the architect acts as a guiding leader, setting architectural vision, providing technical oversight, facilitating decision-making, ensuring quality attributes are met, and remaining hands-on with code, rather than just delivering upfront designs.',
    category: 'Software Architecture',
    difficulty: 'Medium',
  },
  {
    id: 296,
    question: 'Describe the differences between REST and GraphQL APIs.',
    answer: 'REST is an architectural style for networked applications using standard HTTP methods and resource-based URLs. GraphQL is a query language for your API and a runtime for fulfilling those queries, allowing clients to request exactly the data they need, reducing over-fetching/under-fetching.',
    category: 'Software Architecture',
    difficulty: 'Medium',
  },
  {
    id: 297,
    question: 'What are Design Patterns, and give a few examples?',
    answer: 'Design patterns are reusable solutions to common problems in software design. Examples include Creational (Factory, Singleton), Structural (Adapter, Decorator), and Behavioral (Observer, Strategy).',
    category: 'Software Architecture',
    difficulty: 'Medium',
  },
  {
    id: 298,
    question: 'Explain the concept of Technical Debt and how to manage it.',
    answer: 'Technical debt is the implied cost of additional rework caused by choosing an easy or limited solution now instead of using a better approach that would take longer. It\'s managed by prioritizing repayment, refactoring, and making conscious architectural decisions.',
    category: 'Software Architecture',
    difficulty: 'Medium',
  },
  {
    id: 299,
    question: 'What is Infrastructure as Code (IaC), and why is it important?',
    answer: 'IaC is the management of infrastructure (networks, virtual machines, load balancers) in a descriptive model, using versions like any other source code. It\'s important for consistency, repeatability, faster deployments, and reducing manual errors.',
    category: 'Software Architecture',
    difficulty: 'Medium',
  },
  {
    id: 300,
    question: 'Describe the concept of "fitness functions" in evolutionary architecture.',
    answer: 'Fitness functions (or architectural fitness functions) are objective measures that help ensure architectural characteristics (like performance, security, or maintainability) are maintained as a system evolves. They provide automated architectural governance.',
    category: 'Software Architecture',
    difficulty: 'Hard',
  },
  {
    id: 301,
    question: 'What is the Strangler Fig Pattern in refactoring monoliths?',
    answer: 'The Strangler Fig Pattern is an approach to refactoring a monolithic application by gradually replacing specific functionalities with new services, redirecting traffic from the old to the new system piece by piece until the monolith is "strangled" and eventually replaced.',
    category: 'Software Architecture',
    difficulty: 'Hard',
  },
  {
    id: 302,
    question: 'Explain the concept of Observability in microservices.',
    answer: 'Observability refers to the ability to understand the internal state of a system by examining its external outputs (logs, metrics, traces). It\'s crucial in microservices for debugging and monitoring distributed systems, as traditional debugging tools are ineffective.',
    category: 'Software Architecture',
    difficulty: 'Medium',
  },
  {
    id: 303,
    question: 'What is a Bounded Context in Domain-Driven Design?',
    answer: 'A Bounded Context is a central pattern in DDD. It defines the explicit boundaries within which a domain model is applicable. Inside the boundary, each term in the ubiquitous language has a specific and unambiguous meaning, helping to manage complexity in large systems.',
    category: 'Software Architecture',
    difficulty: 'Hard',
  },
  {
    id: 304,
    question: 'Differentiate between synchronous and asynchronous communication in microservices.',
    answer: 'Synchronous communication (e.g., REST over HTTP) is blocking; the client waits for a response. Asynchronous communication (e.g., message queues like Kafka) is non-blocking; the client sends a message and continues, receiving a response later or through a callback. Asynchronous is generally preferred for resilience in distributed systems.',
    category: 'Software Architecture',
    difficulty: 'Medium',
  },
  {
    id: 305,
    question: 'What is the "Circuit Breaker" pattern, and why is it used?',
    answer: 'The Circuit Breaker pattern is used in distributed systems to prevent cascading failures. When a service experiences repeated failures, the circuit breaker "trips," preventing further calls to that service for a period, giving it time to recover and protecting upstream services.',
    category: 'Software Architecture',
    difficulty: 'Hard',
  },

  // 50 Questions about AI and Other Topics for a Software Architect in 2025
  {
    id: 306,
    question: 'How is AI transforming tech interviews in 2025?',
    answer: 'AI is being used for automated coding tests (e.g., HackerRank for dynamic problems), LLM-evaluated resumes (ATS systems), and behavioral interviews scored by sentiment analysis. [cite: 301]',
    category: 'AI Trends',
    difficulty: 'Easy',
  },
  {
    id: 307,
    question: 'What is the role of LLMs (Large Language Models) in modern software architecture, specifically in 2025?',
    answer: 'LLMs are increasingly being integrated into applications for tasks like natural language processing, content generation, code completion, and conversational AI. Architects need to consider their integration via APIs, data privacy, latency, and cost implications. [cite_start]They are driving demand for high-throughput APIs and vector stores. [cite: 301]',
    category: 'AI Architecture',
    difficulty: 'Medium',
  },
  {
    id: 308,
    question: 'Explain what a Vector Database is and why it\'s becoming critical for AI applications.',
    answer: 'A Vector Database is a specialized database designed to store, manage, and search embeddings (numerical representations of data like text or images). [cite_start]It\'s critical for AI applications like semantic search, recommendation engines, and Retrieval-Augmented Generation (RAG) systems, enabling efficient similarity searches. [cite: 301]',
    category: 'AI Fundamentals',
    difficulty: 'Medium',
  },
  {
    id: 309,
    question: 'What is Retrieval-Augmented Generation (RAG) and why is it important for LLMs?',
    answer: 'RAG systems combine a retrieval component (which fetches relevant information from a knowledge base, often using vector databases) with a generative model (LLM). [cite_start]This is important because it allows LLMs to generate more accurate and up-to-date responses by grounding them in specific data, reducing hallucinations. [cite: 301]',
    category: 'AI Fundamentals',
    difficulty: 'Hard',
  },
  {
    id: 310,
    question: 'Discuss the ethical considerations and governance challenges of deploying AI systems (e.g., bias, compliance with EU AI Act).',
    answer: 'Ethical considerations include algorithmic bias, fairness, transparency, and accountability. [cite_start]Governance challenges involve compliance with regulations like the EU AI Act and GDPR, ensuring data privacy, and mitigating risks like prompt injection and model misuse. [cite: 301]',
    category: 'AI Governance & Ethics',
    difficulty: 'Hard',
  },
  {
    id: 311,
    question: 'How do you secure an AI system against "Prompt Injection" attacks?',
    answer: 'Prompt injection involves manipulating an LLM\'s behavior by crafting malicious inputs. [cite_start]Mitigation strategies include input validation, sanitization, privilege separation, human-in-the-loop oversight, and using specialized security frameworks or guardrails for LLMs. [cite: 301]',
    category: 'AI Security',
    difficulty: 'Hard',
  },
  {
    id: 312,
    question: 'What is MLOps, and why is it essential for software architects in 2025?',
    answer: 'MLOps (Machine Learning Operations) is a set of practices for deploying and maintaining machine learning models in production reliably and efficiently. [cite_start]It\'s essential for architects to manage the lifecycle of AI models, ensure reproducibility, monitor model performance, and handle model drift in dynamic environments. [cite: 301]',
    category: 'MLOps',
    difficulty: 'Medium',
  },
  {
    id: 313,
    question: 'How are containerization technologies (Docker, Kubernetes) used in AI/ML deployments?',
    answer: 'Containers provide a consistent and isolated environment for deploying AI/ML models, ensuring they run reliably across different environments. [cite_start]Kubernetes orchestrates these containers, enabling scalable, fault-tolerant, and automated deployment and management of complex AI/ML workloads. [cite: 301]',
    category: 'DevOps/MLOps',
    difficulty: 'Medium',
  },
  {
    id: 314,
    question: 'What is "model drift" in MLOps, and how do you detect/handle it?',
    answer: 'Model drift occurs when the performance of a deployed ML model degrades over time due due to changes in the underlying data distribution. It\'s detected by monitoring model performance metrics (e.g., accuracy, F1 score) and data characteristics. [cite_start]Handling involves retraining the model with new data. [cite: 301]',
    category: 'MLOps',
    difficulty: 'Hard',
  },
  {
    id: 315,
    question: 'Explain the concept of "TinyML" and its implications for edge computing.',
    answer: 'TinyML refers to the field of machine learning focused on developing and deploying ML models on very low-power, resource-constrained embedded devices (e.g., microcontrollers). Its implication for edge computing is enabling real-time, on-device AI inference without constant cloud connectivity, preserving privacy and reducing latency.',
    category: 'AI Trends',
    difficulty: 'Hard',
  },
  {
    id: 316,
    question: 'What are AI Agents, and how do they differ from traditional chatbots?',
    answer: 'AI Agents are advanced AI systems that can perceive their environment, reason about their goals, make decisions, and take actions autonomously or semi-autonomously to achieve those goals. [cite_start]They differ from traditional chatbots by having a deeper understanding of context, memory, and the ability to perform multi-step tasks and adapt to situations. [cite: 301]',
    category: 'AI Trends',
    difficulty: 'Medium',
  },
  {
    id: 317,
    question: 'How can a software architect "future-proof" their career in the age of AI automation?',
    answer: 'Future-proofing involves focusing on higher-level architectural design, strategic thinking, understanding complex business requirements, and AI governance. [cite_start]It also means adapting to AI co-pilots, leveraging AI tools for increased productivity, and potentially exploring freelance/entrepreneurial paths by building AI tools rather than being replaced by them. [cite: 301]',
    category: 'Career Growth (AI Era)',
    difficulty: 'Easy',
  },
  {
    id: 318,
    question: 'What is the role of Prompt Engineering in 2025, and why is it important for engineers?',
    answer: 'Prompt Engineering involves designing and refining inputs (prompts) to achieve desired outputs from large language models (LLMs). [cite_start]It\'s crucial because the quality of the prompt directly impacts the accuracy, relevance, and creativity of AI-generated content or actions, making it a critical skill for interacting with AI models. [cite: 301]',
    category: 'AI Engineering',
    difficulty: 'Medium',
  },
  {
    id: 319,
    question: 'Discuss the impact of AI on cybersecurity threats and mitigation strategies.',
    answer: 'AI is increasing the sophistication of cyberattacks (e.g., AI-driven phishing, adversarial ML) but also aiding in defense (e.g., anomaly detection, threat intelligence). [cite_start]Mitigation strategies include securing AI pipelines, implementing AI threat modeling, and robust data protection for AI models. [cite: 301]',
    category: 'Cybersecurity',
    difficulty: 'Medium',
  },
  {
    id: 320,
    question: 'How does AI affect mobile app development, particularly in terms of performance and user experience?',
    answer: 'AI enhances mobile apps through features like on-device inference (TinyML), AI-powered UX (e.g., predictive text, personalized recommendations), and optimized performance via AI-driven lazy loading or predictive rendering. [cite_start]Architects need to consider integrating mobile AI APIs for enhanced user experiences. [cite: 301]',
    category: 'Mobile Development (AI)',
    difficulty: 'Medium',
  },
  {
    id: 321,
    question: 'What are the key considerations for scaling an AI-driven API (e.g., an LLM inference API)?',
    answer: 'Considerations include handling high-throughput requests, managing GPU resources, optimizing latency, implementing rate limiting, caching AI responses, load balancing, and potentially utilizing edge computing for inference. [cite: 301]',
    category: 'AI Architecture',
    difficulty: 'Hard',
  },
  {
    id: 322,
    question: 'Explain the concept of "AI Governance" in an enterprise context.',
    answer: 'AI Governance refers to the framework of policies, processes, and standards that guide the ethical, responsible, and compliant development and deployment of AI systems within an organization. [cite_start]It covers aspects like data privacy, bias mitigation, transparency, and accountability. [cite: 301]',
    category: 'AI Governance & Ethics',
    difficulty: 'Medium',
  },
  {
    id: 323,
    question: 'How can AI tools assist in resume optimization and mock interviews for job seekers?',
    answer: 'AI tools can analyze resumes for ATS keywords, suggest improvements based on job descriptions, and simulate mock interviews (e.g., ChatGPT acting as an interviewer) to provide feedback on responses, tone, and system design approaches. [cite: 301]',
    category: 'AI Tools for Career',
    difficulty: 'Easy',
  },
  {
    id: 324,
    question: 'What are "digital twins" and how are they relevant in smart cities or industrial IoT?',
    answer: 'Digital twins are virtual models of physical objects, systems, or processes. They are relevant in smart cities for simulating urban infrastructure, traffic flow, and resource management, and in Industrial IoT for predictive maintenance, process optimization, and real-time monitoring of machinery.',
    category: 'Emerging Tech',
    difficulty: 'Medium',
  },
  {
    id: 325,
    question: 'Discuss the concept of "federated learning" and its privacy implications.',
    answer: 'Federated learning is a machine learning technique that trains an algorithm across multiple decentralized edge devices or servers holding local data samples, without exchanging data samples. This is crucial for privacy, as sensitive data never leaves the local device, making it suitable for healthcare or finance applications.',
    category: 'AI Privacy',
    difficulty: 'Hard',
  },
  {
    id: 326,
    question: 'What is the role of a "Staff Engineer" in an AI-driven company?',
    answer: 'A Staff Engineer in an AI-driven company is typically a highly experienced individual contributor who guides technical strategy, mentors junior engineers, leads complex architectural initiatives (often involving AI integration), and drives significant technical impact across multiple teams, while often remaining hands-on. [cite: 301]',
    category: 'Career Growth (AI Era)',
    difficulty: 'Medium',
  },
  {
    id: 327,
    question: 'How do you measure and monitor the performance of AI models in production?',
    answer: 'Performance is measured by metrics relevant to the model\'s task (e.g., accuracy, precision, recall, F1-score for classification; RMSE for regression) and business impact. [cite_start]Monitoring involves tracking these metrics over time, along with data drift, latency, and resource utilization, often using MLOps platforms like Azure ML or Kubeflow. [cite: 301]',
    category: 'MLOps',
    difficulty: 'Hard',
  },
  {
    id: 328,
    question: 'What is "Explainable AI" (XAI) and why is it gaining importance?',
    answer: 'XAI is a set of tools and techniques that allows humans to understand the output of machine learning models. It\'s gaining importance due to regulatory requirements (e.g., GDPR\'s "right to explanation"), the need for trust in critical AI systems (e.g., healthcare, finance), and for debugging and improving models.',
    category: 'AI Ethics',
    difficulty: 'Medium',
  },
  {
    id: 329,
    question: 'Describe the concept of "Low-Code/No-Code" platforms and their relevance in 2025.',
    answer: 'Low-Code/No-Code platforms allow users to create applications with minimal or no manual coding, often using visual interfaces and drag-and-drop components. [cite_start]They are relevant in 2025 for accelerating application development, empowering citizen developers, and quickly prototyping solutions, including those with AI integrations. [cite: 301]',
    category: 'Development Trends',
    difficulty: 'Easy',
  },
  {
    id: 330,
    question: 'How can Generative AI be used for fine-tuning and prompt engineering in applications?',
    answer: 'Generative AI (LLMs) can be fine-tuned on custom datasets to adapt their behavior for specific tasks or domains. Prompt engineering involves crafting precise instructions to guide these models to produce desired outputs. [cite_start]Both are critical for tailoring AI to application needs. [cite: 301]',
    category: 'AI Engineering',
    difficulty: 'Medium',
  },
  {
    id: 331,
    question: 'What are the key differences between AI, Machine Learning, and Data Science?',
    answer: 'AI is the broad concept of machines performing tasks that typically require human intelligence. ML is a subset of AI focused on algorithms that learn from data. [cite_start]Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data, often encompassing both AI and ML. [cite: 301]',
    category: 'AI Fundamentals',
    difficulty: 'Easy',
  },
  {
    id: 332,
    question: 'Discuss the concept of "Edge AI" and its applications.',
    answer: 'Edge AI involves processing AI workloads directly on edge devices (e.g., IoT devices, mobile phones, smart sensors) rather than in the cloud. [cite_start]Applications include real-time anomaly detection in manufacturing, facial recognition on smart cameras, and personalized experiences on mobile devices, often using TinyML principles. [cite: 301]',
    category: 'AI Architecture',
    difficulty: 'Medium',
  },
  {
    id: 333,
    question: 'How can AI assist in securing distributed systems and protecting against new threats?',
    answer: 'AI can enhance security by detecting anomalies, identifying patterns of attack, automating threat responses, and improving vulnerability scanning. [cite_start]It also helps in securing AI systems themselves against prompt injection and other LLM vulnerabilities. [cite: 301]',
    category: 'Cybersecurity',
    difficulty: 'Hard',
  },
  {
    id: 334,
    question: 'What is "Quantum Computing" and how might it impact software engineering in the future?',
    answer: 'Quantum computing is a new paradigm of computing that uses quantum-mechanical phenomena (superposition, entanglement) to solve problems intractable for classical computers. It might impact software engineering by enabling breakthroughs in areas like cryptography, materials science, drug discovery, and complex optimization problems, requiring new algorithms and programming models.',
    category: 'Emerging Tech',
    difficulty: 'Hard',
  },
  {
    id: 335,
    question: 'Explain the concept of "Observability" in the context of AI/ML systems.',
    answer: 'Observability in AI/ML systems is about understanding how models behave in production, beyond just traditional application monitoring. [cite_start]It involves collecting and analyzing data related to model inputs/outputs, predictions, confidence scores, fairness metrics, and resource utilization to diagnose issues like drift, bias, or performance degradation. [cite: 301]',
    category: 'MLOps',
    difficulty: 'Medium',
  },
  {
    id: 336,
    question: 'What are the challenges of data privacy and data governance when working with AI models?',
    answer: 'Challenges include complying with regulations (GDPR, CCPA), anonymizing sensitive data, managing data access, ensuring data lineage, and preventing data leakage or misuse, especially when training or deploying models that handle personal information. [cite: 301]',
    category: 'AI Governance & Ethics',
    difficulty: 'Medium',
  },
  {
    id: 337,
    question: 'How do you approach "AI Threat Modeling" for new AI-integrated applications?',
    answer: 'AI Threat Modeling involves identifying potential vulnerabilities and attack vectors specific to AI components (e.g., prompt injection, model inversion, data poisoning, adversarial examples) and designing mitigations from the outset. [cite_start]It\'s an extension of traditional threat modeling but with AI-specific considerations. [cite: 301]',
    category: 'AI Security',
    difficulty: 'Hard',
  },
  {
    id: 338,
    question: 'What is the role of "AI Co-Pilots" in modern software development workflows?',
    answer: 'AI Co-Pilots (like GitHub Copilot) assist developers by generating code suggestions, completing functions, writing tests, and explaining code snippets. [cite_start]Their role is to increase developer productivity, reduce boilerplate, and accelerate coding tasks, shifting developers to focus on higher-level design and problem-solving. [cite: 301]',
    category: 'AI Tools for Dev',
    difficulty: 'Easy',
  },
  {
    id: 339,
    question: 'Discuss the trends in "Decentralized AI" (e.g., Web3 AI, AI on blockchain) and their implications.',
    answer: 'Decentralized AI aims to address issues like centralization of power, data privacy, and censorship in AI. Trends include using blockchain for model provenance, decentralized data marketplaces, and distributed AI training. Implications include enhanced data security, new monetization models for AI, and transparent AI governance.',
    category: 'Emerging Tech',
    difficulty: 'Hard',
  },
  {
    id: 340,
    question: 'How is CI/CD changing for AI/ML projects (CI/CD for MLOps)?',
    answer: 'CI/CD for MLOps extends traditional CI/CD to include continuous integration of data and models, continuous delivery of models to production, and continuous monitoring of model performance and data drift. [cite_start]This involves automating model retraining and deployment pipelines. [cite: 301]',
    category: 'DevOps/MLOps',
    difficulty: 'Hard',
  },
  {
    id: 341,
    question: 'What are "Synthetic Data Generators" and their use cases in AI development?',
    answer: 'Synthetic data generators create artificial datasets that mimic the statistical properties of real data. Use cases include augmenting small datasets, protecting privacy (by not using real sensitive data), balancing imbalanced datasets, and testing AI models in various scenarios without real-world constraints.',
    category: 'AI Engineering',
    difficulty: 'Medium',
  },
  {
    id: 342,
    question: 'Describe "Transfer Learning" in AI and why it\'s beneficial.',
    answer: 'Transfer learning is a machine learning method where a model developed for a task is reused as the starting point for a model on a second task. It\'s beneficial because it allows models to be trained with smaller datasets and less computational power, leveraging knowledge learned from large existing datasets or models.',
    category: 'AI Fundamentals',
    difficulty: 'Medium',
  },
  {
    id: 343,
    question: 'How do you manage "model versioning" and "experiment tracking" in MLOps?',
    answer: 'Model versioning involves tracking different iterations of an ML model along with their associated data and code, ensuring reproducibility. Experiment tracking involves logging all parameters, metrics, and artifacts of each ML experiment to compare and reproduce results. [cite_start]Tools like MLflow or DVC are often used. [cite: 301]',
    category: 'MLOps',
    difficulty: 'Hard',
  },
  {
    id: 344,
    question: 'What are "Conversational AI Platforms" and their architectural components?',
    answer: 'Conversational AI platforms enable natural language interactions between humans and computers (e.g., chatbots, voice assistants). Architectural components typically include Natural Language Understanding (NLU), Natural Language Generation (NLG), Dialogue Management, Integrations, and often leverage LLMs for enhanced capabilities.',
    category: 'AI Architecture',
    difficulty: 'Medium',
  },
  {
    id: 345,
    question: 'Discuss the concept of "AI Fairness" and strategies to mitigate bias.',
    answer: 'AI Fairness refers to ensuring that AI systems produce equitable outcomes across different demographic groups and do not perpetuate or amplify existing societal biases. [cite_start]Strategies include diverse data collection, bias detection tools, debiasing algorithms, and human oversight in model deployment and monitoring. [cite: 301]',
    category: 'AI Ethics',
    difficulty: 'Hard',
  },
  {
    id: 346,
    question: 'What are "Observability Platforms" and their importance in modern software systems?',
    answer: 'Observability platforms (e.g., Datadog, Splunk) collect and analyze telemetry data (logs, metrics, traces) from distributed systems. [cite_start]They are crucial for understanding system behavior, identifying root causes of issues, and proactively optimizing performance in complex, cloud-native environments. [cite: 301]',
    category: 'DevOps',
    difficulty: 'Medium',
  },
  {
    id: 347,
    question: 'How can AI be used for "Automated Testing" in software development?',
    answer: 'AI can enhance automated testing by generating test cases, identifying critical test paths, predicting defect likelihood, and even creating synthetic test data. [cite_start]LLMs can also assist in writing unit tests or transforming requirements into test scenarios. [cite: 301]',
    category: 'AI Tools for Dev',
    difficulty: 'Medium',
  },
  {
    id: 348,
    question: 'What is the "Transformer Architecture" in deep learning, and why is it significant?',
    answer: 'The Transformer architecture is a neural network architecture introduced in 2017, primarily known for its "attention mechanism." [cite_start]It\'s significant because it revolutionized natural language processing (NLP) and powers most modern LLMs (like GPT, BERT), enabling them to process sequences more efficiently and understand long-range dependencies in text. [cite: 301]',
    category: 'AI Fundamentals',
    difficulty: 'Hard',
  },
  {
    id: 349,
    question: 'Discuss "Serverless Computing" and its use cases for AI workloads.',
    answer: 'Serverless computing (e.g., AWS Lambda, Azure Functions) allows developers to run code without provisioning or managing servers. [cite_start]For AI workloads, it\'s useful for event-driven inference, batch processing of data, and microservices that wrap AI models, offering scalability and pay-per-execution cost models. [cite: 301]',
    category: 'Cloud Architecture',
    difficulty: 'Medium',
  },
  {
    id: 350,
    question: 'What are "Adversarial Examples" in AI and why are they a security concern?',
    answer: 'Adversarial examples are inputs to AI models (e.g., images, text) that have been intentionally perturbed slightly, causing the model to misclassify or make incorrect predictions, even though the changes are imperceptible to humans. [cite_start]They are a security concern because they can be used to bypass AI-powered security systems or mislead autonomous systems. [cite: 301]',
    category: 'AI Security',
    difficulty: 'Hard',
  },
  {
    id: 351,
    question: 'Explain the concept of "Data Lineage" in data platforms.',
    answer: 'Data lineage describes the lifecycle of data, including its origin, where it moves over time, and what transformations it undergoes. It\'s crucial for data governance, auditing, debugging data pipelines, and ensuring data quality and compliance.',
    category: 'Data Engineering',
    difficulty: 'Medium',
  },
  {
    id: 352,
    question: 'What are "Feature Stores" in MLOps, and why are they used?',
    answer: 'Feature Stores are centralized repositories for managing, serving, and monitoring machine learning features. [cite_start]They are used to ensure consistency of features between training and inference, reduce data engineering overhead, and facilitate feature reuse across different ML models and teams. [cite: 301]',
    category: 'MLOps',
    difficulty: 'Hard',
  },
  {
    id: 353,
    question: 'How do you apply the "Single Responsibility Principle" (SRP) to AI components or services?',
    answer: 'Applying SRP to AI means each AI component or microservice should have only one reason to change. For example, one service might be responsible for generating embeddings, another for running inference on a specific model, and another for managing model versions. [cite_start]This promotes modularity and maintainability. [cite: 301]',
    category: 'Software Architecture',
    difficulty: 'Medium',
  },
  {
    id: 354,
    question: 'Discuss the challenges of "Real-time AI Inference" and architectural solutions.',
    answer: 'Challenges include low latency requirements, high throughput, resource management (especially GPUs), and network constraints. [cite_start]Architectural solutions involve using edge AI, optimized model serving frameworks, efficient data pipelines, and distributed inference engines. [cite: 301]',
    category: 'AI Architecture',
    difficulty: 'Hard',
  },
  {
    id: 355,
    question: 'What is "Synthetic Data Generation" using Generative AI, and its benefits?',
    answer: 'Synthetic data generation uses generative AI models (like GANs or VAEs) to create artificial data that statistically resembles real-world data but is not derived from it. [cite_start]Benefits include addressing data privacy concerns, augmenting limited datasets, and creating diverse test scenarios. [cite: 301]',
    category: 'AI Engineering',
    difficulty: 'Medium',
  },
  {
    id: 356,
    question: 'Explain "Data Mesh" architecture and its relevance for large data organizations.',
    answer: 'Data Mesh is a decentralized socio-technical approach to data management where data is treated as a product, owned by domain-oriented teams, and served as self-service data products. It\'s relevant for large, complex organizations to scale data initiatives, improve data quality, and enable faster analytics and AI development.',
    category: 'Data Engineering',
    difficulty: 'Hard',
  },
  {
    id: 357,
    question: 'How does "FinTech" leverage AI and what are the architectural considerations?',
    answer: 'FinTech leverages AI for fraud detection, algorithmic trading, personalized financial advice, and risk assessment. [cite_start]Architectural considerations include high-performance data processing, robust security and compliance, explainability (XAI) for regulatory audits, and real-time inference capabilities. [cite: 301]',
    category: 'Industry Applications (AI)',
    difficulty: 'Medium',
  },
  {
    id: 358,
    question: 'What is "Model Governance" in MLOps, and why is it important?',
    answer: 'Model governance in MLOps refers to the processes and policies for ensuring that ML models are developed, deployed, and managed in a responsible, ethical, and compliant manner throughout their lifecycle. [cite_start]It\'s crucial for managing risk, ensuring fairness, and maintaining transparency. [cite: 301]',
    category: 'MLOps',
    difficulty: 'Medium',
  },
  {
    id: 359,
    question: 'Discuss the concept of "Edge Intelligence" in IoT architectures.',
    answer: 'Edge intelligence extends traditional IoT by embedding more advanced processing, analytics, and AI capabilities directly into edge devices or gateways. [cite_start]This reduces reliance on cloud connectivity, lowers latency, improves data privacy, and enables faster decision-making closer to the data source. [cite: 301]',
    category: 'IoT/Edge Computing',
    difficulty: 'Medium',
  },
  {
    id: 360,
    question: 'How do you handle "version control" for AI models and data in MLOps?',
    answer: 'Version control for AI models involves tracking different model artifacts, parameters, and code versions. For data, it means tracking changes to datasets used for training and testing. [cite_start]Tools like DVC (Data Version Control) integrate with Git to manage these versions, ensuring reproducibility. [cite: 301]',
    category: 'MLOps',
    difficulty: 'Hard',
  },
  {
    id: 361,
    question: 'What is "Human-in-the-Loop AI" and its importance?',
    answer: 'Human-in-the-Loop (HITL) AI is a paradigm where human intelligence is integrated into an AI system\'s workflow, often for tasks that AI struggles with or where human oversight is critical (e.g., labeling data, reviewing AI decisions, handling edge cases). [cite_start]It\'s important for improving AI accuracy, ensuring fairness, and maintaining trust in complex systems. [cite: 301]',
    category: 'AI Engineering',
    difficulty: 'Medium',
  },
  {
    id: 362,
    question: 'Describe "ChatOps" and its relevance for modern SRE/DevOps teams.',
    answer: 'ChatOps is a collaboration model that combines chat tools, bots, and development tools to manage operational tasks within a chat interface. It\'s relevant for SRE/DevOps teams as it enables faster incident response, better team communication, and automation of routine tasks directly from their communication platform.',
    category: 'DevOps',
    difficulty: 'Medium',
  },
  {
    id: 363,
    question: 'What are "Knowledge Graphs" and how do they enhance AI applications?',
    answer: 'Knowledge Graphs represent information as a network of interconnected entities and relationships. They enhance AI applications by providing structured background knowledge that AI models can leverage for better understanding, reasoning, and generating more coherent and accurate responses, especially in complex domains.',
    category: 'AI Fundamentals',
    difficulty: 'Hard',
  },
  {
    id: 364,
    question: 'How do you implement "Cost Optimization" in cloud-native architectures with AI workloads?',
    answer: 'Cost optimization involves right-sizing instances (especially for GPUs), leveraging spot instances, implementing autoscaling, optimizing data storage for AI assets, choosing cost-effective AI services, and monitoring resource usage. [cite: 301]',
    category: 'Cloud Architecture',
    difficulty: 'Medium',
  },
  {
    id: 365,
    question: 'Discuss the concept of "AI Security Audits" and their methodology.',
    answer: 'AI Security Audits involve systematically reviewing AI systems for vulnerabilities, potential biases, data privacy risks, and compliance issues. [cite_start]Methodology includes threat modeling, adversarial testing, code reviews for AI-specific flaws, and data lineage analysis. [cite: 301]',
    category: 'AI Security',
    difficulty: 'Hard',
  },
  {
    id: 366,
    question: 'What is "WebAssembly" (Wasm) and its implications for web development in 2025?',
    answer: 'WebAssembly is a binary instruction format for a stack-based virtual machine. It allows high-performance code written in languages like C++, Rust, or C# (via Blazor WebAssembly) to run in web browsers. [cite_start]Implications include near-native performance for complex web applications, enabling new types of web experiences, and expanding the language options for web development. [cite: 301]',
    category: 'Web Development Trends',
    difficulty: 'Medium',
  },
  {
    id: 367,
    question: 'Explain the difference between "Strong AI" and "Weak AI".',
    answer: 'Weak AI (or Narrow AI) is AI trained and focused to perform specific tasks (e.g., Siri, self-driving cars, ChatGPT). Strong AI (or Artificial General Intelligence - AGI) is theoretical AI that can perform any intellectual task that a human being can, possessing general cognitive abilities. Most AI developed today is Weak AI.',
    category: 'AI Fundamentals',
    difficulty: 'Easy',
  },
  {
    id: 368,
    question: 'How are "Graph Databases" used in AI applications (e.g., fraud detection, recommendation engines)?',
    answer: 'Graph databases store data as nodes and edges, representing relationships directly. [cite_start]They are used in AI for applications where relationships are crucial, such as fraud detection (identifying suspicious connections), recommendation engines (finding related users/items), social networks, and knowledge graphs, enabling efficient traversal and analysis of connections. [cite: 301]',
    category: 'Data Engineering',
    difficulty: 'Medium',
  },
  {
    id: 369,
    question: 'What is "Responsible AI" and why is it crucial for architects?',
    answer: 'Responsible AI is an approach to developing, deploying, and managing AI systems in a manner that is ethical, fair, transparent, accountable, and respects privacy. [cite_start]It\'s crucial for architects to embed these principles into system design to build trustworthy and socially beneficial AI solutions. [cite: 301]',
    category: 'AI Ethics',
    difficulty: 'Medium',
  },
  {
    id: 370,
    question: 'Discuss the challenges of "Legacy System Modernization" in large enterprises and architectural strategies.',
    answer: 'Challenges include high cost, risk of disruption, technical debt, lack of documentation, and skill gaps. [cite_start]Strategies include the Strangler Fig Pattern, wrapper services, re-platforming, re-hosting, and gradually introducing modern architectural patterns like microservices or cloud-native components. [cite: 301]',
    category: 'Software Architecture',
    difficulty: 'Medium',
  },
  {
    id: 371,
    question: 'What is "Continuous Experimentation" in MLOps, and why is it important?',
    answer: 'Continuous experimentation involves systematically testing and evaluating different ML models, features, or hyperparameter configurations in production or near-production environments to continuously improve model performance and business outcomes. [cite_start]It\'s important for driving iterative improvements and adapting models to changing data. [cite: 301]',
    category: 'MLOps',
    difficulty: 'Hard',
  },
  {
    id: 372,
    question: 'How do you ensure "Data Quality" for AI/ML training data?',
    answer: 'Ensuring data quality involves data validation (checking for completeness, accuracy, consistency), cleaning (handling missing values, outliers), transformation, and establishing data governance policies. [cite_start]Poor data quality directly impacts AI model performance and reliability. [cite: 301]',
    category: 'Data Engineering',
    difficulty: 'Medium',
  },
  {
    id: 373,
    question: 'Describe "Cloud-Native Architecture" and its benefits for AI applications.',
    answer: 'Cloud-native architecture designs applications to take full advantage of cloud computing benefits (elasticity, resilience, scalability, agility). [cite_start]For AI, this means leveraging cloud-managed services (e.g., managed ML platforms, serverless functions, big data services) for rapid deployment, scaling AI workloads, and cost efficiency. [cite: 301]',
    category: 'Cloud Architecture',
    difficulty: 'Medium',
  },
  {
    id: 374,
    question: 'What are "Differential Privacy" techniques in AI, and when are they used?',
    answer: 'Differential Privacy is a system for openly sharing information about data sets by describing patterns of groups within the dataset while withholding information about individuals in the dataset. It\'s used when privacy is paramount, for example, in medical research or sensitive user data, to protect individual privacy while still enabling data analysis for AI model training.',
    category: 'AI Privacy',
    difficulty: 'Hard',
  },
  {
    id: 375,
    question: 'How are "Digital Ethics" and "AI Ethics" related and important for a software architect?',
    answer: 'Digital Ethics is the broader field concerning moral principles and values governing the use of digital technologies. AI Ethics is a subset focusing specifically on AI systems. [cite_start]Both are crucial for architects to ensure they design systems that are fair, transparent, secure, and beneficial to society, mitigating risks like bias, surveillance, and misuse. [cite: 301]',
    category: 'AI Ethics',
    difficulty: 'Medium',
  },
  {
    id: 376,
    question: 'Explain "Data Lakehouses" and their role in modern data architectures.',
    answer: 'Data Lakehouses combine the flexibility and cost-effectiveness of data lakes (storing raw, unstructured data) with the data management features of data warehouses (structured data, ACID transactions, schema enforcement). They aim to offer the best of both worlds for diverse analytics and AI workloads.',
    category: 'Data Engineering',
    difficulty: 'Hard',
  },
  {
    id: 377,
    question: 'What is "API Security" in an AI context, specifically concerning LLM APIs?',
    answer: 'API Security in an AI context involves protecting the endpoints that expose AI models (especially LLMs) from unauthorized access, misuse, and specific AI-related vulnerabilities like prompt injection, data leakage, and adversarial attacks. [cite_start]It includes authentication, authorization, rate limiting, and input validation. [cite: 301]',
    category: 'AI Security',
    difficulty: 'Medium',
  },
  {
    id: 378,
    question: 'How do you approach "A/B Testing" for AI models in production?',
    answer: 'A/B testing for AI models involves deploying different versions of a model or different AI features to distinct user segments to compare their performance (e.g., conversion rates, engagement) in a live environment. [cite_start]This helps optimize model impact and validate improvements. [cite: 301]',
    category: 'MLOps',
    difficulty: 'Medium',
  },
  {
    id: 379,
    question: 'What are "Foundation Models" and their significance in AI development?',
    answer: 'Foundation Models are very large AI models (like GPT-3, BERT, DALL-E) trained on a massive amount of broad data, capable of performing a wide range of tasks and adaptable to many downstream applications through fine-tuning or prompt engineering. [cite_start]Their significance lies in democratizing AI development by providing powerful pre-trained bases for various use cases. [cite: 301]',
    category: 'AI Fundamentals',
    difficulty: 'Medium',
  },
  {
    id: 380,
    question: 'Discuss the "Build vs. Buy" decision for AI capabilities in 2025.',
    answer: 'The "Build vs. Buy" decision for AI involves choosing between developing AI models/systems in-house or leveraging existing AI services/APIs (e.g., OpenAI, cloud AI services). [cite_start]Factors include core business differentiation, available talent, development cost, time to market, maintenance burden, and data sensitivity. [cite: 301]',
    category: 'AI Strategy',
    difficulty: 'Medium',
  },
  {
    id: 381,
    question: 'How is "Green AI" or "Sustainable AI" influencing architectural decisions?',
    answer: 'Green AI focuses on developing AI models and systems with reduced environmental impact, primarily by minimizing their energy consumption and carbon footprint. [cite_start]This influences architectural decisions by prioritizing efficient algorithms, smaller models, optimized hardware utilization, and cloud regions powered by renewable energy. [cite: 301]',
    category: 'AI Ethics',
    difficulty: 'Hard',
  },
  {
    id: 382,
    question: 'What is "ML Feature Engineering" and its importance?',
    answer: 'ML Feature Engineering is the process of transforming raw data into features that better represent the underlying problem to a machine learning model. It\'s important because the quality of features significantly impacts model performance, often more than the choice of algorithm itself.',
    category: 'MLOps',
    difficulty: 'Medium',
  },
  {
    id: 383,
    question: 'Describe "Cloud Governance" and its critical components.',
    answer: 'Cloud governance is the framework of policies, processes, and tools used to manage and control an organization\'s cloud resources. Critical components include cost management, security and compliance, resource provisioning, identity and access management, and performance optimization.',
    category: 'Cloud Architecture',
    difficulty: 'Medium',
  },
  {
    id: 384,
    question: 'How do you manage "Data Versioning" in complex AI/ML projects?',
    answer: 'Data versioning involves tracking changes to datasets used for training and testing ML models, ensuring reproducibility of experiments and models. It allows data scientists to refer back to specific data snapshots, crucial for debugging and auditing model behavior. [cite_start]Tools like DVC (Data Version Control) are often used. [cite: 301]',
    category: 'Data Engineering',
    difficulty: 'Hard',
  },
  {
    id: 385,
    question: 'What is the role of "Experiment Tracking" in MLOps?',
    answer: 'Experiment tracking involves systematically logging and managing all relevant information (parameters, metrics, code versions, data used, results) for each machine learning experiment. [cite_start]It\'s crucial for reproducibility, comparison of models, and understanding the impact of changes during development. [cite: 301]',
    category: 'MLOps',
    difficulty: 'Medium',
  },
];

app.get('/api/flashcards', (_req, res) => {
  res.json(flashcards);
});

app.listen(3001, () => {
  console.log('API running at http://localhost:3001');
});
