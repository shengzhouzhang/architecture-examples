define(['React'], 
       function (React) {
  'use strict';

  return {

    initial: function(container) {
      this.container_ = container;
    },

    render: function() {

      React.renderComponent(
        <script type="in/Login">Login</script>, 
        this.container_
      );
    }
  };
});
