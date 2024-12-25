export async function getBlogs() {
  try {
    const response = await fetch('https://skinstinct-blogs.vercel.app/api/public/blogs');
    const data = await response.json();
    
    // Transform with minimal data for listing
    return data.blogs.map(blog => ({
      title: blog.title,
      image: blog.featuredImage,
      tags: blog.tags,
      createdAt: blog.publishDate,
      slug: blog.slug
    }));
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

// For single blog page - includes all data
export async function getBlogBySlug(slug) {
  try {
    const response = await fetch(`https://skinstinct-blogs.vercel.app/api/public/blogs`);
    const data = await response.json();
    
    const blog = data.blogs.find(b => b.slug === slug);
    if (!blog) return null;

    // Transform with full data for single blog
    return {
      title: blog.title,
      image: blog.featuredImage,
      tags: blog.tags,
      createdAt: blog.publishDate,
      slug: blog.slug,
      metaDescription: blog.metaDescription,
      content: blog.description
    };
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    return null;
  }
}