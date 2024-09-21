{/* <script> */}
	// Disable right-click
	document.addEventListener('contextmenu', function(event) {
	  event.preventDefault();
	});
  // Disable F12, Ctrl+Shift+I, and Ctrl+U
	document.addEventListener('keydown', function(event) {
	  if (event.code === 'F12' || 
		  (event.ctrlKey && event.shiftKey && event.code === 'KeyI') || 
		  (event.ctrlKey && event.code === 'KeyU')) {
		event.preventDefault();
		event.stopPropagation();
		return false;
	  }
	});
  </script>