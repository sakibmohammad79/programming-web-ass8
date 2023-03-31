const addToDb = id => {
    let webCart = getWebCart();
    const quantity = webCart[id];
    if(!quantity){
        webCart[id] = 1;
    }
    else{
        const newQuantity = quantity + 1;
        webCart[id] = newQuantity;
    }
    localStorage.setItem('web-cart', JSON.stringify(webCart));
}

const getWebCart = () => {
    let webCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('web-cart');
    if (storedCart) {
        webCart = JSON.parse(storedCart);
    }
    return webCart;
}


export {
    addToDb,
    getWebCart
};

