import { useState } from "react";
import { Order } from "./Order";
import { LogOut } from "./Logout";

export const MyProfile = () => {
    const [item, setItem] = useState("Log Out"); // Giá trị mặc định là "Orders"

    const handleItemClick = (selectedItem) => {
        setItem(selectedItem); // Cập nhật item nhưng không render lại menu
    };

    // Nội dung hiển thị tương ứng với từng item
    const renderContent = () => {
        switch (item) {
            case "Orders":
                return <Order></Order>;
            case "Favourites":
                return <h1>Favourites Content</h1>;
            case "Address":
                return <h1>Address Content</h1>;
            case "Payment":
                return <h1>Payment Content</h1>;
            case "Notification":
                return <h1>Notification Content</h1>;
            case "Event":
                return <h1>Event Content</h1>;
            case "Log Out":
                return <LogOut></LogOut>;
            default:
                return <h1>Welcome to My Profile</h1>;
        }
    };

    return (
        <div className="row container">
            {/* Sidebar */}
            <div
                className="col-md-3"
                style={{ display: "flex", flexDirection: "column", fontSize: "20px" }}
            >
                <div
                    className="p-4 border-bottom border-end"
                    onClick={() => handleItemClick("Orders")}
                    style={{ cursor: "pointer" }}
                >
                    <i className="bi bi-bag" aria-label="Orders"></i>
                    <span style={{ marginLeft: "15px" }}>Orders</span>
                </div>
                <div
                    className="p-4 border-bottom border-end"
                    onClick={() => handleItemClick("Favourites")}
                    style={{ cursor: "pointer" }}
                >
                    <i className="bi bi-heart" aria-label="Favourites"></i>
                    <span style={{ marginLeft: "15px" }}>Favourites</span>
                </div>
                <div
                    className="p-4 border-bottom border-end"
                    onClick={() => handleItemClick("Address")}
                    style={{ cursor: "pointer" }}
                >
                    <i className="bi bi-person-plus-fill" aria-label="Address"></i>
                    <span style={{ marginLeft: "15px" }}>Address</span>
                </div>
                <div
                    className="p-4 border-bottom border-end"
                    onClick={() => handleItemClick("Payment")}
                    style={{ cursor: "pointer" }}
                >
                    <i className="bi bi-credit-card" aria-label="Payment"></i>
                    <span style={{ marginLeft: "15px" }}>Payment</span>
                </div>
                <div
                    className="p-4 border-bottom border-end"
                    onClick={() => handleItemClick("Notification")}
                    style={{ cursor: "pointer" }}
                >
                    <i className="bi bi-bell" aria-label="Notification"></i>
                    <span style={{ marginLeft: "15px" }}>Notification</span>
                </div>
                <div
                    className="p-4 border-bottom border-end"
                    onClick={() => handleItemClick("Event")}
                    style={{ cursor: "pointer" }}
                >
                    <i className="bi bi-calendar-event" aria-label="Event"></i>
                    <span style={{ marginLeft: "15px" }}>Event</span>
                </div>
                <div
                    className="p-4 border-bottom border-end"
                    onClick={() => handleItemClick("Log Out")}
                    style={{ cursor: "pointer" }}
                >
                    <i className="bi bi-box-arrow-in-right" aria-label="Log Out"></i>
                    <span style={{ marginLeft: "15px" }}>Log Out</span>
                </div>
            </div>

            {/* Content Area */}
            <div className="col-md-9">{renderContent()}</div>
        </div>
    );
};
