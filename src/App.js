import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Various from "./pages/Various";
import Count from "./pages/Count";
import NoPage from "./pages/NoPage";
import AutoCount from "./pages/AutoCount";
import TodosParent from "./pages/Todos";
import Ref from "./pages/Ref";
import Reducer from './pages/Reducer'
import ContextTest from './pages/ContextTest'
import TikTok from './pages/TikTok'
import TikTokClass from './pages/TikTokClass'
import ChakraTest from './pages/ChakraTest'
import { ChakraProvider } from '@chakra-ui/react'
import AsyncTest from './pages/AsyncTest'
import ParentComponent from './pages/ChildToParentState'

export default function App() {
  return (
    <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="various" element={<Various />} />
          <Route path="count" element={<Count />} />
          <Route path="*" element={<NoPage />} />
          <Route path="autocount" element={<AutoCount />} />
          <Route path="ref" element={<Ref />} />
          <Route path="contexttest" element={<ContextTest />} />
          <Route path="reducer" element={<Reducer />} />
          <Route path="todos" element={<TodosParent />} />
          <Route path="tiktok" element={<TikTok />} />
          <Route path="tiktokclass" element={<TikTokClass />} />
          <Route path="chakratest" element={<ChakraTest />} />
          <Route path="asynctest" element={<AsyncTest />} />
          <Route path="childtoparentstate" element={<ParentComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  );
}

