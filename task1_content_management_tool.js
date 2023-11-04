function addBlog() {
    // Retrieve input values
    var title = document.getElementById("title").value;
    var image = document.getElementById("image").value;
    var content = document.getElementById("content").value;

    // Create HTML structure for the blog post
    var blogPost = document.createElement("div");
    blogPost.className = "blog-post";
    blogPost.innerHTML = `
      <h3>${title}</h3>
      <img src="${image}" alt="Blog Image">
      <p>${content}</p>
    `;

    // Add the blog post to the preview section
    var previewSection = document.getElementById("preview");
    previewSection.appendChild(blogPost);

    // Clear input fields after adding the blog
    document.getElementById("title").value = "";
    document.getElementById("image").value = "";
    document.getElementById("content").value = "";
}