exports.corsOptionsConfig = {
  origin: ['http://localhost:5173/', 'http://127.0.0.1:5173/', 'http://127.0.0.1:5173'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 200
}
