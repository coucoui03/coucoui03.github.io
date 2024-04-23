var posts=["posts/dfb8a81g.html","posts/4a17b156.html","posts/undefined.html","posts/dfb8a81e.html","posts/dfb8a81f.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };