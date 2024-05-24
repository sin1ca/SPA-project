import FirstImg from '../img/img1.jpg';
import SecondImg from '../img/img2.jpg';
import ThirdImg from '../img/img3.jpg';


function Contact() {
    return (
        <div className="">
            <h1 className='CP-h1'>Contact page</h1>
            <div className="Cont-card">
                <img className="Cont-img" src={FirstImg}/>
                <div className="Cont-info">
                    <div className='Card-text'>
                        <h4 className='RestName'>Elysian Delights</h4>
                        <h6>Address: Moscow, Krasnaya Presnya St.14</h6>
                        <h6>Time: 9:00 - 22:00</h6>
                    </div>
                    <button className='ButtonReserv'>Reserve</button>
                </div>
            </div>
            <div className="Cont-card">
                <img className="Cont-img" src={SecondImg}/>
                <div className="Cont-info">
                    <div className='Card-text'>
                        <h4 className='RestName'>Golden Saffron</h4>
                        <h6>Address: Moscow, Kutuzovsky Avenue 30</h6>
                        <h6>Time: 9:00 - 22:00</h6>
                    </div>
                    <button className='ButtonReserv'>Reserve</button>
                </div>
            </div> 
            <div className="Cont-card">
                <img className="Cont-img" src={ThirdImg}/>
                <div className="Cont-info">
                    <div className='Card-text'>
                        <h4 className='RestName'>La Première Cuisine</h4>
                        <h6>Address: Moscow, Malaya Bronnaya St 22</h6>
                        <h6>Time: 9:00 - 22:00</h6>
                    </div>
                    <button className='ButtonReserv'>Reserve</button>
                </div>
            </div>  
        </div>
        )
}

export { Contact };