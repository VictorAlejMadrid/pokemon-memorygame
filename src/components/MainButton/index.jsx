import { Button } from "./styles";

export default function MainButton(props) {
    const {children} = props;

    return(
        <Button>{children}</Button>
    )
}