import { BackgroundAnimation } from "./styles";

export default function VideoAsBackground(props) {
    const { video } = props;
    return(
        <BackgroundAnimation autoPlay loop  alt='Vídeo do pokémon Pikachu correndo' >
            <source src={video} type="video/mp4" />
        </BackgroundAnimation>
    );
}