var posts=["2025/10/20/这是一篇新的博文/","2025/10/07/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };