🎥 Streaming Site – Video Streaming Platform

A responsive video streaming web application built with React, Redux Toolkit, and Tailwind CSS, featuring live chat simulation, dynamic video feeds, and nested comment threads.
  

🧠 **Tech Stack**
  
    ⚛️ React (Vite)
  
    🧰 Redux Toolkit
  
    🎨 Tailwind CSS
  
    🌐 React Router DOM
  
    🧩 Context API  
  
    📺 YouTube Data API v3
  

✨ **Features**
  
    📺 Dynamic Video Feed: Trending and category-wise videos fetched using YouTube API
  
    🔍 Search with Suggestions: Custom debounced search input
  
    💬 Live Chat Simulation: Auto-updating real-time messages via Redux store
  
    💭 Comments Section: Recursive comment rendering for nested replies
    
    🎨 Responsive Design: Works seamlessly on desktop and mobile
  
    ⚙️ Reusable Hooks: API fetch logic extracted into modular custom hooks
  
    🌗 Theme Context: Context API for light/dark theme and sidebar toggling


## **Layout Overview**

  ### Header
    
    - Includes sidebar icon, search button, theme toggle, and profile image.

  ### Body
    
    - **Sidebar**: Displays a list of different sections.
    
    - **Main Container**:
      
      - Category List
      
      - Video Container(with Infinite Scroll implemented)

  ### Watch Page
    
    - **Top Section**:
      
      - Video Stream
      
      - Video Title
      
      - Channel Information
      
      - Comments

    - **Side Section**:
      
      - Live Chat
      
      - Video Suggestions


