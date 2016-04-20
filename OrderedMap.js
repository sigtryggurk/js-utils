function OrderedMap (kv_array) {
        this.keyset = new Object();
  		this.kv_array = kv_array;
  		for(i=0;i<this.kv_array.length;i++)
  	    {
   		  this.keyset[kv_array[i][0]] = i;
        }
      }
      OrderedMap.prototype.contains = function(key) {return this.keyset[key] !== undefined;};
      OrderedMap.prototype.getAtIndex = function(index){return this.kv_array[index][1];};
      OrderedMap.prototype.get = function(key) {return this.getAtIndex(this.keyset[key]);};
      OrderedMap.prototype.size = function() {return this.kv_array.length};
      function OrderedMapIterator(map){this.map = map;this.current = 0;}
      OrderedMapIterator.prototype.next = function(){
        if (this.current >= this.map.size())
        {
          throw StopIteration;
        }
       else
       {
         return this.map.kv_array[this.current++];
       }
     };
     OrderedMap.prototype.__iterator__ = function(){return new OrderedMapIterator(this);};
