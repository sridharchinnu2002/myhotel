import React, { useState } from "react";

function Items({ title, url, updateCart,price, cart, }) {
    const [c, setCount] = useState(0);

    const handleClick1 = () => {
        setCount(prev => prev + 1);
        addToCart();
    };

    const handleClick2 = () => {
        if (c > 0) {
            setCount(prev => prev - 1);
            removeFromCart();
        }
    };

    function addToCart() {
        updateCart(prevCart => [...prevCart, { title }]);
    }

    function removeFromCart() {
        updateCart(prevCart => {
            const newCart = [...prevCart];
            const index = newCart.findIndex(item => item.title === title);
            if (index !== -1) newCart.splice(index, 1);
            return newCart;
        });
    }

    return (
        <div className="items">
            <p><b>{title} - ₹{price}</b></p>
            <img src={url} alt={title} height={150} width={200} />
            <br />
            <div className="cbutton">
                <button className="button1" onClick={handleClick2} disabled={c === 0}><b>-</b></button>
                <span><b>Add</b>: {c}</span>
                <button className="button1" onClick={handleClick1}><b>+</b></button>
            </div>
        </div>
    );
}

export default Items;
