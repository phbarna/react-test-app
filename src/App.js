import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Various from "./pages/Various";
import Count from "./pages/Count";
import NoPage from "./pages/NoPage";
import AutoCount from "./pages/AutoCount";
import TodosParent from "./pages/Todos";
import Javasript from "./pages/Javascript";
import Ref from "./pages/Ref";
import Reducer from './pages/Reducer'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="various" element={<Various />} />
          <Route path="javascript" element={<Javasript />} />
          <Route path="count" element={<Count />} />
          <Route path="*" element={<NoPage />} />
          <Route path="autocount" element={<AutoCount />} />
          <Route path="ref" element={<Ref />} />
          <Route path="reducer" element={<Reducer />} />
          <Route path="todos" element={<TodosParent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

