import Tables from "../Tables/Tables";
import { Container, Board, OrdersContainer} from "./styles";

interface OrdersProps {
    data: []
}

export function Orders({data}:OrdersProps) {

    

    return <Container>
            {data.map((item:any) => {
                return(
                    <Board>
                <header>
                    <span>{item.icon}</span>
                    <strong>{item.title}</strong>
                    <span>{item.queuePosition}</span>
                </header>

                <Tables tables={item.tables} />
            </Board>
                )
            })}
        </Container>
    
}