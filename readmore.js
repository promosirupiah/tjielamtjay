<!-- Auto read more script Start -->
<script type='text/javascript'>
var thumbnail_mode = "yes"; //yes -with thumbnail, no -no thumbnail
summary_noimg = 430; //summary length when no image
summary_img = 340; //summary length when with image
img_thumb_height = 200;
img_thumb_width = 200;
</script>
<script type='text/javascript'>
//<![CDATA[
function removeHtmlTag(strx,chop){ 
 if(strx.indexOf("<")!=-1)
 {
  var s = strx.split("<"); 
  for(var i=0;i<s.length;i++){ 
   if(s[i].indexOf(">")!=-1){ 
    s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length); 
   } 
  } 
  strx =  s.join(""); 
 }
 chop = (chop < strx.length-1) ? chop : strx.length-2; 
 while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++; 
 strx = strx.substring(0,chop-1); 
 return strx+'...'; 
}

function createSummaryAndThumb(pID){
 var div = document.getElementById(pID);
 var imgtag = "";
 var img = div.getElementsByTagName("img");
 var summ = summary_noimg;
        if(thumbnail_mode == "yes") {
 if(img.length>=1) { 
  imgtag = '<span style="float:left; padding:0px 10px 5px 0px;"><img src="'+img[0].src+'" width="'+img_thumb_width+'px" height="'+img_thumb_height+'px"/></span>';
  summ = summary_img;
 }
 }
 var summary = imgtag + '<div>' + removeHtmlTag(div.innerHTML,summ) + '</div>';
 div.innerHTML = summary;
}
//]]>
</script>
<!-- Auto read more script End -->