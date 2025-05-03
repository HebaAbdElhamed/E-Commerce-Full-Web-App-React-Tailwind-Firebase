import React,{createContext , useState , useEffect, useContext} from "react";

const products =[
    {id:1 , title: "Jeans Jacket" , description: "Elit dolor veniam laboris elit. Sit sit proident commodo do veniam pariatur tempor sint ut et aliqua magna. Eu mollit laboris.", price:300 , image:"Jeans Jacket.png"},
    {id:2 , title: "Casual Hoodie" , description: "Elit dolor veniam laboris elit. Sit sit proident commodo do veniam pariatur tempor sint ut et aliqua magna. Eu mollit laborist.", price:200, image:"Casual Hoodie.png"},
    {id:3 , title: "Casual T-Shirt" , description: "Elit dolor veniam laboris elit. Sit sit proident commodo do veniam pariatur tempor sint ut et aliqua magna. Eu mollit laboris.", price:100, image:"Casual T-Shirt.png"},
    {id:4 , title: "Fur Jacket" , description: "Elit dolor veniam laboris elit. Sit sit proident commodo do veniam pariatur tempor sint ut et aliqua magna. Eu mollit laboris.", price:500, image:"Fur Jacket.png"},
    {id:5 , title: "Brown Jacket" , description: "Elit dolor veniam laboris elit. Sit sit proident commodo do veniam pariatur tempor sint ut et aliqua magna. Eu mollit laboris.", price:700 , image:"Brown Jacket.png"},
    {id:6 , title: "Black Jacket" , description: "Elit dolor veniam laboris elit. Sit sit proident commodo do veniam pariatur tempor sint ut et aliqua magna. Eu mollit laboris.", price:200 , image:"Black Jacket.png"},
    {id:7 , title: "Formal Shirt" , description: "Elit dolor veniam laboris elit. Sit sit proident commodo do veniam pariatur tempor sint ut et aliqua magna. Eu mollit laboris.", price:600 , image:"Formal Shirt.png"},
    {id:8 , title: "Wide Leg Jeans" , description: "Elit dolor veniam laboris elit. Sit sit proident commodo do veniam pariatur tempor sint ut et aliqua magna. Eu mollit laboris.", price:300, image:"Wide Leg Jeans.png"},
    {id:9 , title: "Black Balto" , description: "Elit dolor veniam laboris elit. Sit sit proident commodo do veniam pariatur tempor sint ut et aliqua magna. Eu mollit laboris.", price:1000, image:"Black Balto.png"},
    {id:10 , title: "Blue Jeans Jacket" , description: "Elit dolor veniam laboris elit. Sit sit proident commodo do veniam pariatur tempor sint ut et aliqua magna. Eu mollit laboris.", price:250, image:"Blue Jeans Jacket.png"}
];

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [cart , setCart] = useState(()=>{
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : {};
    });

    const [productList , setProductList] = useState(products);

    useEffect(()=>{
        if(Object.keys(cart).length > 0){
            localStorage.setItem("cart",JSON.stringify(cart));
        }
    },[cart]);

    const updateQuantity  = (id,quantity)=>{
        setCart((prev)=>{
            if(quantity <= 0){
                const updatedCart = {...prev};
                delete updatedCart[id];
                return updatedCart;
            }
            return {...prev , [id] : quantity};
        });
    };

    return(
        <CartContext.Provider value={{ setCart, cart , updateQuantity , productList  }}>
            {children}
        </CartContext.Provider>
    );
};