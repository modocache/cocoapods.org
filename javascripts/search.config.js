$(window).ready(function(){var e=$('#search input[type="search"]'),t=$("#search fieldset p"),n=/\b(platform|on\:\w+\s?)+/,r=$("#search_results div.platform"),i=$("#search_results div.allocations"),s=$("#results_container"),o=function(e,t){var n=e.total;n>0?_gaq.push(["_trackEvent","search","with results",t,n]):_gaq.push(["_trackEvent","search","not found",t,0])},u=function(){_gaq.push(["_trackEvent","platform","switch platform",r.find("input:checked").val(),1])},a=function(e,t){_gaq.push(["_trackEvent","allocation","filter categories",e,t])},f=function(e){_gaq.push(["_trackEvent","resultlink","click outbound link",e,1])},l=function(){r.find("label").removeClass("selected"),r.find("input:checked + label").addClass("selected")},c=!1,h=function(){c||($("html, body").animate({scrollTop:e.offset().top},300),s.addClass("active"),t.hide(),c=!0)},p=function(){c&&($("html, body").animate({scrollTop:0},300),s.removeClass("active"),t.show(),c=!1)},d=function(){p(),$("#search span.amount").hide(),r.hide(),i.hide(),$("#search_results div.results").hide()},v=function(){h(),$("#search span.amount").show()},m=function(){r.show(),i.show()},g=function(e){return e.replace(n,"")},y=function(e){$("#search_results div.allocations").hide(),$.getJSON("http://search.cocoapods.org/no_results.json","query="+g(e),function(e,t,n){var r=e.split[0].join(" "),i=e.split[1],s=$("#results_container .no_results .splits");r&&i>0?s.html("<p>We found "+i+" results searching for <a href='javascript:pickyClient.insert(\""+r+"\");'>"+r+"</a>.</p>"):s.html("");var o=$("#results_container .no_results .tags"),u=[];$.each(e.tag,function(e,t){u.push("<a href='javascript:pickyClient.insert(\"tag:"+e+"\");'>"+e+"</a>")}),o.html("<p>Maybe it helps exploring via one of our keywords? </p>"),o.find("p").append(u.sort().join(", ")).append(".")})},b={ios:"iOS",osx:"OS X"},w=/^http/,E=function(e){var t,n,r=e.source;for(var i in r){if(i=="http")return"";n=r[i];if(n.toString().match(w)){t=n;break}}return t},S=function(e){return e.platform=b[e.platforms],e.authors=$.map(e.authors,function(e,t){return"<a href=\"javascript:pickyClient.insert('"+t.replace(/[']/,"\\\\'")+"')\">"+t+"</a>"}),e.docs_link=e.documentation_url||"http://cocoadocs.org/docsets/"+e.id+"/"+e.version,e.site_link=e.link||E(e),e.spec_link="https://github.com/CocoaPods/Specs/tree/master/"+e.id+"/"+e.version+"/"+e.id+".podspec",ich.search_result(e,!0)};pickyClient=new PickyClient({full:"http://search.cocoapods.org/search.json",fullResults:20,live:"http://search.cocoapods.org/search.json",liveResults:20,liveRendered:!0,liveSearchInterval:60,maxSuggestions:5,alwaysShowResults:!0,alwaysShowSelection:!0,wrapResults:'<ol class="results"></ol>',enclosingSelector:"#search",resultsSelector:"#search_results div.results",noResultsSelector:"#results_container .no_results",allocationsSelector:"#search_results div.allocations",hiddenAllocations:"#search_results div.allocations .onrequest",counterSelector:"#search form span.amount",moreSelector:"#search_results .allocations .more",beforeInsert:function(e){if(""!=e){v();var t=e.match(n);if(t){var i=r.find('input[value="'+t[0].replace(/\s+$/g,"")+'"]');i.attr("checked","checked"),r.find("label").removeClass("selected"),r.find("input:checked + label").addClass("selected")}return g(e)}},before:function(e,t){if(e=="")return"";e=e.replace(n,"");var i=r.find("input:checked").val();return i===undefined||i==""?e:i+" "+e},success:function(t,n){o(t,n);if(""==e.val())return!1;0==t.total?y(n):m();var r=t.allocations;return r.each(function(e,t){t.entries=t.entries.map(function(e,t){return S(t)})}),t},after:function(e){$copy_to_clipboard=$("ol.results img.copy");var t=new ZeroClipboard($copy_to_clipboard,{moviePath:"./flashes/ZeroClipboard.swf",forceHandCursor:!0});t.on("noflash",function(e,t){function n(e){}$copy_to_clipboard.popover({trigger:"manual",container:"body"}).on("click",function(e){e.preventDefault()}).on("mouseenter",function(){$(this).popover("show"),$(".popover input").select()}).on("mouseleave",function(){n(this)})}),t.on("load",function(e){e.on("complete",function(e,t){$("h4.has-flash").text("Saved to clipboard"),$(".popover").addClass("saved")}),t.on("mouseover",function(e,t){$(this).popover("show")}),t.on("mouseout",function(e,t){$(this).popover("hide")})}),i.find("li").on("click",function(e){var t=$(e.currentTarget);a(t.find(".text").text(),t.find(".count").text())}),$("ol.results").find("a").on("click",function(e){f(e.currentTarget.href)})},qualifiers:{en:{dependencies:"uses",platform:"on"}},groups:[["platform"]],choices:{en:{platform:"",name:"name",author:"author",summary:"summary",dependencies:"dependency",tags:"tag",version:"version","author,name":"author+name","name,author":"name+author","tags,name":"tag+name","name,tags":"name+tag","version,name":"version+name","name,version":"name+version","name,dependencies":"name+dependency","dependencies,name":"dependency+name","author,dependencies":"author+dependency","dependencies,author":"dependency+author","dependencies,version":"dependency+version","version,dependencies":"version+dependency","author,version":"author+version","version,author":"version+author","summary,version":"version+summary","version,summary":"version+summary","tags,summary":"summary+name","summary,tags":"name+summary","summary,name":"summary+name","name,summary":"name+summary","summary,author":"summary+author","author,summary":"author+summary","summary,dependencies":"summary+dependency","dependencies,summary":"dependency+summary","name,dependencies":"name+dependency","dependencies,name":"dependency+name"}},explanations:{en:{author:"written by",versions:"on version",dependencies:"using",name:"named",summary:"with summary",tags:"tagged as"}},explanationDelimiter:{en:"and"},explanationTokenCallback:function(e,t){if(e=="platform"){var n=t.length;return n==2?"<strong>on</strong> both "+t.join(" & "):"only <strong>on</strong> "+t[0]}}}),e.on("input",function(e){""==this.value?(_gaq.push(["_trackEvent","clear"]),d()):v()}),r.find("input").bind("change",function(e){u(),pickyClient.resend(),l(),$("#pod_search").focus()}),$("#search_container").on("click",function(e){$("#search_container input").focus()});var x=function(e){return e.next()},T=function(e){return e.prev()},N=function(e){var t=$("ol.results li.result"),n=t.closest(".selected").first();n.length>0?(n.removeClass("selected"),n=e(n)):n=t.first(),n.addClass("selected")},C=function(){var e=$("ol.results li.result.selected").first();e.length>0&&(window.document.location.href=e.find("a").first().attr("href"))};$("body").keydown(function(e){switch(e.keyCode){case 40:N(x);break;case 38:N(T);break;case 13:C()}}),window.initial_query!=""&&pickyClient.insertFromURL(window.initial_query)});