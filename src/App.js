import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { history } from './helpers/history';
import ContactList from './components/contact/ContactList';
import ContactCreate from './components/contact/ContactCreate';

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/contact/create" element={<ContactCreate />} />
          <Route path="/contact/update/:id" element={<ContactCreate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
