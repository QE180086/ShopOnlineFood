import { useSelector } from 'react-redux';
import './Restaurant.css';
import { store } from '../../State/store';
import { useNavigate } from 'react-router-dom';
export const Restaurant = () => {
    // const images = [
    //     {
    //         id: 1,
    //         title: "Japan Restaurant",
    //         src: "https://phongcachmoc.vn/upload/images/tin-tuc/20%20mau%20nha%20hang%20dep/update-07-2022/Sushi-World-Ton-That-Thiep-10.JPG",
    //     },
    //     {
    //         id: 2,
    //         title: "Audi Restaurant",
    //         src: "https://posapp.vn/wp-content/uploads/2020/09/%C4%91%E1%BB%93ng-b%E1%BB%99-n%E1%BB%99i-th%E1%BA%A5t.jpg",
    //     },
    //     {
    //         id: 3,
    //         title: "Mulan Restaurant",
    //         src: "https://posapp.vn/wp-content/uploads/2018/03/khu-vuc-an-uong.png",
    //     },
    //     {
    //         id: 4,
    //         title: "Dolia Restaurant",
    //         src: "https://top10tphcm.com/wp-content/uploads/2021/01/Nha-hang-view-tren-cao-o-sai-gon.jpg",
    //     },
    //     {
    //         id: 5,
    //         title: "Kinh Restaurant",
    //         src: "https://digiticket.vn/blog/wp-content/uploads/2021/03/nha-hang-view-dep-sai-gon-1024x682.jpg",
    //     },
    //     {
    //         id: 6,
    //         title: "Cutrural Restaurant",
    //         src: "https://top10tphcm.com/wp-content/uploads/2021/01/Nha-hang-view-tren-cao-o-sai-gon.jpg",
    //     },


    // ]

    const {restaurant} = useSelector((store)=> store)
    const navigate = useNavigate()
    console.log("restaurant: +" + restaurant?.restaurants.map((d)=>d.images))

    

    return (
        <>
            <h1 className="fs-3 m-4 fw-bold">Order From Our Handpicked Favorites</h1>
            <div className="container text-center">
                <div className=" row row-cols-2 row-cols-lg-4 g-2 g-lg-3 justify-content-center">
                    {
                        restaurant?.restaurants.map((d) => {    
                            return (
                                <div key={d.id}>
                                <div className="card  m-3 container" style={{ width: "18rem", backgroundColor: '#28283e',overflow: "hidden" }} onClick={()=>navigate(`/restaurant/${d.id}`)}
                                 >
                                    <img src={d?.images[0]} className=" img-card" alt="..." />

                                    <div className="card-body row g-3 ">
                                        <div className="col-sm-10 col-md-10 text-start">
                                            <h5 className="card-title text-white fw-bold">{d?.title}</h5>
                                            <p className="card-text card-text-css ">Some quick example text to build on content.</p>
                                        </div>
                                        <div className="d-flex col-2 col-md-2 justify-content-center align-items-center">
                                            <i className="bi bi-heart fs-4"></i>
                                            {/* <i className="bi bi-heart-fill fs-4" ></i> */}

                                        </div>
                                    </div>  
                                </div>
                                </div>

                               
                            )
                        })
                    }


                </div>
            </div>
        </>
    )
}