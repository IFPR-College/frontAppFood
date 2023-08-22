import { OrdersContainer } from "../Orders/styles";

interface TableProps {
    tables: []
}

export default function Tables({ tables }: TableProps) {
    return <OrdersContainer>
        {
            tables.map((item: any) => {
                return(<button type="button">
                    <strong>{item.name}</strong>
                    <span>{item.qtdItens}</span>
                </button>)

            })
        }
    </OrdersContainer>
}