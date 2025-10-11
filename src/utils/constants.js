export const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const YOUTUBE_LOGO = "https://cdn-icons-png.flaticon.com/512/777/777242.png"

export const REGION_CODE = "IN";

export const YOUTUBE_VIDEOSLIST_API = 
'https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=25&regionCode=' + REGION_CODE + '&key=' + YOUTUBE_API_KEY;

export const YOUTUBE_SUGGESTION_API =
'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=videos&key=' + YOUTUBE_API_KEY + '&q=';

export const YOUTUBE_VIDEO_API = 
'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='

export const YOUTUBE_COMMENT_API = 
'https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&key='+ YOUTUBE_API_KEY;

export const YOUTUBE_VIDEO_CATEGORY_API =
'https://youtube.googleapis.com/youtube/v3/videoCategories?regionCode=' + REGION_CODE + '&key=' + YOUTUBE_API_KEY;