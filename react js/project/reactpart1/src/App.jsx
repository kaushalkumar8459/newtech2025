import "./App.css";
import { ProductListUseFetch } from "./component/customHook/ProductListUseFetch";
// import { ProductListUseCallBack } from "./component/ProductListUseCallBack";

const App = () => {

  return (<>
    {/* <ProductListUseCallBack /> */}
    <ProductListUseFetch />
  </>)
}

export default App