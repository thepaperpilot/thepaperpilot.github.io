var O={exports:{}};(function(y){var U=function(){var _=String.fromCharCode,M="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",S="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",x={};function m(o,r){if(!x[o]){x[o]={};for(var c=0;c<o.length;c++)x[o][o.charAt(c)]=c}return x[o][r]}var d={compressToBase64:function(o){if(o==null)return"";var r=d._compress(o,6,function(c){return M.charAt(c)});switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:d._decompress(o.length,32,function(r){return m(M,o.charAt(r))})},compressToUTF16:function(o){return o==null?"":d._compress(o,15,function(r){return _(r+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:d._decompress(o.length,16384,function(r){return o.charCodeAt(r)-32})},compressToUint8Array:function(o){for(var r=d.compress(o),c=new Uint8Array(r.length*2),e=0,t=r.length;e<t;e++){var p=r.charCodeAt(e);c[e*2]=p>>>8,c[e*2+1]=p%256}return c},decompressFromUint8Array:function(o){if(o==null)return d.decompress(o);for(var r=new Array(o.length/2),c=0,e=r.length;c<e;c++)r[c]=o[c*2]*256+o[c*2+1];var t=[];return r.forEach(function(p){t.push(_(p))}),d.decompress(t.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":d._compress(o,6,function(r){return S.charAt(r)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),d._decompress(o.length,32,function(r){return m(S,o.charAt(r))}))},compress:function(o){return d._compress(o,16,function(r){return _(r)})},_compress:function(o,r,c){if(o==null)return"";var e,t,p={},w={},v="",A="",u="",h=2,a=3,f=2,l=[],n=0,s=0,i;for(i=0;i<o.length;i+=1)if(v=o.charAt(i),Object.prototype.hasOwnProperty.call(p,v)||(p[v]=a++,w[v]=!0),A=u+v,Object.prototype.hasOwnProperty.call(p,A))u=A;else{if(Object.prototype.hasOwnProperty.call(w,u)){if(u.charCodeAt(0)<256){for(e=0;e<f;e++)n=n<<1,s==r-1?(s=0,l.push(c(n)),n=0):s++;for(t=u.charCodeAt(0),e=0;e<8;e++)n=n<<1|t&1,s==r-1?(s=0,l.push(c(n)),n=0):s++,t=t>>1}else{for(t=1,e=0;e<f;e++)n=n<<1|t,s==r-1?(s=0,l.push(c(n)),n=0):s++,t=0;for(t=u.charCodeAt(0),e=0;e<16;e++)n=n<<1|t&1,s==r-1?(s=0,l.push(c(n)),n=0):s++,t=t>>1}h--,h==0&&(h=Math.pow(2,f),f++),delete w[u]}else for(t=p[u],e=0;e<f;e++)n=n<<1|t&1,s==r-1?(s=0,l.push(c(n)),n=0):s++,t=t>>1;h--,h==0&&(h=Math.pow(2,f),f++),p[A]=a++,u=String(v)}if(u!==""){if(Object.prototype.hasOwnProperty.call(w,u)){if(u.charCodeAt(0)<256){for(e=0;e<f;e++)n=n<<1,s==r-1?(s=0,l.push(c(n)),n=0):s++;for(t=u.charCodeAt(0),e=0;e<8;e++)n=n<<1|t&1,s==r-1?(s=0,l.push(c(n)),n=0):s++,t=t>>1}else{for(t=1,e=0;e<f;e++)n=n<<1|t,s==r-1?(s=0,l.push(c(n)),n=0):s++,t=0;for(t=u.charCodeAt(0),e=0;e<16;e++)n=n<<1|t&1,s==r-1?(s=0,l.push(c(n)),n=0):s++,t=t>>1}h--,h==0&&(h=Math.pow(2,f),f++),delete w[u]}else for(t=p[u],e=0;e<f;e++)n=n<<1|t&1,s==r-1?(s=0,l.push(c(n)),n=0):s++,t=t>>1;h--,h==0&&(h=Math.pow(2,f),f++)}for(t=2,e=0;e<f;e++)n=n<<1|t&1,s==r-1?(s=0,l.push(c(n)),n=0):s++,t=t>>1;for(;;)if(n=n<<1,s==r-1){l.push(c(n));break}else s++;return l.join("")},decompress:function(o){return o==null?"":o==""?null:d._decompress(o.length,32768,function(r){return o.charCodeAt(r)})},_decompress:function(o,r,c){var e=[],t=4,p=4,w=3,v="",A=[],u,h,a,f,l,n,s,i={val:c(0),position:r,index:1};for(u=0;u<3;u+=1)e[u]=u;for(a=0,l=Math.pow(2,2),n=1;n!=l;)f=i.val&i.position,i.position>>=1,i.position==0&&(i.position=r,i.val=c(i.index++)),a|=(f>0?1:0)*n,n<<=1;switch(a){case 0:for(a=0,l=Math.pow(2,8),n=1;n!=l;)f=i.val&i.position,i.position>>=1,i.position==0&&(i.position=r,i.val=c(i.index++)),a|=(f>0?1:0)*n,n<<=1;s=_(a);break;case 1:for(a=0,l=Math.pow(2,16),n=1;n!=l;)f=i.val&i.position,i.position>>=1,i.position==0&&(i.position=r,i.val=c(i.index++)),a|=(f>0?1:0)*n,n<<=1;s=_(a);break;case 2:return""}for(e[3]=s,h=s,A.push(s);;){if(i.index>o)return"";for(a=0,l=Math.pow(2,w),n=1;n!=l;)f=i.val&i.position,i.position>>=1,i.position==0&&(i.position=r,i.val=c(i.index++)),a|=(f>0?1:0)*n,n<<=1;switch(s=a){case 0:for(a=0,l=Math.pow(2,8),n=1;n!=l;)f=i.val&i.position,i.position>>=1,i.position==0&&(i.position=r,i.val=c(i.index++)),a|=(f>0?1:0)*n,n<<=1;e[p++]=_(a),s=p-1,t--;break;case 1:for(a=0,l=Math.pow(2,16),n=1;n!=l;)f=i.val&i.position,i.position>>=1,i.position==0&&(i.position=r,i.val=c(i.index++)),a|=(f>0?1:0)*n,n<<=1;e[p++]=_(a),s=p-1,t--;break;case 2:return A.join("")}if(t==0&&(t=Math.pow(2,w),w++),e[s])v=e[s];else if(s===p)v=h+h.charAt(0);else return null;A.push(v),e[p++]=h+v.charAt(0),t--,h=v,t==0&&(t=Math.pow(2,w),w++)}}};return d}();y!=null&&(y.exports=U)})(O);var j=O.exports;export{j as L};
