import { BackgroundAnimation } from "./styles";

export default function VideoAsBackground(props) {
    const { video } = props;
    return(
        <BackgroundAnimation autoPlay loop>
            <source src={video} type="video/mp4" />
        </BackgroundAnimation>
    );
}