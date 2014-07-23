define(['JSX!Login', 'JSX!Connections', 'Actions'], 
        function (LoginView, ConnectionsView, Actions) {
  'use strict';

  return {

    // register views
    views: {
      Login: LoginView,
      Connections: ConnectionsView,
    },

    // initial all registered view
    initial: function () {

      var view;

      for(view in this.views) {

        this.views[view].initial(document.body);
      }

      Actions.componentsReady();
    },

    // render a view
    render: function (view) {
      this.views[view].render();
    }
  };
 });