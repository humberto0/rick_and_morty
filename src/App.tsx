import { Provider as ReduxProvider } from 'react-redux';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { store } from './redux/store';
import { Dashboard } from './page/Dashboard';
import { Search } from './components/search';
import { Pagination } from './components/pagination';

function App() {
  return (
    <ReduxProvider store={store}>
      <Header />
      <Search />
      <Dashboard />
      <Pagination />
      <Footer />
    </ReduxProvider>
  );
}

export default App;
