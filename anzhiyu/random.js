var posts=["2025/10/20/AI前端/","2025/10/07/hello-world/","2025/10/20/linux/","2026/03/07/MySQL/","2026/01/04/C++基础入门/","2025/10/20/C++/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };