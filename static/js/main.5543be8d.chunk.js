(this["webpackJsonpweather-proj"]=this["webpackJsonpweather-proj"]||[]).push([[0],{41:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),i=a.n(c),s=(a(41),a(3)),o=a(10),u=a(1);function l(){return Object(u.jsx)("section",{className:"app-header",children:Object(u.jsxs)("header",{className:"flex space-between align-center",children:[Object(u.jsx)("div",{className:"header-logo",children:Object(u.jsx)(o.b,{to:"/",children:"\u2600\ufe0fMyWeatherApp"})}),Object(u.jsxs)("div",{className:"header-menu",children:[Object(u.jsx)(o.b,{to:"/",children:Object(u.jsx)("span",{children:"\ud83c\udf26"})}),Object(u.jsx)(o.b,{to:"/favorites",children:Object(u.jsx)("span",{children:"\ud83d\udc8e"})})]})]})})}var v=a(9),h=a.n(v),j=a(16),d=a(11),p=a(12),f=a(14),y=a(13),b={dateConverter:function(){return(new Date).toGMTString()},nameConverter:function(e){return e.split(" ").map((function(e){return e[0].toUpperCase()+e.substring(1)})).join(" ")},tempConverter:function(e){return parseInt((e-32)/1.8)},weeklyDaysConverter:function(e){return function(e){var t=new Array(7);t[0]="Sun",t[1]="Mon",t[2]="Tue",t[3]="Wed",t[4]="Thu",t[5]="Fri",t[6]="Sat";var a=new Date(e).getDay();return t[a]}(e)}};var m=function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"getConvertTemp",value:function(e){return b.tempConverter(e)}},{key:"getConvertDate",value:function(e){return b.weeklyDaysConverter(e)}},{key:"render",value:function(){var e=this.props.day;return Object(u.jsxs)("div",{className:"forecast",children:[Object(u.jsx)("div",{className:"info",children:Object(u.jsx)("p",{children:this.getConvertDate(e.Date)})}),Object(u.jsx)("div",{className:"info",children:Object(u.jsxs)("p",{children:["Max: ",this.getConvertTemp(e.Temperature.Maximum.Value),"\xb0C"]})}),Object(u.jsxs)("div",{className:"info",children:["  ",Object(u.jsxs)("p",{children:["Min: ",this.getConvertTemp(e.Temperature.Minimum.Value),"\xb0C"]})]}),Object(u.jsx)("div",{className:"info",children:Object(u.jsx)("p",{children:e.Day.IconPhrase})})]})}}]),a}(r.a.Component);function O(e){var t=e.fiveDayForecast;return Object(u.jsx)("div",{className:"list-container main-layout",children:Object(u.jsx)("div",{className:"cards-container",children:t.map((function(e){return Object(u.jsx)(m,{day:e},e.Date)}))})})}var x={store:function(e,t){localStorage[e]=JSON.stringify(t)},load:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=localStorage[e];return a?JSON.parse(a):t}};var C=a(25),g="N3cAuq3Xbnocf8JevGGcm2kkxelKEDPY",F="http://dataservice.accuweather.com/locations/v1/cities/",w="favs",D=[],T="",N={cityConverter:function(e){var t=function(e){return"".concat(F,"search?apikey=").concat(g,"&q=").concat(e)}(e);return C.get(t).then((function(e){return e.data})).catch((function(e){alert("Can not find this location. Please try another one. "),console.log("ERR city service-cityConverter :",e)}))},updateFav:function(e){if(!e.cityCode)return T="Please enter some location";var t=(a=e.cityCode,D.findIndex((function(e){return e.cityCode===a})));t>=0?(D.splice(t,1),T="".concat(e.city," is successfully removed.")):(D.push(e),T="".concat(e.city," was added to favorites!"));var a;return x.store(w,D),T},queryFav:function(){var e=x.load(w);return D=e}};function k(e){var t=e.cityObj,a=e.toggleFav,n=e.getWeather;return Object(u.jsxs)("form",{className:"main-layout",action:"",onSubmit:n,children:[Object(u.jsx)("input",{type:"text",name:"city",placeholder:"City...",autoComplete:"off"}),Object(u.jsx)("button",{children:"Get Weather"}),Object(u.jsxs)("button",{onClick:function(){var e=N.updateFav(t);alert(e),a(t)},children:[t.isFavorite&&Object(u.jsx)("span",{children:"Remove from favorites"}),!t.isFavorite&&Object(u.jsx)("span",{children:"Add to favorites"})]})]})}function S(e){var t=e.cityObj;return Object(u.jsxs)("div",{className:"weather-cmp main-layout",children:[t.date&&Object(u.jsx)("p",{children:t.date}),t.description&&Object(u.jsx)("p",{children:t.description}),Object(u.jsx)("div",{className:"location-desc",children:Object(u.jsxs)("div",{className:"loc-and-temp flex",children:[Object(u.jsxs)("div",{className:"flex",children:[t.isFavorite&&Object(u.jsx)("p",{children:"\ud83d\udc8e"}),t.city&&Object(u.jsxs)("span",{children:[t.city," "]})]}),t.convertTemp&&Object(u.jsxs)("p",{children:[t.convertTemp,"\xb0",t.convertUnit]})]})})]})}var P=a(25),M="N3cAuq3Xbnocf8JevGGcm2kkxelKEDPY",A="http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/",W="http://dataservice.accuweather.com/forecasts/v1/daily/5day/",E={currWeatherQuery:function(e){var t=function(e){return"".concat(A).concat(e,"?apikey=").concat(M)}(e);return P.get(t).then((function(e){return e.data})).catch((function(e){alert("OOPs, try again"),console.log("ERR weather service- currWeatherQuery:",e)}))},fiveDayForecast:function(e){var t=function(e){return"".concat(W).concat(e,"?apikey=").concat(M)}(e);return P.get(t).then((function(e){return e.data})).catch((function(e){alert("OOPs, try again"),console.log("ERR weather service- fiveDayForecast:",e)}))}};var I=function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={city:"Tel Aviv",cityCode:215854,date:b.dateConverter(),temp:"",unit:"",convertTemp:"",convertUnit:"C",description:"",fiveDayForecast:[],isFavorite:""},e.getCurrForecast=Object(j.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.currWeatherQuery(e.state.cityCode);case 2:a=t.sent,e.setState({temp:a[0].Temperature.Value,unit:a[0].Temperature.Unit,convertTemp:b.tempConverter(a[0].Temperature.Value),description:a[0].IconPhrase});case 4:case"end":return t.stop()}}),t)}))),e.getFiveDaysForecast=Object(j.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.fiveDayForecast(e.state.cityCode);case 2:a=t.sent,e.setState({fiveDayForecast:a.DailyForecasts});case 4:case"end":return t.stop()}}),t)}))),e.getWeather=function(){var t=Object(j.a)(h.a.mark((function t(a){var n,r,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=a.target.elements.city.value?a.target.elements.city.value:e.state.city,r=b.nameConverter(n),t.next=5,N.cityConverter(r);case 5:c=t.sent,e.setState({city:r,cityCode:c[0].Key}),e.getCurrForecast(),e.getFiveDaysForecast();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onToggleFav=function(){e.state.isFavorite?e.setState({isFavorite:!1}):e.setState({isFavorite:!0})},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getCurrForecast(),this.getFiveDaysForecast()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"main-container flex column align-center",children:[Object(u.jsx)(k,{getWeather:this.getWeather,spellCheck:this.spellCheck,cityObj:this.state,toggleFav:this.onToggleFav}),Object(u.jsx)(S,{cityObj:this.state}),this.state.fiveDayForecast&&Object(u.jsx)(O,{fiveDayForecast:this.state.fiveDayForecast})]})}}]),a}(r.a.Component),U=[{DateTime:"2021-09-23T18:00:00+03:00",EpochDateTime:1632409200,WeatherIcon:2,IconPhrase:"Mostly sunny",HasPrecipitation:!1,IsDaylight:!0,Temperature:{Value:81,Unit:"F",UnitType:18},PrecipitationProbability:0,MobileLink:"http://www.accuweather.com/en/il/tel-aviv/215854/hourly-weather-forecast/215854?day=1&hbhhour=18&lang=en-us",Link:"http://www.accuweather.com/en/il/tel-aviv/215854/hourly-weather-forecast/215854?day=1&hbhhour=18&lang=en-us"}],R=function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={city:"",cityCode:"",date:b.dateConverter(),temp:"",unit:"",convertTemp:"",convertUnit:"C",description:"",fiveDayForecast:[],isFavorite:!1},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getWeatherToFavCity()}},{key:"getWeatherToFavCity",value:function(){var e=this.props.favCity;this.setState({city:e.city,cityCode:e.cityCode,temp:U[0].Temperature.Value,unit:U[0].Temperature.Unit,convertTemp:b.tempConverter(U[0].Temperature.Value),description:U[0].IconPhrase,isFavorite:e.isFavorite})}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"fav-forecast",children:[Object(u.jsx)("div",{className:"fav-loc-name ",children:Object(u.jsx)(o.b,{to:"/",children:Object(u.jsx)("p",{children:this.state.city})})}),Object(u.jsxs)("p",{children:[this.state.convertTemp,"\xb0",this.state.convertUnit]}),Object(u.jsx)("p",{children:this.state.description})]})}}]),a}(r.a.Component);function V(e){var t=e.favCitiesArray;return Object(u.jsx)("div",{className:"list-container main-layout",children:Object(u.jsx)("div",{className:"cards-container",children:t.map((function(e){return Object(u.jsx)(R,{favCity:e},e.cityCode)}))})})}var _=function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={favCities:[]},e.getFavCitiesArray=Object(j.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.queryFav();case 2:a=t.sent,e.setState({favCities:a});case 4:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getFavCitiesArray()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"fav-container main-container flex column align-center ",children:[Object(u.jsx)("div",{className:"main-layout",children:Object(u.jsx)("h3",{children:"My favorites locations:"})}),this.state.favCities&&Object(u.jsx)(V,{favCitiesArray:this.state.favCities}),!this.state.favCities&&Object(u.jsxs)("div",{className:"fav-page-msg main-layout",children:[Object(u.jsx)("p",{children:"Your list is empty"}),Object(u.jsx)("div",{className:"list-container"})]})]})}}]),a}(r.a.Component);function G(){return Object(u.jsx)("footer",{className:"flex justify-center",children:Object(u.jsx)("small",{children:"Created by Dina K \ud83d\udc8d 2021"})})}a(68),a(69);function J(){return Object(u.jsx)(r.a.Fragment,{children:Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(l,{}),Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{component:_,path:"/favorites"}),Object(u.jsx)(s.a,{component:I,path:"/"})]}),Object(u.jsx)(G,{})]})})}var q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))},L=a(36),K=a(35),X=a(20),Q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.b,Y=Object(X.c)(Q(Object(X.a)(K.a)));i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(L.a,{store:Y,children:Object(u.jsx)(J,{})})})}),document.getElementById("root")),q()}},[[70,1,2]]]);
//# sourceMappingURL=main.5543be8d.chunk.js.map