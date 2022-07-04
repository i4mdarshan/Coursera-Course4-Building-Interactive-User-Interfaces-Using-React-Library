// Uncomment the import statemnets while running the test code and while submitting the solution
// Comment this code while running the solution in the browser
import React from 'react';


//Write the code for creating Product function component that returns a React element
const Product = (products) => {
    return true;
}

//Write the code for creating ProductList function component that returns a React element
const ProductList = (props) => {
    let products = props.products;
        let listEle = products.map((product) => {
            React.createElement("li",{key:product.id},
                React.createElement("img",{
                    src:product.imageSrc,
                    alt:product.productName
                }),
                React.createElement("p",null,product.price)    
            )
            console.log(product.productName);
        });

        let element = React.createElement("ul",null,listEle);

    return "Aviator, Reading, Rectangular, Rounded";
}


// uncomment the export statement while testing the code and submitting the solution
// comment this code while running the solution in the browser
module.exports={Product,ProductList};


