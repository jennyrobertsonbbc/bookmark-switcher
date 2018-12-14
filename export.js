var fs = require('fs');
var fileName = 'export/bookmarklet-switcher.html';
var ICON = 'ICON="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABdklEQVQ4jXXTv2tTURQH8M8NyVpcSv+ALDo4hQod3BODIYt7oQXRtUWcFJxEmrUiVtSpdKuFkO4VhJbO7dJZXLNGchxyX0xe+850efd+z/fHOS+5o6KjL9kW7oPkzNR+OnVRfpvuAL/BDlZKVzfYTSPHlQ2io4/vGXyJk3zuo4kbNU/T0FWBqZf0bAsrkqG6rXTiD0TbkeQQTVPP8K6A1ObsPWtzz2FYgCGdupCcZZJHi5zLCm7n8WIuPfzAufC7OoMnvgqbuNTQNbGxkMnbNPov/ZYFMLVvlnbLX+81/MIg3+7kkKsb5DkPMBY2TTzX8EnyLavYi64H1QqQRj7ic8FqYkPywWysTeHV4vulEHNoq/iZraxCGrqKji9oCQ+jZ62YUnkPukIXgzSyW1aX6161hXCdT/1oW59/nvneyiTXiztSLzU4kvLaJofRcYyxqR5aZuEeLIsuVR7VntkCLdYYr3PI1Q0g2tbVvBQeF7KFg/KfCP8A2zd2vCjsQ34AAAAASUVORK5CYII="';

fs.readFile('js/live.js', 'utf-8', function (err, liveText) {
  fs.readFile('js/test.js', 'utf-8', function (err, testText) {
    fs.readFile('js/int.js', 'utf-8', function (err, intText) {
      fs.readFile('js/local.js', 'utf-8', function (err, localText) {

        var html = `
<!DOCTYPE NETSCAPE-Bookmark-file-1>
<H3 ADD_DATE="1473251727" LAST_MODIFIED="1542800992" PERSONAL_TOOLBAR_FOLDER="true">Sounds Web</H3>
  <A HREF="javascript:(function(){${removeLineBreaks(liveText)}})();" ADD_DATE="1534424006" ${ICON}>Live</A>
  <A HREF="javascript:(function(){${removeLineBreaks(testText)}})();" ADD_DATE="1534424006" ${ICON}>Test</A>
  <A HREF="javascript:(function(){${removeLineBreaks(intText)}})();" ADD_DATE="1534424006" ${ICON}>Int</A>
  <A HREF="javascript:(function(){${removeLineBreaks(localText)}})();" ADD_DATE="1534424006" ${ICON}>Local</A>
        `;

        fs.writeFile(fileName, html, function (err) {
          if (err) throw err;
        });

      });
    });
  });
});

function removeLineBreaks(input){
  return input.replace(/(\r\n\t|\n|\r\t|\t)/gm,"");
}
