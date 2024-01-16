import './App.css'
import Products from './component/products';
import Newproduct from './component/newProduct';
import Formproduct from './component/formProduct';


function App() {

  const products = [
    {
      id : 'p1',
      title : 'nirma',
      amount : 100,
      date : new Date(2021, 5, 5)
    },
    {
      id : 'p2',
      title : 'sirf exle',
      amount : 110,
      date : new Date(2011, 3, 12)
    },
    {
      id : 'p3',
      title : 'tide',
      amount : 90,
      date : new Date(2010, 5, 11)
    }
  ];

    function OnAppFeatch(data) {
      // console.log("in App");
        console.log(products);
        if(data.title != ''){
          products.push(data);
        }
        console.log(products);
    }

  return (
    <div className='app'>
          {/* <Newproduct></Newproduct> */}
          <Newproduct OnApp = {OnAppFeatch}></Newproduct>
          <Products items = {products}></Products>
    </div>
  )
}

export default App
