import { Route, Routes } from 'react-router-dom';

import { Dashboard, Layout, SignIn } from '../pages';

export default function Router() {
  return (
    <Routes>
      <Route index element={<SignIn />} />

      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
