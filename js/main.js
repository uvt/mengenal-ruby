(function(){function t(t){window.ace&&e!=null?e.getSession().setValue(t):$("#snippet-runner-code-content").html("<pre>"+t+"</pre>")}function n(){return window.ace&&e!=null?e.getSession().getValue():$("#snippet-runner-code-content").text()}var e=null;window.ace&&(e=ace.edit("snippet-runner-code-content"),e.setTheme("ace/theme/twilight"),e.getSession().setMode("ace/mode/ruby"));var r=$("body"),i="http://mengenal-ruby-eval.herokuapp.com",i="http://localhost:4000",s=$("#snippet-runner");$("#snippet-request-error-template").remove(),$(".snippet-runner-code-action-run").click(function(){var e=s.find(".snippet-runner-output"),t=n();$.post(i,{snippet:t},function(t,n,r){e.text(t)}).fail(function(){e.html(snippetRequestError)})}),$(".toggle-snippet-runner").click(function(){r.removeClass("fixed-toc-visible");var e="snippet-runner-visible";r.hasClass(e)?r.removeClass(e):r.addClass(e)}),$(".toggle-fixed-toc").click(function(){r.removeClass("snippet-runner-visible");var e="fixed-toc-visible";r.hasClass(e)?(r.removeClass(e),$("#content").off("click")):(r.addClass(e),$("#content").on("click",function(){$(".toggle-fixed-toc").click()}))});if(r.hasClass("executable")){var o=$("#snippet-actions-template").html();$(".highlight").append(o).prepend(o),$("#snippet-actions-template").remove(),$(".snippet-action-run").click(function(){var e=$(this),n=e.parent().siblings("pre:first").text();t(n);var i="snippet-runner-visible";r.hasClass(i)||r.addClass(i),$(".snippet-runner-code-action-run").click()})}})();