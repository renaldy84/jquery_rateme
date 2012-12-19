jquery_rateme
=============

a jquery plugin for giving a rate.

***Examples :*** 
```HTML
<div id="ratings"></div>
<script>
  $("#ratings").rateme({startValue:3,
                        onComplete:function(no){
                          console.log('vote --> '+no);
                        }
  });
</script>
```
