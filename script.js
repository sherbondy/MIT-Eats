(function() {
  $(function() {
    return ($('#map')).gmap().bind('init', function(evt, map) {
      return ($('#posts .tags')).each(function() {
        var $link, coords;
        $link = ($(this)).siblings('a');
        console.log($link);
        coords = ($(this)).text().split()[0];
        return ($('#map')).gmap('addMarker', {
          'position': coords,
          'bounds': true
        }, function(map, marker) {
          return $link.click(function(e) {
            e.preventDefault();
            return ($(marker)).triggerEvent('click');
          });
        }).click(function() {
          return map.panTo($(this).get(0).getPosition());
        });
      });
    });
  });
}).call(this);
