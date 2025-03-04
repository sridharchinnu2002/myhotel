import Items from "./Items";

function Nonveg({ updateCart, cart }) {
    let nitems = [
        { name: 'Chicken Biryani', url: 'https://static.vecteezy.com/system/resources/previews/035/375/567/large_2x/ai-generated-dum-handi-chicken-biryani-is-prepared-in-an-earthen-or-clay-pot-called-haandi-popular-indian-non-vegetarian-food-photo.jpg' ,price:199},
        { name: 'Mutton Biryani', url: 'https://t4.ftcdn.net/jpg/04/11/24/63/360_F_411246323_DJ9Mx2mSsf91MEXSFFLxqIy0a7oHFEAJ.jpg' ,price:299},
        { name: 'Grilled Chicken', url: 'https://img.freepik.com/premium-photo/meat-chicken-turkey-food_198067-494245.jpg?w=360' ,price:349},
        { name: 'Chicken Lolly-pop', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzbJOJURYpFW0_fOxpkRQF7BnqUgVeonrRH-0zL5KabM0onRwSs023tTcRc2RfTnyV-hU&usqp=CAU' ,price:149},
        { name: 'Fish Fry', url: 'https://img.freepik.com/premium-photo/seafood-sensation-mouthwatering-grilled-fish_1020697-1617.jpg' ,price:199}
    ];

    return (
        <div className="nonveg">
            {nitems.map((v, index) => (
                <Items key={`${v.name}-${index}`} price={v.price} title={v.name} url={v.url} updateCart={updateCart} cart={cart} />
            ))}
        </div>
    );
}

export default Nonveg;
