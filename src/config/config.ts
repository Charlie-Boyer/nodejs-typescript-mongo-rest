const config = {
  mongo: {
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      writeConcern: 'majority',
    },
    url: 'mongodb+srv://dbUser:dbPassword@cluster0.ukyen.mongodb.net/myFirstDatabase',
  },
  server: {
    port: 1337,
  },
};

export default config;
