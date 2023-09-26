import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MyReducer from './components/usecontext/myReducer.jsx';
import MyContext from './components/usereducer/myContext.jsx';
import Counter from './components/usereducer/counter.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/reducer",
    element: <MyReducer />,
  },
  {
    path: "/context",
    element: <MyContext />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
