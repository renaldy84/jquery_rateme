(function( $ ) {
$.fn.rateme = function(param){
	return this.each(function() {
			
			var startValue = (typeof param.startValue!=="undefined") ? startValue = param.startValue : 0;
			var star = $('<div class="rate">');
			var isClicked = false;
			star.attr('no',0);
			star.css({width:'22px',height:'20px',marginRight:'1px',backgroundImage:'url('+param.source+'star2.png)',float:'left',cursor:'pointer'});
			star.html('&nbsp;');
			star.mouseover(function(e){
				if(param.disableAfterClick&&isClicked) return false;
				isClicked=false;
				star.css('background-image','url('+param.source+'star.png)');
				for(var i=0;i<=$(this).attr('no');i++){
					$("div.rate[no='"+i+"']").css('background-image','url('+param.source+'star.png)');
				}
			}).mouseout(function(e){
				if(param.disableAfterClick&&isClicked) return false;
				if(!isClicked){
					for(var i=0;i<5;i++){
						$("div.rate[no='"+i+"']").css('background-image','url('+param.source+'star2.png)');
					}
				}
			}).click(function(e){
				if(param.disableAfterClick&&isClicked) return false;
				isClicked = true;
				//console.log(parseInt($(this).attr('no'))+1);
				param.onComplete(parseInt($(this).attr('no'))+1);
			});
			var star2 = star.clone(true).attr('no',1);
			var star3 = star.clone(true).attr('no',2);
			var star4 = star.clone(true).attr('no',3);
			var star5 = star.clone(true).attr('no',4);
			
			$(this).append(star);
			$(this).append(star2);
			$(this).append(star3);
			$(this).append(star4);
			$(this).append(star5);
			if(startValue>0){
				for(var i=0;i<startValue;i++){
					$("div.rate[no='"+i+"']").css('background-image','url('+param.source+'star.png)');
				}
			}

		});
	}
})( jQuery );