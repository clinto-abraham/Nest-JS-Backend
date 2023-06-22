exports.corsOptionsConfig = {
  origin: [
    "https://deploy-preview-27--clinto.netlify.app/",
    "https://clinto.netlify.app/",
    "https://clinto.vercel.app/",
    "https://resume-react-clinto92.vercel.app/",
    "http://localhost:5173/",
    "http://127.0.0.1:5173/",
    "http://127.0.0.1:5174",
    "http://localhost:7000/",
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 200,
};
