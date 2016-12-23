var output=null;
$(function() {
  var $document = $(document);
  var $r = $('input[type=range]');
  var $min = $('input[name="min"]');
  var $max = $('input[name="max"]');
  var $step = $('input[name="step"]');
  output = document.querySelectorAll('output')[0];
  // set initial output value
  output.innerHTML = $r[0].value;
  // update output value
  $document.on('input', 'input[type="range"]', function(e) {
    output.innerHTML = e.currentTarget.value;
  });
  // Initialize
  $r.rangeslider({
    polyfill: false,
    isRTL:true,
    onSlide:onSlideEnd
  });
  // Example functionality to demonstrate programmatic attribute changes
  $document.on('click', '#js-example-change-attributes', function(e) {
    var attributes = {
    	min: $min[0].value,
      max: $max[0].value,
      step: $step[0].value
    };
    $r.attr(attributes);
    $r.rangeslider('update', true);
  });
  scale();
  $document.resize( function(e) {
     scale(e);
  });
  function scale(){
     var scaleDiv=$('#scale');
    var number="";
    var padding=$('.rangeslider').width()/10;
    var min=parseInt($r.attr('min'));
    var max=parseInt($r.attr('max'));
    var step=parseInt($r.attr('step'));
    for(var i=min;i<=max;i=i+step){
      number+="<span id="+i+" style=padding:"+''+21+''+"px;"+">"+i+"</span>";
    }
    scaleDiv.append(number);
  }
  function onSlideEnd(pos,value){
    //console.log("Possition:"+pos+" Value:"+value);
  }
});