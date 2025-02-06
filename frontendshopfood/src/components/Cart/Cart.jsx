import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCart, updateCart } from "../../State/Cart/Action"
import { store } from "../../State/store"
import { getUser } from "../../State/Authentication/Action"

export const Cart = () => {

    const { cart } = useSelector((store) => store)
    const dispatch = useDispatch()

    const token = localStorage.getItem("jwt")

    const handQuantity = (value,cartid) => {
        const items = cart.carts.items.find((item)=>item.id ===cartid) 

        if(value===-1 && items.quantity ===0){
            return
        } 
        const req ={cartItemId:items.id,quantity: items.quantity+value}

        dispatch(updateCart(token,req))
    }

    useEffect(()=>{
        dispatch(getAllCart(token))
    },[token || cart])


    return (
        <>

            <div className="row container">
                <div className="col-md-3 col-sm-3">

                    {
                        cart?.carts?.items?.map((d) => {
                            return (
                                <>
                                    <div className="d-flex flex-column mb-3 " key={d?.id}>
                                        <div className="p-3 gap-3 d-flex">

                                            <img id="img_food" src={d?.food?.images[0]} style={{ height: '100px', width: "100px" }} />
                                            <div>
                                                <p >{d?.food?.name}</p>
                                                <p >{d?.id}</p>

                                                <div className="d-flex p-3" style={{ gap: '10px' }} >
                                                    <i className="bi bi-dash-circle minus" onClick={() => handQuantity(-1,d.id)}
                                                    ></i>
                                                    {d?.quantity}
                                                    <i className="bi bi-plus-circle plus" onClick={() => handQuantity(1,d.id)}
                                                    ></i>
                                                </div>
                                            </div>
                                            <div className="flex-end justify-content-center align-items-center">
                                                <p >{d?.totalPrice}đ</p>
                                            </div>

                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="col-md-9 col-sm-9">
                    Hello
                </div>

            </div>

        </>
    )
}