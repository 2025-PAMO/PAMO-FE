import { Routes, Route } from 'react-router-dom';
import GlobalLayout from './global-layout';
import Home from '@/pages/home/Home';
import BasicMusic from '@/pages/basic/BasicMusic';
import MotionPage from '@/pages/motion/MotionMusic';

export default function Router() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/basic" element={<BasicMusic />} />
        <Route path="/motion" element={<MotionPage />} />
      </Route>
    </Routes>
  );
}
