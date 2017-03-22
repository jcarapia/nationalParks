$(document).ready(function() {
    $('#map2').usmap({
      'stateStyles': {
        fill: '#ccc', 
        "stroke-width": 1,
        'stroke' : '#036'
      },
      'stateHoverStyles': {
        fill: 'teal'
      },
      
      'click' : function(event, data) {
        $('#alert')
          .text('Clicked '+data.name)
          .stop()
          .css('backgroundColor', '#af0')
          .animate({backgroundColor: '#ddd'}, 1000);
      }
    });
    
    $('#over-md').click(function(event){
      $('#map').usmap('trigger', 'MD', 'mouseover', event);
    });
    
    $('#out-md').click(function(event){
      $('#map').usmap('trigger', 'MD', 'mouseout', event);
    });
  });