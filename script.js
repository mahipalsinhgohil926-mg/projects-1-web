/**
 * High-Performance Media Loader
 * Generates 53 cards safely into memory before updating the UI layer.
 */
document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("galleryGrid");
  
  // Guard clause to prevent errors if the target element doesn't exist
  if (!gridContainer) return;

  const totalVideos = 53;
  let htmlPayload = "";

  // Loop to generate exactly 53 video cards systematically
  for (let i = 1; i <= totalVideos; i++) {
    const formattedIndex = i < 10 ? `0${i}` : i;

    // preload="none" stops the browser from trying to load 53 streams simultaneously
    htmlPayload += `
      <div class="video-card">
        <div class="video-wrapper">
          <video preload="none" poster="thumbs/poster${i}.jpg" controls>
            <source src="videos/video${i}.mp4" type="video/mp4">
            Your browser does not support high-performance video streaming.
          </video>
        </div>
        <div class="card-meta">
          <h3>${formattedIndex}. Stream Title</h3>
          <a href="videos/video${i}.mp4" download="Video_${formattedIndex}.mp4" class="dl-icon">
            📥 Download Video
          </a>
        </div>
      </div>
    `;
  }

  // Single DOM operation: updates the interface instantly with no layout rendering lag
  gridContainer.innerHTML = htmlPayload;
});





/**
 * CineStream Core Application Script (Lag-Free Design)
 */
document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("galleryGrid");
  const countLabel = document.getElementById("countLabel");
  
  if (!gridContainer) return;

  const totalItems = 53;
  
  // High-performance metadata mock registry 
  // Expand this array block to explicitly add custom titles or target URLs per video card
  const videoMetadataRegistry = [
    { title: "Cinematic Nature Drone Reel", externalUrl: "https://example.com/details/nature" },
    { title: "Deep Space Nebula Exploration", externalUrl: "https://example.com/details/space" },
    { title: "Urban Cyberpunk Hyperlapse", externalUrl: "https://example.com/details/cyberpunk" }
  ];

  let htmlBuffer = "";

  // Systematic loop generation for 53 optimized video units
  for (let i = 1; i <= totalItems; i++) {
    const paddedIndex = i < 10 ? `0${i}` : i;
    
    // Safely pull from registry or fallback to auto-generated indices cleanly
    const metaRecord = videoMetadataRegistry[i - 1] || {
      title: `Premium Ultra-HD Video Content Stream ${paddedIndex}`,
      externalUrl: `https://example.com/track/stream-${i}`
    };

    htmlBuffer += `
      <div class="video-card">
        <div class="video-wrapper">
          <video preload="none" poster="thumbs/poster${i}.jpg" controls>
            <source src="videos/video${i}.mp4" type="video/mp4">
            Your system doesn't support HTML5 native video wrappers.
          </video>
        </div>
        <div class="card-meta">
          <span class="badge">4K UHD</span>
          <h3>${paddedIndex}. ${metaRecord.title}</h3>
          
          <div class="card-actions">
            <a href="videos/video${i}.mp4" download="Stream_${paddedIndex}.mp4" class="btn btn-download">
              📥 Download
            </a>
            <a href="${metaRecord.externalUrl}" target="_blank" rel="noopener" class="btn btn-info">
              🔗 Details
            </a>
          </div>
        </div>
      </div>
    `;
  }

  // Atomically alter the web rendering view exactly once
  gridContainer.innerHTML = htmlBuffer;
  
  if (countLabel) {
    countLabel.textContent = totalItems.toString();
  }
});




// Change the text inside these brackets to update your website names and URLs manually:
const videoMetadataRegistry = [
  { 
    title: "Put Your Custom Video Title 1 Here", 
    externalUrl: "https://your-extra-website-link-1.com" 
  },
  { 
    title: "Put Your Custom Video Title 2 Here", 
    externalUrl: "https://your-extra-website-link-2.com" 
  }
];


/* download*/

document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("galleryGrid");
  if (!gridContainer) return;

  const totalVideos = 53;
  let htmlBuffer = "";

  for (let i = 1; i <= totalVideos; i++) {
    const paddedIndex = i < 10 ? `0${i}` : i;

    htmlBuffer += `
      <div class="video-card">
        <div class="video-wrapper">
          <video preload="none" poster="thumbs/poster${i}.jpg" controls>
            <source src="videos/video${i}.mp4" type="video/mp4">
          </video>
        </div>
        <div class="card-meta">
          <h3>${paddedIndex}. Premium Video Title</h3>
          
          <div class="card-actions">
            <a href="videos/video${i}.mp4" download="Video_Stream_${paddedIndex}.mp4" class="btn btn-download">
              📥 Download Video
            </a>
          </div>
        </div>
      </div>
    `;
  }

  gridContainer.innerHTML = htmlBuffer;
});



/*download video*/

// Add this inside the loop generating your 53 video cards
htmlBuffer += `
  <div class="video-card">
    <div class="video-wrapper">
      <video preload="none" poster="thumbs/poster${i}.jpg" controls>
        <source src="videos/video${i}.mp4" type="video/mp4">
      </video>
    </div>
    <div class="card-meta">
      <h3>${paddedIndex}. Video Title</h3>
      
      <a href="videos/video${i}.mp4" download="Video_Stream_${paddedIndex}.mp4" class="play-overlay-btn">
        📥 Download Video
      </a>
    </div>
  </div>
`;




/*<a class ="btn-download"*/