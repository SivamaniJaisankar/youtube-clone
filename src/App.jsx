import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import { MenuProvider } from "./utils/MenuContext";
import WatchPage from "./components/WatchPage";
import HandleError from './components/HandleError'
import { Provider } from "react-redux";
import { store } from "./utils/Store";
import MobileWarning from "./components/MobileWarning";


const AppLayout = () => {
  return (
    <Provider store={store}>
    <MenuProvider>
    <MobileWarning />
    <div className="overflow-y-scroll hide-scrollbar">
        <Header />
        <Outlet />
      </div>
    </MenuProvider>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/watch/:videoId',
        element: <WatchPage />
      },
      {
        path: "/error",
        element: <HandleError />,
      }
    ],
    errorElement: <HandleError />
  },
  
  

])

function App() { 
  return (<RouterProvider router={appRouter}/>)
}

export default App;
