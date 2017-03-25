(function() {
  var defaultTitles = '科长,副科长,主任,副主任,主任科员,副主任科员,正科级干部,副科级干部,' 
    + '部长,副部长,局长,副局长,' 
    + '处长,副处长,馆长,副馆长,所长,副所长,站长,副站长,'
    + '队长,大队长,支队长,副支队长,' 
    + '督学,教导员,负责人,团委书记,党总支书记';
  document.getElementById('js-titles').value = defaultTitles.split(',').join('\n');

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
