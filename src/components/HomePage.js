import banner from "../Assets/Img/Jumbotron.png";

const HomePage = () => {
    return ( 
    <div>
        <header>
            <banner>
                <img
                src={banner}
                alt="jumbotron"
                width="500px"
                className="dumbways-logo"
                />
            </banner>
        </header>
    </div> );
}
 
export default HomePage;