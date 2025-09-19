// SidebarItems.js or inside the same component
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { CgPlayListSearch } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdLocalMovies } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { ImNewspaper } from "react-icons/im";
import { MdSportsBasketball } from "react-icons/md";
import { PiYoutubeLogoDuotone } from "react-icons/pi";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";


const sidebars = [
  {
    sidebarTitle: "",
    sidebarSection: [
      { icon: IoMdHome, label: "Home" },
      { icon: SiYoutubeshorts, label: "Shorts" },
      { icon: MdOutlineSubscriptions, label: "Subscriptions" },
    ],
  },
  {
    sidebarTitle: "You",
    sidebarSection: [
      { icon: MdHistory, label: "History" },
      { icon: CgPlayListSearch, label: "Playlists" },
      { icon: MdOutlineWatchLater, label: "Watch later" },
      { icon: AiOutlineLike, label: "Liked Videos" },
    ],
  },
  /*{
    sidebarTitle: "Explore",
    sidebarSection: [
      { icon: RiShoppingBagLine, label: "Shopping" },
      { icon: IoIosMusicalNotes, label: "Music" },
      { icon: MdLocalMovies, label: "Movies" },
      { icon: IoLocationOutline, label: "Live" },
      { icon: SiYoutubegaming, label: "Gaming" },
      { icon: ImNewspaper, label: "News" },
      { icon: MdSportsBasketball, label: "Sports" },
    ],
  },
  {
    sidebarTitle: "More",
    sidebarSection: [
      { icon: PiYoutubeLogoDuotone, label: "YouTube Premium" },
      { icon: SiYoutubemusic, label: "YouTube Music" },
      { icon: SiYoutubekids, label: "YouTube Kids" },
    ],
  },*/
  {
    sidebarTitle: "",
    sidebarSection: [
      { icon: IoSettingsOutline, label: "Settings" },
      { icon: MdOutlineHistoryToggleOff, label: "Report History" },
      { icon: IoMdHelpCircleOutline, label: "Help" },
      { icon: MdOutlineFeedback, label: "Send Feedback" },
    ],
  },
  
];


export default sidebars;