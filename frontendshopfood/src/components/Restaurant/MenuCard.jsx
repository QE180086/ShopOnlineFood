import { Divider } from "@mui/material"
import './MenuCard.css'
import { type } from "@testing-library/user-event/dist/type"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getCategory, getRestaurantFood } from "../../State/Food/Action"
import { addToCart } from "../../State/Cart/Action"
export const MenuCard = ({ dataFood }) => {

    const dispatch = useDispatch()
    const { restaurantId } = useParams();
    const token = localStorage.getItem("jwt")

    const navigate = useNavigate()


    const foodtype = [
        {
            type: "All",
            value: ""
        },
        {
            type: "Vegetarian Only",
            value: "Vegetarian Only"
        },
        {
            type: "Non-Vegetarian Only",
            value: "Non-Vegetarian Only"
        },
        {
            type: "Seasonal",
            value: "Seasonal"
        },
    ]
    const foodCategory = [
        {
            type: "All",
            value: ""
        },
        {
            type: "Piza",
            value: "Piza"
        },
        {
            type: "Biryani",
            value: "Biryani"
        },
        {
            type: "Chicken",
            value: "Chicken"
        },
        {
            type: "Poha",
            value: "Poha"
        },
    ]
    const [param,setParam] = useState({
        vegetarian: false,
        seasonal: false,
        nonveg: false,
        food_category: ""
    })
    const handType = (type) => {
        switch (type) {
            case "Vegetarian Only":
                setParam({
                    ...param,
                vegetarian : true,
                nonveg : false,
                seasonal : false,

            })
                break;
            case "Non-Vegetarian Only":
                setParam({
                    ...param,
                    vegetarian : false,
                    nonveg : true,
                    seasonal : false,

            })
                break;
            case "Seasonal":
                setParam({
                    ...param,
                    vegetarian : false,
                    nonveg : false,
                    seasonal : true,

            })
                break;
            case "All":
                setParam({
                vegetarian : false,
                seasonal : false,
                nonveg : false,
                food_category : ""
            })
             break;
            default:
                setParam({
                vegetarian : false,
                    seasonal : false,
                    nonveg :false,
                    food_category : ""
                })
                break;
        }

    }

    const handCategory=(category)=>{
        setParam({
            ...param,
            food_category:category
        })
    }

    const handAddToCart= (id)=>{
        const req = {
            foodId:id,
            quantity:1,
            ingredients:["hahha"]
        }
        dispatch(addToCart(req, token))
        navigate('/cart')
    }
    

    useEffect(() => {
        dispatch(getRestaurantFood(token, restaurantId, param.vegetarian, param.seasonal, param.nonveg, param.food_category))
        dispatch(getCategory(token,restaurantId))

    }, [token, param.vegetarian, param.seasonal, param.nonveg, param.food_category])

    console.log("param ne: " + dataFood.ingredient)
    return (
        <>
            <div className="container">
                <div className="row p-3">
                    <div className="col-md-3 filter p-2">


                        <h2>Food Type</h2>
                        {
                            foodtype.map((d => {
                                return (
                                    <div className="form-check padding">
                                        <input className="form-check-input input1" type="radio" name="foodtype" id="foodtype" onClick={() => handType(d.type)} />
                                        <label className="form-check-label lable" for="foodtype">
                                            {d.type}
                                        </label>
                                    </div>
                                )
                            }))
                        }
                        <h2>Food Category</h2>
                        {
                            dataFood.category.map((d => {
                                return (
                                    <div className="form-check padding"  onClick={() => handCategory(d.name)}>
                                        <input className="form-check-input input1" type="radio" name="foodcategory" id="foodcategory" />
                                        <label className="form-check-label" for="foodcategory">
                                            {d.name}
                                        </label>
                                    </div>
                                )
                            }))
                        }
                    </div>

                    <div className="accordion col-md-9" id="accordionExample">
                        {
                            dataFood.restaurantFood.map((d, index) => {
                                const collapseId = `collapse${index}`;
                                const headerId = `heading${index}`;
                                return (
                                    <div className="accordion-item" key={index}>
                                        <h2 className="accordion-header" id={headerId}>
                                            <button
                                                className="accordion-button btn-css"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#${collapseId}`}
                                                aria-expanded="false"
                                                aria-controls={collapseId}>
                                                <img src={d.images[0]} className="img-accordion" />
                                                <div className="text-start p-3">
                                                    <p className="fw-bold text-white mb-1 fs-4">{d.name}</p>
                                                    <p className="text-white">{d.price}đ</p>
                                                </div>
                                            </button>
                                        </h2>
                                        <div
                                            id={collapseId}
                                            className="accordion-collapse collapse btn-css"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body btn-css row">
                                                {
                                                    dataFood.ingredient.map((c) => {
                                                        return (
                                                            <>
                                                                <div className="col-md-2">
                                                                    <p className="text-white fw-bold">{c.name}</p>

                                                                    {
                                                                        c.ingredients.map((z) => {
                                                                            return (
                                                                                <div>
                                                                                    <input type="checkbox" name="checkbox" id="checkbox" />
                                                                                    <label htmlFor="checkbox" className="text-white">{z.name}</label>
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </>
                                                        )
                                                    }

                                                    )
                                                }
                                                <div className="col-md-3" onClick={()=>handAddToCart(d.id)}>
                                                    <button className="btn btn-danger">Add to cart</button>
                                                    

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>


                </div>
            </div>

        </>
    )
}