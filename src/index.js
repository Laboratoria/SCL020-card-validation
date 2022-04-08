var input=  document.getElementById('numero');
input.addEventListener('input',function(){
  if (this.value.length > 16) 
     this.value = this.value.slice(0,16); 
})
	