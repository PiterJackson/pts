(function(){
  // Pts.namespace( this ); // add Pts into scope if needed
  
  var demoID = "getting_started_1"; 
  
  // create Space and Form
  var space = new CanvasSpace("#"+demoID).setup({ retina: true });
  var form = space.getForm();


  // animation
  space.add( () => form.point( space.pointer, 10 ) );
  
  
  // start
  space.playOnce(200).bindMouse().bindTouch();
  
  // For use in demo page only
  if (window.registerDemo) window.registerDemo(demoID, space);
  
})();