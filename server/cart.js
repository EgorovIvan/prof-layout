let add = (cart, req) => {
    cart.contents.push(req.body);
    return JSON.stringify(cart, null, 4);
};
let remove = (cart, req) => {
    cart.contents = cart.contents.filter(item => item.id_product !== +req.params.id);
    return JSON.stringify(cart, null, 4);
};
let change = (cart, req) => {
    let find = cart.contents.find(item => item.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    if (find.quantity < 1) {
        find.quantity = 0;
    }
    return JSON.stringify(cart, null, 4);
};

module.exports = {
    add,
    remove,
    change
};