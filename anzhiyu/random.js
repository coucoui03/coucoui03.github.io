var posts=["posts/dfb8a81f.html","posts/undefined.html","posts/4a17b156.html","posts/dfb8a81f.html","posts/dfb8a81f.html","posts/dfb8a81f.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };