
import Navbar from "./header"
import Hero from "./Hero"
import LogosSec from "./LogosSec"
import Seperator from "./workseperate"
import SocialPosts from "./SocialPosts"
import ThumbSec from "./Thumbnails"
function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Seperator />
            <LogosSec />
            <SocialPosts />
            <ThumbSec />
        </>
    )
}

export default Home