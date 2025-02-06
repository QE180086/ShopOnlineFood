import { useEffect, useRef, useState } from "react";
import './TopMeel.css';
import Slider from "react-slick";

export const TopMeels = () => {
    const images = [
        {
            id:1,
            title:"Pizza",
           src: "https://daylambanh.edu.vn/wp-content/uploads/2024/04/cach-lam-banh-pizza.jpg",
        },
        {
            id:2,
            title:"Fast Food 2",
           src:  "https://nhahangso.com/wp-content/uploads/2022/11/Fast-food.webp",
        },
        {
            id:3,
            title:"Fast Food",
           src: "https://quantrinhahang.edu.vn/wp-content/uploads/2019/06/fast-food-la-gi.jpg",
        },
        {
            id:4,
            title:"Food Restaurant",
           src:  "https://royalmahal.co.uk/wp-content/uploads/2023/01/indian-restaurant-scaled-e1670322083921-1024x692.jpg",
        },
        {
            id:5,
            title:"Hambagur",
           src: "https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pasta.jpg?1430942591",
        },
        {
            id:6,
            title:"Cutrural Food",
           src: "https://canadianfoodfocus.org/wp-content/uploads/2021/03/cultural-cuisine.jpg",
        },
        
      
    ]

    const slideAuto = useRef(null)
    useEffect(() => {
        const interval = setInterval(() => {
            if (slideAuto.current) {
                slideAuto.current.slickNext(); // Tự động click vào nút "Next"
            }
        }, 2000); // Chuyển slide mỗi 3 giây

        return () => clearInterval(interval); // Clear interval khi component unmount
    }, []);

    const setting = {
        infinite: true, 
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,

    }
    return (
        <>
            <div>
                <div>
                    <p className="fw-bold fs-3 m-4">Top Meels</p>
                </div>
                <div className="container">
                <Slider ref={slideAuto} {...setting}>
                    {
                        images.map((d)=>
                        <div className="img">
                            <img src={d.src}/>
                            <p className="fw-bold m-5 fs-5">{d.title}</p>
                        </div>
                        )
                    }
                </Slider>
                </div>
            </div>
        </>
    )
}