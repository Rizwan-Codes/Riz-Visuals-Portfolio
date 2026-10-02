
import Navbar from "./header"
import Hero from "./Hero"
import LogosSec from "./LogosSec"
import Seperator from "./workseperate"
import SocialPosts from "./SocialPosts"
import ThumbSec from "./Thumbnails"
import Brands from "./Brandings"
import Posters from "./Posters"

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Seperator />
            <LogosSec />
            <SocialPosts />
            <ThumbSec />
            <Brands />
            <Posters />
        </>
    )
}

export default Home