import Items from "./Items";

function Veg({ updateCart, cart }) {
    let nitems = [
        { name: 'Veg Biryani', url: 'https://img.freepik.com/premium-photo/veg-biryani-with-cottage-cheese-beans-vegetables-black-background_629685-8919.jpg' ,price:149},
        { name: 'Paneer Curry', url: 'https://img.freepik.com/premium-photo/flavorful-fusion-vertical-shot-showcasing-traditional-paneer-butter-masala-rich-cottage-cheese_896558-5981.jpg' ,price:199},
        { name: 'Chickpea Tikka', url: 'https://img.freepik.com/premium-photo/delicious-homemade-chickpea-curry-with-fluffy-basmati-rice-ai-generated_804788-36132.jpg' ,price:189},
        { name: 'Brinjal Masala', url: 'https://www.vegrecipesofindia.com/wp-content/uploads/2022/12/bharli-vangi-stuffed-brinjal.jpg' ,price:99},
        { name: 'Curd Rice', url: 'https://img.freepik.com/premium-photo/savory-curd-rice-with-green-chilies-ginger_167857-74216.jpg' ,price:99}
    ];

    return (
        <div className="veg">
            {nitems.map((v, index) => (
                <Items key={`${v.name}-${index}`} price={v.price} title={v.name} url={v.url} updateCart={updateCart} cart={cart} />
            ))}
        </div>
    );
}

export default Veg;
