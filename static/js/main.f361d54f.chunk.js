(this.webpackJsonpeatou=this.webpackJsonpeatou||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"id":1,"restaurantName":"Bronco","location":{"lat":48.8737815,"lng":2.3501649},"ratings":[{"stars":4,"comment":"Un excellent restaurant, j\'y reviendrai ! Par contre il vaut mieux aimer la viande."},{"stars":5,"comment":"Tout simplement mon restaurant pr\xe9f\xe9r\xe9 !"}]},{"id":2,"restaurantName":"Chez Papa","location":{"lat":48.92378462909014,"lng":2.260251679761609},"ratings":[{"stars":5,"comment":"Tout simplement le meilleur restaurant de Colombes"},{"stars":4,"comment":"Waouuh... Une v\xe9ritable claque !"}]},{"id":3,"restaurantName":"Babalou","location":{"lat":48.8865035,"lng":2.3442197},"ratings":[{"stars":5,"comment":"Une minuscule pizzeria d\xe9licieuse cach\xe9e juste \xe0 c\xf4t\xe9 du Sacr\xe9 choeur !"},{"stars":3,"comment":"J\'ai trouv\xe9 \xe7a correct, sans plus"}]},{"id":4,"restaurantName":"Le Bidoche","location":{"lat":48.86507570478589,"lng":2.367070027543483},"ratings":[{"stars":4,"comment":"Waouh, incroyablement bon et pas cher !"},{"stars":1,"comment":"Bof, rien d\'exceptionnel"}]},{"id":5,"restaurantName":"Le Caracole","location":{"lat":48.92230437710803,"lng":2.2530378926812844},"ratings":[{"stars":4,"comment":"Personnel sympathique, bonne nourriture"},{"stars":1,"comment":"Le Burger est incroyable !"}]}]')},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),o=n(6),s=n.n(o),i=(n(17),n(9),n(2)),l=Object(a.createContext)(),u=function(e){var t=Object(a.useState)(0),n=Object(i.a)(t,2),r=n[0],o=n[1];return Object(c.jsx)(l.Provider,{value:[r,o],children:e.children})},j=Object(a.createContext)(),b=function(e){var t=Object(a.useState)({}),n=Object(i.a)(t,2),r=n[0],o=n[1];return Object(c.jsx)(j.Provider,{value:[r,o],children:e.children})},d=Object(a.createContext)(),O=function(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),r=n[0],o=n[1];return Object(c.jsx)(d.Provider,{value:[r,o],children:e.children})},m=Object(a.createContext)(),h=function(e){var t=Object(a.useState)(0),n=Object(i.a)(t,2),r=n[0],o=n[1];return Object(c.jsx)(m.Provider,{value:[r,o],children:e.children})},x=Object(a.createContext)(),v=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),r=n[0],o=n[1];return Object(c.jsx)(x.Provider,{value:[r,o],children:e.children})},f=Object(a.createContext)(),g=function(e){var t=Object(a.useState)(!0),n=Object(i.a)(t,2),r=n[0],o=n[1];return Object(c.jsx)(f.Provider,{value:[r,o],children:e.children})},p=Object(a.createContext)(),A=function(e){var t=Object(a.useState)({}),n=Object(i.a)(t,2),r=n[0],o=n[1];return Object(c.jsx)(p.Provider,{value:[r,o],children:e.children})},C=n(10),N=Object(a.createContext)(),w=function(e){var t=Object(a.useState)(C),n=Object(i.a)(t,2),r=n[0],o=n[1];return Object(c.jsx)(N.Provider,{value:[r,o],children:e.children})},S=Object(a.createContext)(),y=function(e){var t=Object(a.useState)(),n=Object(i.a)(t,2),r=n[0],o=n[1];return Object(c.jsx)(S.Provider,{value:[r,o],children:e.children})},k=n.p+"static/media/eatou-yellow.0993e86f.png",B=function(){return Object(c.jsxs)("div",{className:"header flex-col-center-center",children:[Object(c.jsx)("img",{id:"logo",src:k,alt:"Logo Eatou"}),Object(c.jsx)("h1",{children:"Eatou"}),Object(c.jsx)("p",{children:"Bien manger partout !"})]})},L=function(){var e=Object(a.useContext)(l),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)("div",{className:"filter yellow flex-col-center-center",children:[Object(c.jsx)("label",{htmlFor:"star-select",children:"Une exigence sur la qualit\xe9 de la cuisine ?"}),Object(c.jsx)("form",{children:Object(c.jsxs)("select",{value:n,onChange:function(e){r(e.target.value)},children:[Object(c.jsx)("option",{value:"0",children:"Tous les restaurants"}),Object(c.jsx)("option",{value:"1",children:"1 \xe9toile"}),Object(c.jsx)("option",{value:"2",children:"2 \xe9toiles"}),Object(c.jsx)("option",{value:"3",children:"3 \xe9toiles"}),Object(c.jsx)("option",{value:"4",children:"4 \xe9toiles"}),Object(c.jsx)("option",{value:"5",children:"5 \xe9toiles"})]})})]})},E=function(e){var t=e.comment;return Object(c.jsx)("p",{children:t})},V=function(e){var t=e.onSubmit,n=e.className,a=e.children;return Object(c.jsx)("form",{onSubmit:t,className:n,children:a})},F=function(e){var t=e.className,n=e.name,a=e.labelValue,r=e.onChange;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("label",{className:t,htmlFor:n,children:a}),Object(c.jsx)("textarea",{id:n,onChange:r,name:n})]})},P=function(e){var t=e.className,n=e.name,a=e.labelValue,r=e.value,o=e.onChange,s=e.options;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("label",{className:t,htmlFor:n,children:a}),Object(c.jsx)("select",{id:n,value:r,onChange:o,children:s.map((function(e){return e}))})]})},J=function(e){var t=e.className,n=e.name,a=e.value;return Object(c.jsx)("input",{className:t,type:n,value:a})},M=function(e){var t=e.label,n=e.value;return Object(c.jsx)("option",{value:n,children:t})},U=[Object(c.jsx)(M,{value:0,label:"0 \xe9toiles"},0),Object(c.jsx)(M,{value:1,label:"1 \xe9toiles"},1),Object(c.jsx)(M,{value:2,label:"2 \xe9toiles"},2),Object(c.jsx)(M,{value:3,label:"3 \xe9toiles"},3),Object(c.jsx)(M,{value:4,label:"4 \xe9toiles"},4),Object(c.jsx)(M,{value:5,label:"5 \xe9toiles"},5)],R=function(e){var t=e.restaurant,n=e.showCommentEditor,r=e.setShowCommentEditor,o=Object(a.useContext)(d),s=Object(i.a)(o,2),l=s[0],u=s[1],j=Object(a.useContext)(m),b=Object(i.a)(j,2),O=b[0],h=b[1];return Object(c.jsxs)(V,{onSubmit:function(e){var n,c,a;e.preventDefault(),n=t.ratings,c=l,a=O,n.push({comment:c,stars:a}),u(""),r(!1)},className:"comment-adder flex-col-spacearound-center yellow",children:[Object(c.jsx)("div",{className:"button-div",children:Object(c.jsx)("button",{className:"x-button",onClick:function(){return r(!n)},children:"x"})}),Object(c.jsx)(F,{onChange:function(e){u(e.target.value)},className:"mb-5",name:"comment",labelValue:"Ajouter un commentaire"}),Object(c.jsx)(P,{value:O,onChange:function(e){h(e.target.value)},className:"mb-5",name:"star",options:U}),Object(c.jsx)(J,{className:"display-comment-button",name:"submit",value:"Soumettre"})]})},q=function(e){var t,n=0;for(t=0;t<e.length;t++)n+=parseFloat(e[t]);return(n/e.length).toFixed(2)},X=function(e){var t=e.restaurant,n=Object(a.useState)(!1),r=Object(i.a)(n,2),o=r[0],s=r[1],l=Object(a.useState)(!1),u=Object(i.a)(l,2),j=u[0],b=u[1];return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("img",{id:"imgRestaurant",src:t.streetview,alt:t.restaurantName}),Object(c.jsx)("h2",{className:"mb-5",children:t.restaurantName}),Object(c.jsxs)("p",{children:[t.address,Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"Note :"})," ",q(t.ratings.map((function(e){return e.stars}))),"/5"]}),Object(c.jsx)("div",{className:"darkgrey comment-displayer",children:o&&t.ratings.map((function(e,t){return Object(c.jsx)(E,{comment:e.comment},t)}))}),Object(c.jsxs)("div",{className:"button-container flex-col-spacearound-center",children:[Object(c.jsx)("button",{className:"display-comment-button mb-15",onClick:function(){return s(!o)},children:o?"Cacher les Commentaires":"Afficher les Commentaires"}),!j&&Object(c.jsx)("button",{className:"add-comment-button mb-15",onClick:function(){return b(!j)},children:"Ajouter un Commentaire"})]}),j&&Object(c.jsx)(R,{restaurant:t,showCommentEditor:j,setShowCommentEditor:b})]},t.id)},T="AIzaSyArU8uSLFz-bJIUY_jWrYz7SRKHw2pPUuU",z=function(e){return fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(e.location.lat,",").concat(e.location.lng,"&key=").concat(T)).then((function(e){return e.json()})).then((function(t){return e.address=t.results[0].formatted_address}))},W=function(e){return fetch("https://maps.googleapis.com/maps/api/streetview?size=500x400&location=".concat(e.location.lat,",").concat(e.location.lng,"&key=").concat(T)).then((function(t){return e.streetview=t.url}))},I=function(e,t){return q(e.ratings.map((function(e){return e.stars})))>=t},Y=function(){var e=Object(a.useContext)(l),t=Object(i.a)(e,1)[0],n=Object(a.useContext)(j),r=Object(i.a)(n,1)[0],o=Object(a.useContext)(N),s=Object(i.a)(o,1)[0];return Object(a.useEffect)((function(){s.forEach((function(e){W(e),z(e)}))}),[s]),s.map((function(e){return I(e,t)&&function(e,t){return t.s<e.location.lat&&e.location.lat<t.n&&t.o<e.location.lng&&e.location.lng<t.e}(e,r)?Object(c.jsx)(X,{restaurant:e},e.id):null}))},K=n(4),H=n.n(K),Z=n(5),G=n(7),D=function(){var e=Object(Z.a)(H.a.mark((function e(t,n,c,a,r,o){var s;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={id:t,restaurantName:n,location:{lat:c,lng:a},ratings:[{stars:r,comment:o}]},e.next=3,z(s);case 3:return e.next=5,W(s);case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t,n,c,a,r,o){return e.apply(this,arguments)}}(),Q=[Object(c.jsx)(M,{value:0,label:"0 \xe9toiles"},0),Object(c.jsx)(M,{value:1,label:"1 \xe9toiles"},1),Object(c.jsx)(M,{value:2,label:"2 \xe9toiles"},2),Object(c.jsx)(M,{value:3,label:"3 \xe9toiles"},3),Object(c.jsx)(M,{value:4,label:"4 \xe9toiles"},4),Object(c.jsx)(M,{value:5,label:"5 \xe9toiles"},5)],_=function(e){var t=e.toggle,n=Object(a.useContext)(m),r=Object(i.a)(n,2),o=r[0],s=r[1],l=Object(a.useContext)(d),u=Object(i.a)(l,2),j=u[0],b=u[1],O=Object(a.useContext)(p),h=Object(i.a)(O,1)[0],x=Object(a.useContext)(N),v=Object(i.a)(x,2),f=v[0],g=v[1],A=Object(a.useState)(""),C=Object(i.a)(A,2),w=C[0],S=C[1],y=function(){var e=Object(Z.a)(H.a.mark((function e(t,n,c){var a,r,o,s;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=11;break}return a=Array.from(f),r=a.length+1,o={lat:h.lat,lng:h.lng},e.next=6,D(r,t,o.lat,o.lng,c,n);case 6:s=e.sent,a.push(s),g(a),e.next=12;break;case 11:alert("Merci de donner un titre \xe0 votre restaurant !");case 12:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}();return Object(c.jsxs)(V,{onSubmit:function(e){e.preventDefault(),t(),y(w,j,o),b(),s(0)},className:"modal-form comment-adder flex-col-spacearound-center yellow",children:[Object(c.jsx)(F,{onChange:function(e){return S(e.target.value)},class:"mb-5",name:"title",labelValue:"Nom du restaurant"}),Object(c.jsx)(F,{onChange:function(e){return b(e.target.value)},class:"mb-5",name:"comment",labelValue:"Ajouter un commentaire"}),Object(c.jsx)(P,{value:o,onChange:function(e){return s(e.target.value)},class:"mb-5",name:"star",options:Q}),Object(c.jsx)(J,{className:"display-comment-button",name:"submit",value:"Soumettre"})]})},$=function(){var e=Object(a.useContext)(x),t=Object(i.a)(e,2),n=t[0],r=t[1],o=function(){r(!n)};return n?Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"modal flex-col-center-center",children:[Object(c.jsx)("h2",{children:"Vous souhaitez ajouter un restaurant ?"}),Object(c.jsx)("button",{className:"add-comment-button",onClick:o,children:"Annuler"}),Object(c.jsx)(_,{toggle:o})]})}):null},ee=n(11),te=n.n(ee),ne=function(){return Object(c.jsxs)("div",{className:"loading flex-col-center-center darkgrey",children:[Object(c.jsx)("img",{id:"logo",src:k,alt:"Logo Eatou"}),Object(c.jsx)("h2",{children:"Nous recherchons les meilleurs restos \xe0 proximit\xe9..."}),Object(c.jsx)(te.a,{type:"bars",color:"#FFC400"})]})},ce=function(){var e=Object(Z.a)(H.a.mark((function e(t){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,fetch("https://api.foursquare.com/v2/venues/explore?client_id=".concat("CPSJIZVAFMU5TYHY01C2VNSZOJHZLWSVLUOOVLQYITJL250O","&client_secret=").concat("BOTQMEKLZJKEIBT0UYJKOBLP1FCXPMLVZNFTP4SGKFRP0QZX","&v=20180323&radius=1500&ll=").concat(t.lat,",").concat(t.lng,"&query=restaurant")).then((function(e){return e.json()})).then((function(e){return e.response.groups[0].items})).then(function(){var e=Object(Z.a)(H.a.mark((function e(t){var c,a,r,o,s;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=0;case 1:if(!(c<t.length)){e.next=14;break}return a=t[c].venue.id,r=t[c].venue.name,o={lat:t[c].venue.location.lat,lng:t[c].venue.location.lng},null,2.5,e.next=9,D(a,r,o.lat,o.lng,2.5,null);case 9:s=e.sent,n.push(s);case 11:c++,e.next=1;break;case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(a.useContext)(j),t=Object(i.a)(e,2),n=(t[0],t[1]),r=Object(a.useContext)(l),o=Object(i.a)(r,1)[0],s=Object(a.useContext)(x),u=Object(i.a)(s,2),b=u[0],d=u[1],O=Object(a.useContext)(f),m=Object(i.a)(O,2),h=m[0],v=m[1],g=Object(a.useContext)(p),A=Object(i.a)(g,2),C=A[0],w=A[1],y=Object(a.useContext)(N),k=Object(i.a)(y,2),B=k[0],L=k[1],E=Object(a.useContext)(S),V=Object(i.a)(E,2),F=V[0],P=V[1],J=Object(a.useState)({}),M=Object(i.a)(J,2),U=M[0],R=M[1],q=Object(a.useState)(null),X=Object(i.a)(q,2),z=X[0],W=X[1],Y=Object(a.useCallback)((function(e){var t=function(){var e=Object(Z.a)(H.a.mark((function e(t){var n,c,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={lat:t&&t.coords?t.coords.latitude:48.864716,lng:t&&t.coords?t.coords.longitude:2.349014},e.next=3,ce(n);case 3:c=e.sent,a=Array.from(B),P(n),c.forEach((function(e){a.push(e)})),L(a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();W(e),navigator.geolocation.getCurrentPosition(t,t)}),[B,P,L]);return Object(a.useEffect)((function(){void 0!==F&&v(!1)}),[F,v]),Object(c.jsxs)(G.c,{googleMapsApiKey:T,children:[Object(c.jsxs)(G.a,{onLoad:Y,mapContainerStyle:{width:"100%",height:"100%"},center:F,zoom:14,onBoundsChanged:function(){z&&z.getBounds()&&n({n:z.getBounds().Ua.i,s:z.getBounds().Ua.g,e:z.getBounds().La.i,o:z.getBounds().La.g})},onClick:function(e){d(!b),w({lat:e.latLng.lat(),lng:e.latLng.lng()})},children:[B.map((function(e){return I(e,o)?Object(c.jsx)(G.d,{position:e.location,onClick:function(){return function(e){R(e)}(e)}},e.id):null})),U.location&&Object(c.jsx)(G.b,{position:U.location,clickable:!0,onCloseClick:function(){return R({})},children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:U.restaurantName}),Object(c.jsx)("img",{width:"300px",src:U.streetview,alt:"restaurant"}),Object(c.jsx)("p",{children:U.address}),Object(c.jsx)("h4",{children:"Commentaires :"}),U.ratings.map((function(e,t){return Object(c.jsx)("p",{children:e.comment},t)}))]})}),F&&Object(c.jsx)(G.d,{position:F,icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABKgAAASoBhIydXwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPLSURBVFiFxddPqFVVFAbw377qE1LUwBAVa9AgDNTSEpyUGMmLRyihRP/EP2TRpFEQwiMNB6lUNDEEwYmRUoOiSJvYC4LKSVgDRQ3qlZgNKt+j7JW2G5x15Hg85159FS1YnHv2/vb6vrv32vusnXLOrsVSSpOxAqswH7PD4Wz4cbyLIznnsWuK20tASmkWXsDjyDiMozgTDnPDl6IfCfuxLed8rlv8ThfivpTSIE7jdqzBTKzDZwG7O1y0rQvMmhhzOqU0mFLqa1WQc77KMQuf4CQGom0Ab2E0ZqLJRwNTHXMyYs1q5GogX4BhHMJ0LMZQF9I2H4qx0yPWMBZ0FRD/fBh7MAEbMTYO8tLHIsaEiDlcn4kqeV9M1aEYsP0fENd9e8Q8FBx9TQIGY72mh+p/i7z0jRH7JAavEBBTPxpJs7hh2j/HJtyJp3GsgeBNvI7N+AIL8TV2VZZjcXCMlktRCtiNofg9VAu8rzplgZmCd2q4rXgJqxVbcgZOYH0FU+XYXZ5BkzGClaGuGvQrTGjZqjfg2wp2U4uA+2oxB4JrBJM7iuM146NQW7Xnou8qyzn/hucrTd814Rra1wdXxoqO4mw/rDgV+yvAiziiOIbb7MNxCOgPrsNY1VF8WI7iLkytAE/gFkXmNlrO+Sd8H68/tGAuKKa7tKnBdRTzO4ov2hnMq42dhkX4o01ASilVRI+04XC+9j4vOGdXBcypgW6O4HO7BJ6vSLbRnPOlLrhfau9zqgJK+7Nh4O+4I6U0rSXwsniOdiFv6r9Y/ugoCom5ONUwcDl2YENL4PvjWebJa4oMfyJIV9f6SzsdnGd7CXhSkcVTU0o3VjtSSg/h4XidklKakXM+m3M+n3M+lXO+lHM+EXlSX94rBBxXVDLfuDrhOvgAl9c3pXRTSulFHKxh96WUJjb8iVdQFX8huJYGtwcUWToJb2j/mOyJE/BgF8xxrA3ccnzagNkbXOeD+4qjeGGX4Lsi8N4umIy3A/dyS/8i1aM4qtf92JJz/jKmvMnKfd4r40dqz6p9nHM+hi3Yn3MeK7fhNixJKQ1E56/XGbhqpcA6bgSbg2NJcBZVcZTOO/GqIkEew18tgcc7AxtwLjh2luV69SDagR9xAO8rvoRNgccjYKviwnIgOHZc7ulRlG7Az4rkWRmYR3VPwqcC1x8i1rqWorRLWT4H72FZ9D/YQ8AjgbsVt7mesrzHxWRiPO/tQn4O91TiXP/FpFamDyrWfEixdydF+yJFIfMsnglRM2PcpMAOxdhBtZqy6v/75bSngIqQ/+R6/jeT/+nWhIIUowAAAABJRU5ErkJggg=="})]}),h?Object(c.jsx)(ne,{}):null,Object(c.jsx)($,{clickedLatLng:C})]})},re=function(){return Object(c.jsx)(y,{children:Object(c.jsx)(w,{children:Object(c.jsx)(A,{children:Object(c.jsx)(v,{children:Object(c.jsx)(g,{children:Object(c.jsx)(h,{children:Object(c.jsx)(O,{children:Object(c.jsx)(u,{children:Object(c.jsx)(b,{children:Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)("div",{className:"flex-col-top-center",children:[Object(c.jsx)(B,{}),Object(c.jsxs)("div",{className:"full-container",children:[Object(c.jsx)("div",{className:"display-container",children:Object(c.jsxs)("div",{className:"flex-col-center-center title",children:[Object(c.jsx)("h2",{children:"Restaurants \xe0 proximit\xe9"}),Object(c.jsx)(L,{}),Object(c.jsx)(Y,{})]})}),Object(c.jsx)("div",{className:"map-container border",children:Object(c.jsx)(ae,{})})]})]})})})})})})})})})})})},oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function se(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(re,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/EatouV2",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/EatouV2","/service-worker.js");oe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):se(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):se(t,e)}))}}()},9:function(e,t,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.f361d54f.chunk.js.map