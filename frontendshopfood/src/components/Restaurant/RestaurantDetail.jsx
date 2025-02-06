import { useDispatch, useSelector } from 'react-redux'
import { MenuCard } from './MenuCard'
import './Resaturantdetail.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getRestaurant } from '../../State/Restaurant/Action'
import { getIngredient, getRestaurantFood } from '../../State/Food/Action'
export const RestaurantDetail = () => {

    const { restaurant, food } = useSelector((store) => store)
    const token = localStorage.getItem("jwt")

    const dispatch = useDispatch()
    const { restaurantId } = useParams();
    console.log("id " + restaurantId)

 

    useEffect(() => {
        dispatch(getRestaurant(token, restaurantId))
        dispatch(getIngredient(restaurantId))
    }, [])
    console.log("hihi" + food.restaurantFood[0])

    return (
        <>
            <div className='container'>


                <div className="row">

                    <div className=' col-md-12 col-lg-12 div-img-chinh d-flex justify-content-center'>

                        <img className="img-chinh" src={restaurant.restaurant?.images[0]} />
                    </div>



                    <div className="div-img-phu container p-1">
                        <div className='col-md-5 col-lg-5 p-2'>
                            <img className="img" src={restaurant.restaurant?.images[1]} />
                        </div>
                        <div className='col-md-5 col-lg-5 p-2'>
                            <img className="img" src={restaurant.restaurant?.images[1]} />
                        </div>
                    </div>
                </div>


                <div className='container'>
                    <h2 className='fw-bold'>Mulan Restaurant</h2>
                    <p className=''>Nhạc speed up học bài, nhạc buồn speed up, nhạc dễ ngủ, nhạc speed up dễ ngủ, nhạc nghe là ngủ, nhạc buồn dễ ngủ, nhạc tâm trạng, orinn speed up, orinn, orinn remix, orinn speed up songs, speedsongs,nhạc xu hướng tiktok, playlist speed songs, nhạc tiktok gây </p>
                    <i className="bi bi-geo-alt-fill">   &nbsp; Hoai duc- Hoai Nhon -Binh Dinh</i> <br />
                    <i className="bi bi-calendar">   &nbsp; 7h30 - 17h00</i>
                </div>


                <MenuCard dataFood={food}></MenuCard>
            </div>
        </>
    )
}