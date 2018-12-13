// TO INT
javascript:(function(){
  function expireBBCCookie( name ) {
      var expireCookie = name + '=false;path=/;domain=.bbc.co.uk;expires=Thu, 01 Jan 1970 00:00:01 GMT';
      document.cookie = expireCookie;
  }

  function expireIDCookies() {
      expireBBCCookie('ckns_atkn');
      expireBBCCookie('ckns_id');
      expireBBCCookie('ckns_idtkn');
  }

  var regexResult = window.location.href.match(/(localhost|int|test|)\.?bbc\.co\.uk(\/.*)/);
  var currentEnvironment = regexResult ? regexResult[1] : 'nonbbc';
  if (currentEnvironment === 'localhost' || currentEnvironment === ''){
    expireIDCookies();
  }
  var filePath = regexResult ? regexResult[2] : '/sounds';
  window.location.href = 'https://www.int.bbc.co.uk' + filePath;
})();

// TO TEST
javascript:(function(){
  function expireBBCCookie( name ) {
      var expireCookie = name + '=false;path=/;domain=.bbc.co.uk;expires=Thu, 01 Jan 1970 00:00:01 GMT';
      document.cookie = expireCookie;
  }

  function expireIDCookies() {
      expireBBCCookie('ckns_atkn');
      expireBBCCookie('ckns_id');
      expireBBCCookie('ckns_idtkn');
  }

  var regexResult = window.location.href.match(/(localhost|int|test|)\.?bbc\.co\.uk(\/.*)/);
  var currentEnvironment = regexResult ? regexResult[1] : 'nonbbc';
  if (currentEnvironment === 'localhost' || currentEnvironment === ''){
    expireIDCookies();
  }
  var filePath = regexResult ? regexResult[2] : '/sounds';
  window.location.href = 'https://www.test.bbc.co.uk' + filePath;
})();

// TO LIVE
javascript:(function(){
  function expireBBCCookie( name ) {
      var expireCookie = name + '=false;path=/;domain=.bbc.co.uk;expires=Thu, 01 Jan 1970 00:00:01 GMT';
      document.cookie = expireCookie;
  }

  function expireIDCookies() {
      expireBBCCookie('ckns_atkn');
      expireBBCCookie('ckns_id');
      expireBBCCookie('ckns_idtkn');
  }

  var regexResult = window.location.href.match(/(localhost|int|test|)\.?bbc\.co\.uk(\/.*)/);
  var currentEnvironment = regexResult ? regexResult[1] : 'nonbbc';
  if (currentEnvironment === 'int' || currentEnvironment === 'test'){
    expireIDCookies();
  }
  var filePath = regexResult ? regexResult[2] : '/sounds';
  window.location.href = 'https://www.bbc.co.uk' + filePath;
})();

// TO LOCAL
javascript:(function(){
  function expireBBCCookie( name ) {
      var expireCookie = name + '=false;path=/;domain=.bbc.co.uk;expires=Thu, 01 Jan 1970 00:00:01 GMT';
      document.cookie = expireCookie;
  }

  function expireIDCookies() {
      expireBBCCookie('ckns_atkn');
      expireBBCCookie('ckns_id');
      expireBBCCookie('ckns_idtkn');
  }

  var regexResult = window.location.href.match(/(localhost|int|test|)\.?bbc\.co\.uk(\/.*)/);
  var currentEnvironment = regexResult ? regexResult[1] : 'nonbbc';
  if (currentEnvironment === 'int' || currentEnvironment === 'test'){
    expireIDCookies();
  }
  var filePath = regexResult ? regexResult[2] : '/sounds';
  window.location.href = 'https://localhost.bbc.co.uk' + filePath;
})();

// LIVE
javascript:(function(){ function expireBBCCookie( name ) { var expireCookie = name + '=false;path=/;domain=.bbc.co.uk;expires=Thu, 01 Jan 1970 00:00:01 GMT'; document.cookie = expireCookie; } function expireIDCookies() { expireBBCCookie('ckns_atkn'); expireBBCCookie('ckns_id'); expireBBCCookie('ckns_idtkn'); } var regexResult = window.location.href.match(/(localhost|int|test|)\.?bbc\.co\.uk(\/.*)/); var currentEnvironment = regexResult ? regexResult[1] : 'nonbbc'; if (currentEnvironment === 'int' || currentEnvironment === 'test'){ expireIDCookies(); } var filePath = regexResult ? regexResult[2] : '/sounds'; window.location.href = 'https://www.bbc.co.uk' + filePath; })();


//test
javascript:(function(){ function expireBBCCookie( name ) { var expireCookie = name + '=false;path=/;domain=.bbc.co.uk;expires=Thu, 01 Jan 1970 00:00:01 GMT'; document.cookie = expireCookie; } function expireIDCookies() { expireBBCCookie('ckns_atkn'); expireBBCCookie('ckns_id'); expireBBCCookie('ckns_idtkn'); } var regexResult = window.location.href.match(/(localhost|int|test|)\.?bbc\.co\.uk(\/.*)/); var currentEnvironment = regexResult ? regexResult[1] : 'nonbbc'; if (currentEnvironment === 'localhost' || currentEnvironment === ''){ expireIDCookies(); } var filePath = regexResult ? regexResult[2] : '/sounds'; window.location.href = 'https://www.test.bbc.co.uk' + filePath; })();

//int
javascript:(function(){ function expireBBCCookie( name ) { var expireCookie = name + '=false;path=/;domain=.bbc.co.uk;expires=Thu, 01 Jan 1970 00:00:01 GMT'; document.cookie = expireCookie; } function expireIDCookies() { expireBBCCookie('ckns_atkn'); expireBBCCookie('ckns_id'); expireBBCCookie('ckns_idtkn'); } var regexResult = window.location.href.match(/(localhost|int|test|)\.?bbc\.co\.uk(\/.*)/); var currentEnvironment = regexResult ? regexResult[1] : 'nonbbc'; if (currentEnvironment === 'localhost' || currentEnvironment === ''){ expireIDCookies(); } var filePath = regexResult ? regexResult[2] : '/sounds'; window.location.href = 'https://www.int.bbc.co.uk' + filePath; })();


//local
javascript:(function(){ function expireBBCCookie( name ) { var expireCookie = name + '=false;path=/;domain=.bbc.co.uk;expires=Thu, 01 Jan 1970 00:00:01 GMT'; document.cookie = expireCookie; } function expireIDCookies() { expireBBCCookie('ckns_atkn'); expireBBCCookie('ckns_id'); expireBBCCookie('ckns_idtkn'); } var regexResult = window.location.href.match(/(localhost|int|test|)\.?bbc\.co\.uk(\/.*)/); var currentEnvironment = regexResult ? regexResult[1] : 'nonbbc'; if (currentEnvironment === 'int' || currentEnvironment === 'test'){ expireIDCookies(); } var filePath = regexResult ? regexResult[2] : '/sounds'; window.location.href = 'https://localhost.bbc.co.uk' + filePath; })();
