import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import { Dashboard } from "./page/Dashboard";
import { Search } from "./components/search";

function App() {
  return (
    <ReduxProvider store={store}>
      <Header />
      <Search />
      <Dashboard />
      <Footer />
    </ReduxProvider>
  );
}

export default App;
