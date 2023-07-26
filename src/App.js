import Users from './component/user';
import Add from './component/add';
import Edit from './component/edit';
import ButtonAppBar from './component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>

      <ButtonAppBar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
