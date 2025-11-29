var posts=["2025/10/20/AI前端/","2025/10/07/hello-world/","2025/10/20/linux/","2025/10/20/这是一篇新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };