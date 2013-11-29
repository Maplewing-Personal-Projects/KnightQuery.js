var $ = knight = (function(){

	var knight = function(query){
		if(query != undefined){
			if( typeof query === "function" ){
				window.addEventListener('load', query);
			}
			else{
				return new KnightObject(document.querySelectorAll(query));
			}
		}
		else{
			
		}
	};

	function KnightObject(e){
		this.elements = e;
	}

	KnightObject.prototype.html = function(content){
		if(content != undefined){
			if( typeof content === "function" ){
				this.each(function(i,e){
					e.innerHTML = content.call(e, i, e.innerHTML);
				});
			}
			else{
				this.each(function(i, e){
					e.innerHTML = content;
				});
			}
			return this;
		}
		else{
			return this.elements[0].innerHTML;
		}
	};

	KnightObject.prototype.each = function(f){
		for( var i = 0 ; i < this.elements.length ; ++i ){
			f.call(this.elements[i], i, this.elements[i]);
		}
	};

	return knight;
})();