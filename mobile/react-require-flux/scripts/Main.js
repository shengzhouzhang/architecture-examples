require(['Router', 'LinkedAPI'], 
        function (Router) {
	'use strict';

  /**
   * Load and Initial Components.
   * Emit Ready Event when Components Ready
   */

  Router.initial();
	
  Router.render('Login');
 });