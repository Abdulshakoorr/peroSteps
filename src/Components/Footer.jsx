

const Footer = () =>{
    return(
        <div className="bg-white p-8 text-center">
            <div className="footer bg-white w-full pt-16 flex items-center justify-evenly flex-wrap gap-4">
                <div className="logo">
                    <h3 className="text-2xl font-serif font-medium">PeroSteps</h3>
                </div>
                <div className="links flex items-center justify-center gap-2">
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                    <a href="#">LinkedIn</a>
                </div>
                <div className="form">
                    <input type="text" placeholder="email us" className="rounded-full"/>
                    <button className="bg-blue-600 px-4 py-2 rounded-full text-white ml-2 shadow-lg">Send</button>
                </div>
            </div>
            <p className="text-sm text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Inventore, mollitia maiores atque beatae debitis quia <br /> maxime consequatur obcaecati amet qui ratione <br /> dolore ipsam ipsum,  vero at pariatur ipsa fuga minima.
            </p> <hr /> 
            <p className="text-sm mt-4">copyright 2022 Abdul Shakoor</p>
        </div>
    )
}
export default Footer