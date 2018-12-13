// to LIVE

javascript:(function(){
  var regexResult = window.location.href.match(/bbc\.co\.uk(\/.*)/);
  var filePath = regexResult ? regexResult[1] : '/sounds';
  window.location.href = 'https://www.bbc.co.uk' + filePath;
})();

// to TEST

javascript:(function(){
  var regexResult = window.location.href.match(/bbc\.co\.uk(\/.*)/);
  var filePath = regexResult ? regexResult[0] : '/sounds';
  window.location.href = 'https://www.test.bbc.co.uk' + filePath;
})();


// to INT

javascript:(function(){
  var regexResult = window.location.href.match(/bbc\.co\.uk(\/.*)/);
  var filePath = regexResult ? regexResult[0] : '/sounds';
  window.location.href = 'https://www.int.bbc.co.uk' + filePath;
})();


// to LOCALHOST

javascript:(function(){
  var regexResult = window.location.href.match(/bbc\.co\.uk(\/.*)/);
  var filePath = regexResult ? regexResult[0] : '/sounds';
  window.location.href = 'https://localhost.bbc.co.uk' + filePath;
})();

// logging out always
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

  expireIDCookies();
  var regexResult = window.location.href.match(/bbc\.co\.uk(\/.*)/);
  var filePath = regexResult ? regexResult[1] : '/sounds';
  window.location.href = 'https://www.bbc.co.uk' + filePath;
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
  if (currentEnvironment === 'localhost' || currentEnvironment === 'live'){
    expireIDCookies();
  }
  var filePath = regexResult ? regexResult[2] : '/sounds';
  window.location.href = 'https://www.bbc.co.uk' + filePath;
})();

if (currentEnvironment === 'test' || currentEnvironment === ''){
  expireIDCookies();
}
