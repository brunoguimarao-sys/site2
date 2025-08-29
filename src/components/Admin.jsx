import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  // Fetch posts and images on component mount
  useEffect(() => {
    // Fetch posts
    fetch('http://localhost:4000/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data.posts))
      .catch(error => console.error('Error fetching posts:', error));

    // Fetch images
    fetch('http://localhost:4000/api/images')
      .then(response => response.json())
      .then(data => setImages(data.images))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    // Logic to create or update a post will go here
    console.log({ title, content });
  };

  const handleImageUpload = (e) => {
    e.preventDefault();
    // Logic to upload an image will go here
    console.log({ selectedImage });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Admin Panel</h1>

      {/* Post creation/editing form */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Create/Edit Post</h2>
        <form onSubmit={handlePostSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-lg font-medium mb-2">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-lg font-medium mb-2">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border rounded"
              rows="10"
            ></textarea>
          </div>
          <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
            Save Post
          </button>
        </form>
      </div>

      {/* Image upload form */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Upload Image</h2>
        <form onSubmit={handleImageUpload}>
          <div className="mb-4">
            <label htmlFor="image" className="block text-lg font-medium mb-2">Image</label>
            <input
              type="file"
              id="image"
              onChange={(e) => setSelectedImage(e.target.files[0])}
              className="w-full p-2 border rounded"
            />
          </div>
          <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
            Upload Image
          </button>
        </form>
      </div>

      {/* List of posts */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Posts</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id} className="flex justify-between items-center mb-2 p-2 border rounded">
              <span>{post.title}</span>
              <div>
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Gallery of uploaded images */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Image Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {images.map(image => (
            <div key={image.id} className="border rounded">
              <img src={`http://localhost:4000${image.path}`} alt={image.filename} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;