(function() {
  var parse = function parse(event) {
    event.preventDefault();

    var input = document.getElementById('js-input').value.split('\n');
    var rawTitles = document.getElementById('js-titles').value.split('\n');

    if (input.length === 0 || rawTitles.length === 0)
      return;

    rawTitles = rawTitles.sort(function(a, b) {
      return b.length - a.length;
    });

    var titles = rawTitles.filter(function(title) {
      return (title.length !== 0);
    });

    var output = input.map(function(s) {
      for (var i = 0, max = titles.length; i < max; ++i) {
        var index = s.indexOf(titles[i]);
        if (index >= 0)
          return s.slice(0, index) + ',' + s.slice(index);
      }

      return s;
    });

    document.getElementById('js-output').value = output.join('\n');
  };

  document.querySelector('form').addEventListener('submit', parse, false);
  new Clipboard('#js-clipboard');

}());
