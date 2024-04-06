var posts=["posts/4a17b156.html","posts/dfb8a81f.html","posts/undefined.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };