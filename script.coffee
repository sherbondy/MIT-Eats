$ ->
  ($ '#map').gmap().bind 'init', (evt, map)->
    ($ '#posts .tags').each ->
      $link = ($ this).siblings 'a'
      console.log $link
      coords = ($ this).text().split()[0]
      ($ '#map').gmap('addMarker', {
        'position': coords,
        'bounds': true
      }, (map, marker)->
        $link.click (e)->
          e.preventDefault()
          ($ marker).triggerEvent 'click'
      ).click ->
        map.panTo $( this).get(0).getPosition()
