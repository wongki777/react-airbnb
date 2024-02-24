import React from "react"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        // Shadow hover effect. just add 'hover-shadow rounded-4'
        <div className="card hover-shadow rounded-4">
            {
                badgeText &&
                <div className="card--badge">{badgeText}</div>
            }
            <img
                src={`../images/${props.coverImg}`}
                className="card--image" alt="card"
            />
            <div className="card--stats">
                <img src="../images/star.jpg" className="card--star" alt="star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    )
}
