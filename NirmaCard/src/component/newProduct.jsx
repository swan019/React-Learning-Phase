import Formproduct from "./formProduct";
function Newproduct(props){
    
   function savePRoduct(product){
    // console.log("in newProduct");
    // console.log(product);

    // //calling App 
    props.OnApp(product);
   }
    return(
        <Formproduct OnsaveProduct = {savePRoduct}></Formproduct>
    );
}

export default Newproduct;

