import { CartPage } from "./pages/CartPage";
import { RootStoreContext } from "./lib/context/root-store-context";
import { store } from "./model/stores/root-store";
function App() {
  return (
    <RootStoreContext.Provider value={store}>
      <CartPage />
    </RootStoreContext.Provider>
  );
}

export default App;
