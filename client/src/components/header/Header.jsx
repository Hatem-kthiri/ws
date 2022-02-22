import "./header.css";

export default function header() {
    return (
        <div className="header">
            <input type="search" placeholder="Search Blog... " />
            <i className="fa fa-search"></i>
        </div>
    );
}
