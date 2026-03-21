// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "Career timeline, education, and technical skills.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-patents",
          title: "patents",
          description: "Granted and pending patents.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/patents/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "post-welcome-to-my-blog",
        
          title: "Welcome to My Blog",
        
        description: "First post — what to expect from this blog.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/welcome/";
          
        },
      },{id: "books-ai-engineering-building-applications-with-foundation-models",
          title: 'AI Engineering: Building Applications with Foundation Models',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/ai_engineering/";
            },},{id: "books-approaching-almost-any-machine-learning-problem",
          title: 'Approaching (Almost) Any Machine Learning Problem',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/approaching_almost_any_ml_problem/";
            },},{id: "books-artificial-intelligence-a-modern-approach",
          title: 'Artificial Intelligence: A Modern Approach',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/artificial_intelligence_modern_approach/";
            },},{id: "books-build-a-large-language-model-from-scratch",
          title: 'Build a Large Language Model (From Scratch)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/build_large_language_model_from_scratch/";
            },},{id: "books-building-llms-for-production",
          title: 'Building LLMs for Production',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/building_llms_for_production/";
            },},{id: "books-deep-learning",
          title: 'Deep Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/deep_learning/";
            },},{id: "books-deep-learning-on-graphs",
          title: 'Deep Learning on Graphs',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/deep_learning_on_graphs/";
            },},{id: "books-designing-machine-learning-systems",
          title: 'Designing Machine Learning Systems',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/designing_machine_learning_systems/";
            },},{id: "books-graph-neural-networks-foundations-frontiers-and-applications",
          title: 'Graph Neural Networks: Foundations, Frontiers, and Applications',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/gnn_foundations_frontiers_applications/";
            },},{id: "books-graph-neural-networks-in-action",
          title: 'Graph Neural Networks in Action',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/graph_neural_networks_in_action/";
            },},{id: "books-graph-representation-learning",
          title: 'Graph Representation Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/graph_representation_learning/";
            },},{id: "books-hands-on-large-language-models",
          title: 'Hands-On Large Language Models',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/hands_on_large_language_models/";
            },},{id: "books-an-introduction-to-statistical-learning",
          title: 'An Introduction to Statistical Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/introduction_to_statistical_learning/";
            },},{id: "books-llm-engineer-39-s-handbook",
          title: 'LLM Engineer&amp;#39;s Handbook',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/llm_engineers_handbook/";
            },},{id: "books-mathematics-for-machine-learning",
          title: 'Mathematics for Machine Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/mathematics_for_machine_learning/";
            },},{id: "books-pattern-recognition-and-machine-learning",
          title: 'Pattern Recognition and Machine Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/pattern_recognition_machine_learning/";
            },},{id: "books-reinforcement-learning-an-introduction",
          title: 'Reinforcement Learning: An Introduction',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/reinforcement_learning_introduction/";
            },},{id: "books-atlas-shrugged",
          title: 'Atlas Shrugged',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/atlas_shrugged/";
            },},{id: "books-the-da-vinci-code",
          title: 'The Da Vinci Code',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_da_vinci_code/";
            },},{id: "books-the-fountainhead",
          title: 'The Fountainhead',
          description: "",
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
