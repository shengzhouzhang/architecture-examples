require.config({
  deps: ['JSX!Main'],

  paths: {
    jQuery: '../libs/jquery-2.1.0.min',
    React: '../libs/react',
    JSX: '../libs/jsx',
    JSXTransformer: '../libs/JSXTransformer',
    EventEmitter: '../libs/EventEmitter-4.0.3.min',
    LinkedIn: 'http://platform.linkedin.com/in.js?async=true' 
  },
  shim : {
    jQuery : {
      exports: '$'
    },
    JSXTransformer: {
      exports: 'JSXTransformer'
    }
  }
});