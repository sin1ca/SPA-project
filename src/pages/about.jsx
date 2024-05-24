import AboutImg from '../img/imgAbout.jpg';

function About() {
    return (
        <div clssName="">
            <h1 className='AP-h1'>About page</h1>
            <div className="Cont-card">
                <img className="Cont-img" src={AboutImg}/>
                <div className="Cont-info">
                    <div className='AbCard-text'>
                        <h4 className='Abh2'>Welcome to Flavor Fusion</h4>
                        <p>your ultimate destination for culinary inspiration! Whether you are a seasoned chef or a kitchen novice, our website is designed to make cooking an enjoyable and rewarding experience. Dive into a world of diverse flavors and discover recipes that will tantalize your taste buds and impress your guests.</p>
                        <p>Our website is more than just a recipe repository; it’s a community of food enthusiasts. Join us to share your culinary creations, exchange tips and tricks, and connect with fellow food lovers. With user reviews and ratings, you can trust that our recipes are tried and true, giving you the best possible cooking experience. We also offer video tutorials, cooking hacks, and a blog filled with inspiration to keep your culinary journey exciting.</p>
                        <p>Explore our themed recipe collections for holidays, special occasions, and everyday meals. Whether you're looking for healthy options, indulgent treats, or international dishes, Flavor Fusion has you covered. Our goal is to make cooking accessible, enjoyable, and inspiring for everyone. So, grab your apron, fire up the stove, and let’s create something delicious together! Welcome to Flavor Fusion – where every recipe is a new adventure.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { About };