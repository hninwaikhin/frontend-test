(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},21:function(e,t,a){e.exports=a(42)},27:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),n=a(18),s=a.n(n),i=(a(27),a(7)),o=a(8),c=a(10),m=a(9),d=a(11),h=a(44),p=a(45),u=a(43),v=a(46),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,l=new Array(r),n=0;n<r;n++)l[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v.a,{to:"/"},l.a.createElement("label",{style:{paddingLeft:5,fontSize:40}},"\u2630")),l.a.createElement(v.a,{to:"/watchmovielist"},l.a.createElement("label",{style:{fontSize:60}},"\u2606")))}}]),t}(r.Component),g=(a(32),a(34),a(16),a(17),a(4)),E=a.n(g),b=a(2),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,l=new Array(r),n=0;n<r;n++)l[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={watchlist:[],items:[],show:!1,showTrailer:!1,crew:[],cast:[],relatedMovies:[],relatedMovieTitle:"",backgroundsTitle:"",backdrops:[],trailer:[{key:"QMtHZGn1Ka4"}],detail:[{genres:[{id:18,name:""}],percent_class:""}],genres:[{genres:[{id:18,name:""}],percent_class:""}]},a.showModal=function(){a.movieDetail(),a.movieTrailer(),a.relatedMovie(),a.getBackgrounds(),a.setState({show:!0})},a.hideModal=function(){a.setState({show:!1})},a.showModalTrailer=function(){a.setState({showTrailer:!0})},a.hideModalTrailer=function(){a.setState({showTrailer:!1})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getGenres()}},{key:"handleAdd",value:function(e){var t=this.props.movie.id;this.addToWatchList(t)}},{key:"addToWatchList",value:function(e){var t;t={id:e,title:this.props.movie.title,release_date:this.props.movie.release_date,poster:this.props.movie.poster,vote_average:this.props.movie.vote_average,overview:this.props.movie.overview};var a=[];null!==localStorage.getItem("watchlistshow")?(a=Array.from(JSON.parse(localStorage.getItem("watchlistshow"))))&&(a.push(t),a=this.getUnique(a,"id"),localStorage.setItem("watchlistshow",JSON.stringify(a)),this.setState({watchlist:a})):(this.setState({watchlist:t}),a.push(t),localStorage.setItem("watchlistshow",JSON.stringify(a)))}},{key:"getUnique",value:function(e,t){return e.map(function(e){return e[t]}).map(function(e,t,a){return a.indexOf(e)===t&&t}).filter(function(t){return e[t]}).map(function(t){return e[t]})}},{key:"getGenres",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"?api_key=40c4aa46310b723fa9400363a0f2893c&append_to_response=credits";E.a.ajax({url:t,success:function(t){var a=t,r=a.genres;r.length>2&&(r=r.slice(0,2),a.genres=r),a.percent_class="";var l=[];l.push(a),e.setState({genres:l})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"movieDetail",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"?api_key=40c4aa46310b723fa9400363a0f2893c&append_to_response=credits";E.a.ajax({url:t,success:function(t){var a=t,r=a.runtime,l=Math.trunc(r/60),n=r%60;a.runtime=l+"hr "+n+"min";var s=a.release_date.split("-");a.release_date=s[0],a.percent=10*a.vote_average,a.percent_class="c100 p"+a.percent+" dark small green";var i=[];i.push(a);var o=a.credits.cast;o.length>5&&(o=o.slice(0,5));var c=a.credits.crew;c.length>5&&(c=c.slice(0,5)),o.forEach(function(e){null!==e.profile_path?e.profile_path="https://image.tmdb.org/t/p/w185"+e.profile_path:e.profile_path="https://www.underconsideration.com/brandnew/archives/google_broken_image_00_b_logo_detail.gif"}),e.setState({detail:i}),e.setState({crew:c}),e.setState({cast:o})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"relatedMovie",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"/similar?api_key=40c4aa46310b723fa9400363a0f2893c&language=en-US";E.a.ajax({url:t,success:function(t){var a=t.results;a.length>3&&(a=a.slice(0,3)),a.length>0&&e.setState({relatedMovieTitle:"Related Movies"}),a.forEach(function(e){null!==e.poster_path?e.poster_path="https://image.tmdb.org/t/p/w185"+e.poster_path:e.poster_path="https://www.underconsideration.com/brandnew/archives/google_broken_image_00_b_logo_detail.gif"}),e.setState({relatedMovies:a})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"getBackgrounds",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"/images?api_key=40c4aa46310b723fa9400363a0f2893c&language=ru-RU&include_image_language=ru,null";E.a.ajax({url:t,success:function(t){var a=t.posters;a.length>4&&(a=a.slice(0,4)),a.length>0&&e.setState({backgroundsTitle:"Backgrounds"}),a.forEach(function(e){null!==e.file_path?e.file_path="https://image.tmdb.org/t/p/w185"+e.file_path:e.file_path="https://www.underconsideration.com/brandnew/archives/google_broken_image_00_b_logo_detail.gif"}),e.setState({backdrops:a})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"movieTrailer",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"/videos?api_key=40c4aa46310b723fa9400363a0f2893c&language=en-US";E.a.ajax({url:t,success:function(t){var a=t.results,r=a;r.length>0&&(r[0].key="https://www.youtube.com/embed/"+a[0].key,e.setState({trailer:r}))},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"render",value:function(){return l.a.createElement("div",{key:this.props.movie.id,style:{width:"230px",height:"395px",paddingTop:5,color:"#00cca3",float:"left"}},l.a.createElement("main",null,l.a.createElement(k,{show:this.state.show,handleClose:this.hideModal},l.a.createElement("div",{className:"modal-div1"},l.a.createElement("div",{className:"modal-img"},l.a.createElement("img",{style:{position:"relative"},alt:"poster",src:this.props.movie.poster})),l.a.createElement("div",{className:"bookmark-div"},l.a.createElement("button",{className:"icon-btn"},l.a.createElement(b.a,null)),l.a.createElement("span",null,"Bookmark "),l.a.createElement("button",{className:"icon-btn",id:this.props.movie.id,onClick:this.handleAdd.bind(this)},l.a.createElement(b.e,null))," ","add to watchList"),l.a.createElement("div",{className:"related-div"},l.a.createElement("div",{className:"modal-header",style:{paddingLeft:30}},l.a.createElement("strong",null,this.state.relatedMovieTitle),l.a.createElement("br",null)),l.a.createElement("div",{style:{paddingLeft:10}},this.state.relatedMovies.map(function(e,t){return l.a.createElement("div",{className:"related-movie",key:t},l.a.createElement("div",{className:"related-img"},l.a.createElement("img",{alt:"poster",src:e.poster_path})),l.a.createElement("br",null),e.title)})))),l.a.createElement("div",{className:"modal-div2"},l.a.createElement("div",{className:"modal-title"},this.props.movie.title),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("div",{className:"detail-top"},l.a.createElement("div",{className:this.state.detail[0].percent_class},l.a.createElement("span",{style:{color:"#fff"}},l.a.createElement("strong",null,this.state.detail[0].percent),l.a.createElement("sup",{style:{fontSize:12}},"%")),l.a.createElement("div",{className:"slice"},l.a.createElement("div",{className:"bar"}),l.a.createElement("div",{className:"fill"}))),l.a.createElement("div",{className:"links"},l.a.createElement("button",{className:"trailer-btn",onClick:this.showModalTrailer},l.a.createElement("span",{className:"green-text"},l.a.createElement("span",{style:{fontSize:32}},l.a.createElement(b.d,null)),l.a.createElement("br",null),"PlayTrailer"))),l.a.createElement("div",{className:"info-div"},"Genres:"," ",l.a.createElement("span",{className:"green-text"},this.state.detail[0].genres.map(function(e){return e.name}).join(", ")),l.a.createElement("br",null),"Release Year:"," ",l.a.createElement("span",{className:"green-text"},this.state.detail[0].release_date),l.a.createElement("br",null),"Duration:"," ",l.a.createElement("span",{className:"green-text"},this.state.detail[0].runtime)))),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("div",{className:"modal-header",style:{paddingBottom:0}},l.a.createElement("strong",null,"Overview")),l.a.createElement("p",{className:"overview"},this.state.detail[0].overview)),l.a.createElement("div",{className:"crew-div"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("strong",null,"Feature Crew"),l.a.createElement("br",null)),this.state.crew.map(function(e,t){return l.a.createElement("div",{key:t,className:"crew"},e.job," :"," ",l.a.createElement("span",{className:"green-text"},e.name))})),l.a.createElement("hr",null),l.a.createElement("div",{className:"modal-header"},l.a.createElement("strong",null,"Top Billed Cast"),l.a.createElement("br",null)),l.a.createElement("div",{className:"cast-div"},this.state.cast.map(function(e,t){return l.a.createElement("div",{className:"cast",key:t},l.a.createElement("div",{className:"cast-profile"},l.a.createElement("img",{alt:"profile",src:e.profile_path})),l.a.createElement("br",null),e.name,l.a.createElement("br",null),l.a.createElement("span",{className:"green-text"},e.character))})),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("div",{className:"modal-header"},l.a.createElement("strong",null,this.state.backgroundsTitle),l.a.createElement("br",null)),this.state.backdrops.map(function(e,t){return l.a.createElement("div",{className:"backdrops-div",key:t},l.a.createElement("div",{className:"backdrops"},l.a.createElement("img",{alt:"backgrounds",src:e.file_path})))})),l.a.createElement(y,{show:this.state.showTrailer,handleCloseTrailer:this.hideModalTrailer},l.a.createElement("iframe",{title:this.state.trailer[0].key,src:this.state.trailer[0].key,width:"500",height:"400",frameBorder:"0",allowFullScreen:"allowFullScreen"}))),l.a.createElement("div",{className:"poster-container",id:this.props.movie.id},l.a.createElement("div",{className:"poster",id:this.props.movie.id,onClick:this.showModal},l.a.createElement("div",{className:"movie-poster"},l.a.createElement("img",{alt:"poster",src:this.props.movie.poster})),l.a.createElement("div",{className:"hoverText"},l.a.createElement("strong",null,this.props.movie.title),l.a.createElement("p",null,this.props.movie.overview)))),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("div",{className:"title"},l.a.createElement("strong",null," ",this.props.movie.title),l.a.createElement("br",null),l.a.createElement("span",{style:{color:"#fff",textAlign:"left"}},"Genres:",l.a.createElement("span",{className:"green-text"},this.state.genres[0].genres.map(function(e){return e.name}).join(", "))," ","Year:"),l.a.createElement("span",null," ",this.props.movie.release_date))),l.a.createElement("center",null,l.a.createElement("div",{className:"vote"},l.a.createElement("strong",null,this.props.movie.vote_average),l.a.createElement("span",{className:"icons"},l.a.createElement(b.c,null),l.a.createElement(b.a,null),l.a.createElement(b.e,null)))),l.a.createElement("br",null)))}}]),t}(r.Component),k=function(e){var t=e.handleClose,a=e.show,r=e.children,n=a?"modal display-block":"modal display-none";return l.a.createElement("div",{className:n},l.a.createElement("div",{className:"modal-main"},l.a.createElement("button",{className:"back-btn",onClick:t},l.a.createElement(b.b,null),"Back to all movies"),r))},y=function(e){var t=e.handleCloseTrailer,a=e.show,r=e.children,n=a?"modal display-block":"modal display-none";return l.a.createElement("div",{className:n},l.a.createElement("div",{className:"trailermodal-main"},l.a.createElement("button",{onClick:t,style:{background:"red"}},l.a.createElement(b.f,null)),l.a.createElement("br",null),r))},_=w,N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={rows:[],watchList:[]},a.pageCnt=1,a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.filterMovie("popular")}},{key:"filterMovie",value:function(e){var t=this,a=[];this.setState({rows:[]});for(var r=function(r){a=[];var n="https://api.themoviedb.org/3/movie/"+e+"?api_key=40c4aa46310b723fa9400363a0f2893c&language=en-US&page="+r;E.a.ajax({url:n,success:function(e){e.results.forEach(function(e){e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=e.release_date.split("-");e.release_date=t[0];var r=l.a.createElement(_,{key:e.id,movie:e});a.push(r)}),r===t.pageCnt&&t.setState({rows:a})},error:function(e,t,a){console.error("Failed to fetch data")}})},n=1;n<=this.pageCnt;n++)r(n)}},{key:"performSearch",value:function(e){var t=this,a="https://api.themoviedb.org/3/search/movie?api_key=40c4aa46310b723fa9400363a0f2893c&query="+e;E.a.ajax({url:a,success:function(e){var a=e.results,r=[];a.forEach(function(e){null!==e.poster_path?e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path:e.poster="https://www.underconsideration.com/brandnew/archives/google_broken_image_00_b_logo_detail.gif";var t=e.release_date.split("-");e.release_date=t[0];var a=l.a.createElement(_,{key:e.id,movie:e});r.push(a)}),t.setState({rows:r})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"searchChangeHandler",value:function(e){var t=e.target.value;""===t.trim()?this.filterMovie("popular"):this.performSearch(t)}},{key:"buttonHandler",value:function(e){var t=e.target.id;this.filterMovie(t)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"title-box"},"All Movies",l.a.createElement("hr",null)),l.a.createElement("br",null),l.a.createElement("input",{className:"search-box",style:{fontSize:18,display:"block",width:"95%",marginTop:0,borderTop:0,borderLeft:0,borderRight:0,borderBottom:"0.3px solid #8091A5",marginLeft:"30px",backgroundColor:"#262d40",color:"white"},onChange:this.searchChangeHandler.bind(this),placeholder:"Search..."}),l.a.createElement("div",{className:"button-div"},l.a.createElement("button",{type:"button",className:"btn btn-outline-primary",id:"popular",onClick:this.buttonHandler.bind(this)},"POPULAR"),l.a.createElement("button",{type:"button",className:"btn btn-outline-primary",id:"top_rated",onClick:this.buttonHandler.bind(this)},"TOP RATED"),l.a.createElement("button",{type:"button",className:"btn btn-outline-primary",id:"upcoming",onClick:this.buttonHandler.bind(this)},"UPCOMING"),l.a.createElement("button",{type:"button",className:"btn btn-outline-primary",id:"now_playing",onClick:this.buttonHandler.bind(this)},"NOW PLAYING")),l.a.createElement("div",{style:{position:"relative",maxHeight:"480px",overflowY:"scroll",overflowX:"hidden"}},this.state.rows))}}]),t}(r.Component),S=a(12),M=(a(38),function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,l=new Array(r),n=0;n<r;n++)l[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={watchlist:[],items:[],show:!1,showTrailer:!1,crew:[],cast:[],relatedMovies:[],backdrops:[],relatedMovieTitle:"",backgroundsTitle:"",trailer:[{key:"QMtHZGn1Ka4"}],detail:[{genres:[{id:18,name:""}],percent_class:""}],genres:[{genres:[{id:18,name:""}],percent_class:""}]},a.showModal=function(){a.movieDetail(),a.movieTrailer(),a.relatedMovie(),a.getBackgrounds(),a.setState({show:!0})},a.hideModal=function(){a.setState({show:!1})},a.showModalTrailer=function(){a.setState({showTrailer:!0})},a.hideModalTrailer=function(){a.setState({showTrailer:!1})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getGenres()}},{key:"handleRemove",value:function(e){var t=this.props.movie.id;this.removeMovie(t)}},{key:"removeMovie",value:function(e){var t=JSON.parse(localStorage.getItem("watchlistshow"));t=t.filter(function(t){return t.id!==e}),localStorage.setItem("watchlistshow",JSON.stringify(t)),this.props.displayWatchlist()}},{key:"getGenres",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"?api_key=40c4aa46310b723fa9400363a0f2893c&append_to_response=credits";E.a.ajax({url:t,success:function(t){var a=t,r=a.genres;r.length>2&&(r=r.slice(0,2),a.genres=r),a.percent_class="";var l=[];l.push(a),e.setState({genres:l})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"movieDetail",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"?api_key=40c4aa46310b723fa9400363a0f2893c&append_to_response=credits";E.a.ajax({url:t,success:function(t){var a=t,r=a.runtime,l=Math.trunc(r/60),n=r%60;a.runtime=l+"hr "+n+"min";var s=a.release_date.split("-");a.release_date=s[0],a.percent=10*a.vote_average,a.percent_class="c100 p"+a.percent+" dark small green";var i=[];i.push(a);var o=a.credits.cast;o.length>5&&(o=o.slice(0,5));var c=a.credits.crew;c.length>5&&(c=c.slice(0,5)),o.forEach(function(e){null!==e.profile_path?e.profile_path="https://image.tmdb.org/t/p/w185"+e.profile_path:e.profile_path="https://www.underconsideration.com/brandnew/archives/google_broken_image_00_b_logo_detail.gif"}),e.setState({detail:i}),e.setState({crew:c}),e.setState({cast:o})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"relatedMovie",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"/similar?api_key=40c4aa46310b723fa9400363a0f2893c&language=en-US";E.a.ajax({url:t,success:function(t){var a=t.results;a.length>3&&(a=a.slice(0,3)),a.length>0&&e.setState({relatedMovieTitle:"Related Movies"}),a.forEach(function(e){null!==e.poster_path?e.poster_path="https://image.tmdb.org/t/p/w185"+e.poster_path:e.poster_path="https://www.underconsideration.com/brandnew/archives/google_broken_image_00_b_logo_detail.gif"}),e.setState({relatedMovies:a})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"getBackgrounds",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"/images?api_key=40c4aa46310b723fa9400363a0f2893c&language=ru-RU&include_image_language=ru,null";E.a.ajax({url:t,success:function(t){var a=t.posters;a.length>4&&(a=a.slice(0,4)),a.length>0&&e.setState({backgroundsTitle:"Backgrounds"}),a.forEach(function(e){null!==e.file_path?e.file_path="https://image.tmdb.org/t/p/w185"+e.file_path:e.file_path="https://www.underconsideration.com/brandnew/archives/google_broken_image_00_b_logo_detail.gif"}),e.setState({backdrops:a})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"movieTrailer",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/"+this.props.movie.id+"/videos?api_key=40c4aa46310b723fa9400363a0f2893c&language=en-US";E.a.ajax({url:t,success:function(t){var a=t.results,r=a;r.length>0&&(r[0].key="https://www.youtube.com/embed/"+a[0].key,e.setState({trailer:r}))},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"render",value:function(){return l.a.createElement("div",{key:this.props.movie.id,style:{width:230,height:460,paddingTop:5,color:"#00cca3",float:"left"}},l.a.createElement("main",null,l.a.createElement(T,{show:this.state.show,handleClose:this.hideModal},l.a.createElement("div",{className:"modal-div1"},l.a.createElement("div",{className:"modal-img"},l.a.createElement("img",{style:{position:"relative"},alt:"poster",src:this.props.movie.poster})),l.a.createElement("div",{className:"bookmark-div"},l.a.createElement("button",{className:"icon-btn"},l.a.createElement(b.a,null)),l.a.createElement("span",null,"Bookmark "),l.a.createElement("button",{className:"icon-btn"},l.a.createElement(b.e,null))," ","added to watchList"),l.a.createElement("div",{className:"related-div"},l.a.createElement("div",{className:"modal-header",style:{paddingLeft:30}},l.a.createElement("strong",null,this.state.relatedMovieTitle),l.a.createElement("br",null)),this.state.relatedMovies.map(function(e,t){return l.a.createElement("div",{className:"related-movie",key:t},l.a.createElement("div",{className:"related-img"},l.a.createElement("img",{alt:"poster",src:e.poster_path})),l.a.createElement("br",null),e.title)}))),l.a.createElement("div",{className:"modal-div2"},l.a.createElement("div",{className:"modal-title"},this.props.movie.title),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("div",{className:"detail-top"},l.a.createElement("div",{className:this.state.detail[0].percent_class},l.a.createElement("span",{style:{color:"#fff"}},l.a.createElement("strong",null,this.state.detail[0].percent),l.a.createElement("sup",{style:{fontSize:12}},"%")),l.a.createElement("div",{className:"slice"},l.a.createElement("div",{className:"bar"}),l.a.createElement("div",{className:"fill"}))),l.a.createElement("div",{className:"links"},l.a.createElement("button",{className:"trailer-btn",onClick:this.showModalTrailer},l.a.createElement("span",{className:"green-text"},l.a.createElement("span",{style:{fontSize:32}},l.a.createElement(b.d,null)),l.a.createElement("br",null),"PlayTrailer"))),l.a.createElement("div",{className:"info-div"},"Genres:"," ",l.a.createElement("span",{className:"green-text"},this.state.detail[0].genres.map(function(e){return e.name}).join(", ")),l.a.createElement("br",null),"Release Year:"," ",l.a.createElement("span",{className:"green-text"},this.state.detail[0].release_date),l.a.createElement("br",null),"Duration:"," ",l.a.createElement("span",{className:"green-text"},this.state.detail[0].runtime)))),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("div",{className:"modal-header",style:{paddingBottom:0}},l.a.createElement("strong",null,"Overview")),l.a.createElement("p",{className:"overview"},this.state.detail[0].overview)),l.a.createElement("div",{className:"crew-div"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("strong",null,"Feature Crew"),l.a.createElement("br",null)),this.state.crew.map(function(e,t){return l.a.createElement("div",{key:t,className:"crew"},e.job," :"," ",l.a.createElement("span",{className:"green-text"},e.name))})),l.a.createElement("hr",null),l.a.createElement("div",{className:"modal-header"},l.a.createElement("strong",null,"Top Billed Cast"),l.a.createElement("br",null)),l.a.createElement("div",{className:"cast-div"},this.state.cast.map(function(e,t){return l.a.createElement("div",{className:"cast",key:t},l.a.createElement("div",{className:"cast-profile"},l.a.createElement("img",{alt:"profile",src:e.profile_path}),l.a.createElement("br",null)),e.name,l.a.createElement("br",null),l.a.createElement("span",{className:"green-text"},e.character))})),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("div",{className:"modal-header"},l.a.createElement("strong",null,this.state.backgroundsTitle),l.a.createElement("br",null)),this.state.backdrops.map(function(e,t){return l.a.createElement("div",{className:"backdrops-div",key:t},l.a.createElement("div",{className:"backdrops"},l.a.createElement("img",{alt:"backgrounds",src:e.file_path})))})),l.a.createElement(j,{show:this.state.showTrailer,handleCloseTrailer:this.hideModalTrailer},l.a.createElement("iframe",{title:this.state.trailer[0].key,src:this.state.trailer[0].key,width:"500",height:"400",frameBorder:"0",allowFullScreen:"allowFullScreen"}))),l.a.createElement("div",{className:"poster-container",id:this.props.movie.id},l.a.createElement("div",{className:"poster",id:this.props.movie.id,onClick:this.showModal},l.a.createElement("div",{className:"movie-poster"},l.a.createElement("img",{alt:"poster",src:this.props.movie.poster})),l.a.createElement("div",{className:"hoverText"},l.a.createElement("strong",null,this.props.movie.title),l.a.createElement("p",null,this.props.movie.overview)))),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("div",{className:"title"},l.a.createElement("strong",null,this.props.movie.title),l.a.createElement("br",null),l.a.createElement("span",{style:{textAlign:"left",color:"#fff"}},"Genres:",l.a.createElement("span",{className:"green-text"},this.state.genres[0].genres.map(function(e){return e.name}).join(", "))," ","Year :"),l.a.createElement("span",null," ",this.props.movie.release_date))),l.a.createElement("center",null,l.a.createElement("div",{className:"vote"},l.a.createElement("strong",null,this.props.movie.vote_average),l.a.createElement("span",{className:"icons"},l.a.createElement(b.c,null),l.a.createElement(b.a,null),l.a.createElement(b.e,null))),l.a.createElement("button",{className:"btn-remove",id:this.props.movie.id,onClick:this.handleRemove.bind(this)},"REMOVE")),l.a.createElement("br",null)))}}]),t}(r.Component)),T=function(e){var t=e.handleClose,a=e.show,r=e.children,n=a?"modal display-block":"modal display-none";return l.a.createElement("div",{className:n},l.a.createElement("div",{className:"modal-main"},l.a.createElement("button",{className:"back-btn",onClick:t},l.a.createElement(b.b,null),"Back to watchlist"),l.a.createElement("br",null),r))},j=function(e){var t=e.handleCloseTrailer,a=e.show,r=e.children,n=a?"modal display-block":"modal display-none";return l.a.createElement("div",{className:n},l.a.createElement("div",{className:"trailermodal-main"},l.a.createElement("button",{onClick:t,style:{background:"red"}},l.a.createElement(b.f,null)),l.a.createElement("br",null),r))},x=M,O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={watchList:[]},a.displayWatchlist=a.displayWatchlist.bind(Object(S.a)(Object(S.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.displayWatchlist()}},{key:"displayWatchlist",value:function(){var e,t=this,a=[],r=[];(e=JSON.parse(localStorage.getItem("watchlistshow")))&&(r=e),Array.prototype.forEach.call(r,function(e){var r=l.a.createElement(x,{displayWatchlist:t.displayWatchlist,key:e.id,movie:e});a.push(r)}),this.setState({rows:a})}},{key:"performSearch",value:function(e){var t=this,a="https://api.themoviedb.org/3/search/movie?api_key=40c4aa46310b723fa9400363a0f2893c&query="+e;E.a.ajax({url:a,success:function(e){var a=e.results,r=[];a.forEach(function(e){null!==e.poster_path?e.poster="https://image.tmdb.org/t/p/w185"+e.poster_path:e.poster="https://www.underconsideration.com/brandnew/archives/google_broken_image_00_b_logo_detail.gif";var t=l.a.createElement(_,{key:e.id,movie:e});r.push(t)}),t.setState({rows:r})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"searchChangeHandler",value:function(e){var t=e.target.value;""===t.trim()?this.displayWatchlist():this.performSearch(t)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"watchlist-title-box"},"My Watchlist",l.a.createElement("hr",null)),l.a.createElement("input",{className:"search-box",style:{fontSize:18,display:"block",width:"95%",marginTop:30,marginBottom:20,borderTop:0,borderLeft:0,borderRight:0,borderBottom:"0.3px solid #8091A5",marginLeft:"30px",backgroundColor:"#262d40",color:"white"},onChange:this.searchChangeHandler.bind(this),placeholder:"Search..."}),l.a.createElement("div",{style:{position:"relative",height:"520px",overflowY:"scroll",overflowX:"hidden"}},this.state.rows))}}]),t}(r.Component),C=(a(40),function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,l=new Array(r),n=0;n<r;n++)l[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("div",null,l.a.createElement("div",{className:"sidenav"},l.a.createElement(f,{style:{position:"fix"}})),l.a.createElement("div",{className:"main"},l.a.createElement(p.a,null,l.a.createElement(u.a,{path:"/",component:N,exact:!0}),l.a.createElement(u.a,{path:"/frontend-test/",component:N,exact:!0}),l.a.createElement(u.a,{path:"/watchmovielist",component:O})))))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.e2fa9f5c.chunk.js.map