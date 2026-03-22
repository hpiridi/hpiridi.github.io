// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "Career timeline of Hari Prasad Piridi — Director of Data Science at Walmart, former Lead Data Scientist at Microsoft, with education from BITS Pilani and technical skills in ML, GNNs, and LLMs.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed publications by Hari Prasad Piridi in machine learning, graph neural networks, recommender systems, and applied AI.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-patents",
          title: "Patents",
          description: "Granted and pending US patents by Hari Prasad Piridi in machine learning, data science, and cloud computing systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/patents/";
          },
        },{id: "nav-bookshelf",
          title: "Bookshelf",
          description: "Curated reading list of books on machine learning, deep learning, graph neural networks, LLMs, and fiction recommended by Hari Prasad Piridi.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "post-welcome-to-my-blog",
        
          title: "Welcome to My Blog",
        
        description: "First post on my blog — covering what to expect: production ML at scale, research deep dives into GNNs and LLMs, and lessons from leading data science teams.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/welcome/";
          
        },
      },{id: "books-ai-engineering-building-applications-with-foundation-models",
          title: 'AI Engineering: Building Applications with Foundation Models',
          description: "Chip Huyen&#39;s guide to building with foundation models — real-world frameworks for evaluation, prompt engineering, and RAG from hard-won experience.",
          section: "Books",handler: () => {
              window.location.href = "/books/ai_engineering/";
            },},{id: "books-approaching-almost-any-machine-learning-problem",
          title: 'Approaching (Almost) Any Machine Learning Problem',
          description: "Actionable ML recipes from a Kaggle Grandmaster — cross-validation strategies, feature engineering patterns, and practical techniques for real problems.",
          section: "Books",handler: () => {
              window.location.href = "/books/approaching_almost_any_ml_problem/";
            },},{id: "books-artificial-intelligence-a-modern-approach",
          title: 'Artificial Intelligence: A Modern Approach',
          description: "The definitive AI textbook by Russell and Norvig — a comprehensive map from search and reasoning to probabilistic models and game theory.",
          section: "Books",handler: () => {
              window.location.href = "/books/artificial_intelligence_modern_approach/";
            },},{id: "books-build-a-large-language-model-from-scratch",
          title: 'Build a Large Language Model (From Scratch)',
          description: "Build a working LLM step by step in PyTorch — Raschka walks you through attention, tokenization, and pretraining to truly understand transformers.",
          section: "Books",handler: () => {
              window.location.href = "/books/build_large_language_model_from_scratch/";
            },},{id: "books-building-llms-for-production",
          title: 'Building LLMs for Production',
          description: "A hands-on guide to making LLMs reliable in production — prompt engineering patterns, RAG architectures, and fine-tuning strategies that work.",
          section: "Books",handler: () => {
              window.location.href = "/books/building_llms_for_production/";
            },},{id: "books-deep-learning",
          title: 'Deep Learning',
          description: "The definitive deep learning textbook by Goodfellow, Bengio, and Courville — essential reading on optimization, regularization, and generative models.",
          section: "Books",handler: () => {
              window.location.href = "/books/deep_learning/";
            },},{id: "books-deep-learning-on-graphs",
          title: 'Deep Learning on Graphs',
          description: "A rigorous treatment of GNNs from spectral to spatial methods, with advanced coverage of scalability and robustness for real-world graph problems.",
          section: "Books",handler: () => {
              window.location.href = "/books/deep_learning_on_graphs/";
            },},{id: "books-designing-machine-learning-systems",
          title: 'Designing Machine Learning Systems',
          description: "Essential reading on production ML systems — covers data distribution shifts, feature stores, monitoring, and the full lifecycle beyond model accuracy.",
          section: "Books",handler: () => {
              window.location.href = "/books/designing_machine_learning_systems/";
            },},{id: "books-graph-neural-networks-foundations-frontiers-and-applications",
          title: 'Graph Neural Networks: Foundations, Frontiers, and Applications',
          description: "A comprehensive multi-author survey of the GNN landscape — from theoretical foundations to industrial applications in fraud detection and drug discovery.",
          section: "Books",handler: () => {
              window.location.href = "/books/gnn_foundations_frontiers_applications/";
            },},{id: "books-graph-neural-networks-in-action",
          title: 'Graph Neural Networks in Action',
          description: "Hands-on GNN projects with PyTorch Geometric — build recommendation systems and molecular models to cement your graph learning understanding.",
          section: "Books",handler: () => {
              window.location.href = "/books/graph_neural_networks_in_action/";
            },},{id: "books-graph-representation-learning",
          title: 'Graph Representation Learning',
          description: "Hamilton&#39;s concise, freely available primer on node embeddings, message passing, and graph generation — the ideal first book on GNNs.",
          section: "Books",handler: () => {
              window.location.href = "/books/graph_representation_learning/";
            },},{id: "books-hands-on-large-language-models",
          title: 'Hands-On Large Language Models',
          description: "Alammar and Grootendorst break down embeddings, attention, and text generation with clear visual explanations — ideal for building LLM intuition.",
          section: "Books",handler: () => {
              window.location.href = "/books/hands_on_large_language_models/";
            },},{id: "books-an-introduction-to-statistical-learning",
          title: 'An Introduction to Statistical Learning',
          description: "The gold standard introduction to statistical learning — covers model selection, resampling, and the bias-variance tradeoff with hands-on Python code.",
          section: "Books",handler: () => {
              window.location.href = "/books/introduction_to_statistical_learning/";
            },},{id: "books-llm-engineer-39-s-handbook",
          title: 'LLM Engineer&amp;#39;s Handbook',
          description: "A practical guide to shipping LLMs — covers data pipelines, evaluation frameworks, and deployment patterns for building LLM-powered products.",
          section: "Books",handler: () => {
              window.location.href = "/books/llm_engineers_handbook/";
            },},{id: "books-mathematics-for-machine-learning",
          title: 'Mathematics for Machine Learning',
          description: "A rigorous yet accessible guide to the math behind ML — linear algebra, calculus, and optimization explained through the lens of real algorithms.",
          section: "Books",handler: () => {
              window.location.href = "/books/mathematics_for_machine_learning/";
            },},{id: "books-pattern-recognition-and-machine-learning",
          title: 'Pattern Recognition and Machine Learning',
          description: "Bishop&#39;s masterwork on Bayesian inference, graphical models, and expectation-maximization — the book that builds real depth in machine learning.",
          section: "Books",handler: () => {
              window.location.href = "/books/pattern_recognition_machine_learning/";
            },},{id: "books-reinforcement-learning-an-introduction",
          title: 'Reinforcement Learning: An Introduction',
          description: "Sutton and Barto&#39;s classic on RL — builds intuition from multi-armed bandits to policy gradients with remarkable clarity and progressive depth.",
          section: "Books",handler: () => {
              window.location.href = "/books/reinforcement_learning_introduction/";
            },},{id: "books-atlas-shrugged",
          title: 'Atlas Shrugged',
          description: "Rand&#39;s epic thought experiment on what happens when the creators stop creating — a sprawling, ambitious novel about individualism and society.",
          section: "Books",handler: () => {
              window.location.href = "/books/atlas_shrugged/";
            },},{id: "books-the-da-vinci-code",
          title: 'The Da Vinci Code',
          description: "Dan Brown&#39;s iconic thriller that weaves cryptography, art history, and religious mystery into an unputdownable page-turner.",
          section: "Books",handler: () => {
              window.location.href = "/books/the_da_vinci_code/";
            },},{id: "books-the-fountainhead",
          title: 'The Fountainhead',
          description: "Ayn Rand&#39;s novel of uncompromising individualism — a polarizing, thought-provoking exploration of creative integrity and the courage of conviction.",
          section: "Books",handler: () => {
              window.location.href = "/books/the_fountainhead/";
            },},{id: "news-welcome-to-my-personal-website-more-updates-coming-soon",
          title: 'Welcome to my personal website! More updates coming soon.',
          description: "",
          section: "News",},{id: "projects-demand-forecasting-at-scale",
          title: 'Demand Forecasting at Scale',
          description: "Real-time ML pipeline serving predictions across Walmart stores.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/demand-forecasting/";
            },},{id: "projects-research-project-replace-title",
          title: 'Research Project — Replace Title',
          description: "Brief description of your research project.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/research-project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%61%72%69%70%72%61%73%61%64.%70%69%72%69%64%69@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/hpiridi", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/hpiridi", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=FD5S_WQAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0000-6112-5809", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
