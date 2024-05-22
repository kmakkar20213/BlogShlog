function Foot() {
    return (
        <div
            style={{ height: "10vw", backgroundColor: "#212529", color:"#F3F3F3"}}
            className="d-flex flex-column align-items-center justify-content-evenly"
        >
            <p>Copyright © 2024 BlogShlog.inc</p>
            <div className=" w-50 d-flex align-items-center justify-content-evenly">
                <p>Legal</p>
                <p>Security</p>
                <p>Privacy</p>
                <p>Manage Cookies</p>
            </div>
        </div>
    );
}

export default Foot;
