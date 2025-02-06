import './Home.css'
import { Restaurant } from './Restaurant'
import { TopMeels } from './TopMeels'
export const Home = () => {
    return (
        <>
            <div className='Home'>
                <div className="Home-text">
                    <h1 className='fw-bold fs-1'>Atula Food</h1>
                    <p>Top food Convinence: Food, FastFood and Delivery</p>
                </div>
            </div>
            <TopMeels></TopMeels>
            <Restaurant></Restaurant>
            


        </>
    )
}