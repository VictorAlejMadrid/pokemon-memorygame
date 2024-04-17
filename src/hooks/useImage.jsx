import { useEffect, useState } from "react";

export default function useImage(name) {
    const [image, setImage] = useState(null);

    useEffect(() => {
        getImage();
    }, []);

    const getImage = async () => {
        try {
            const response = await import(`../assets/cards/${name}.png`);
            setImage(response.default);
        } catch (error) {
            console.log('Não foi possível carregar a imagem.');
        }
    }

    return image;
}