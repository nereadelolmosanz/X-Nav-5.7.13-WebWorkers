//espero el numero
self.onmessage = function (event) {
  var n = 1;
  var primeList = "";
  search: while(n < event.data) {
		n += 1;
		for(var i = 2; i <= Math.sqrt(n); i += 1)
			if(n % i == 0){
				continue search;
      }
		  primeList += " " + n;
      if (primeList.length > 99999){
        self.postMessage(primeList);
        primeList="";
      }
	  }
	self.postMessage(primeList);
}
