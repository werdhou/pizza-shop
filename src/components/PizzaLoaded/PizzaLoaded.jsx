import React from "react"
import ContentLoader from "react-content-loader"

const PizzaLoaded = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="130" cy="140" r="120" />
        <rect x="0" y="278" rx="0" ry="0" width="280" height="25" />
        <rect x="0" y="322" rx="5" ry="5" width="280" height="80" />
        <rect x="5" y="424" rx="5" ry="5" width="86" height="29" />
        <rect x="146" y="420" rx="30" ry="30" width="118" height="40" />
    </ContentLoader>
)

export default PizzaLoaded