module.exports = {
    siteMetadata: {
        title: "Kate Ševo Photography",
        header: "Hi, are you looking for Kate Ševo?",
        message: "My site is under construction. You can still contact me via email or find me on social media. ♡",
        color: "#fff",
        titleFont: "Playfair Display",
        messageFont: "Overpass",
        socialUrls: [
            "mailto:kate.sevo@gmail.com", 
            "https://www.facebook.com/KateSevoPhotography", 
            "https://www.instagram.com/katesevophoto"
        ]
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Kate Ševo Photography",
                short_name: "Kate Ševo Photography",
                start_url: "/",
                background_color: "#fff",
                theme_color: "#74878b",
                display: "standalone",
                icon: "src/images/icon.png",
            }
        },
        "gatsby-plugin-offline"
    ]
}
