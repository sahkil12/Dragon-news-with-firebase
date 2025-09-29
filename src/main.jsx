import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/MainRoots.jsx';
import TitleProvider from './Routes/TitleProvider.jsx';
const TitleContext = createContext(null)

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <TitleProvider>
      <RouterProvider router={router}></RouterProvider>
     </TitleProvider>
  </StrictMode>,
)
export default TitleContext