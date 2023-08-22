import { GlobalStyles } from "./styles/GlobalStyles";
import { Orders } from "./components/Orders/index";
import { Header } from "./components/Header/index";

// {
//     waiting: '⏰',
//     progress: '👨🏼‍🍳',
//     finished: '✅'
// };

interface DataProps {
    title:string;
    queuePosition: string;
    icon:string;
    tables: {
        name:string;
        qtdItens:string
    }[]
}

const data:DataProps[] = [
    {
        title:'Fila de Espera',
        queuePosition:'1',
        icon:'⏰',
        tables: [
            {
                name:'Mesa 01',
                qtdItens: '4'
            },
            {
                name:'Mesa 02',
                qtdItens: '6'
                
            }
        ]
    },
    {
        title:'Em andamento',
        queuePosition:'3',
        icon:'👨🏼‍🍳',
        tables: [
            {
                name:'Mesa 08',
                qtdItens: '1'
            },
            {
                name:'Mesa 05',
                qtdItens: '2'
                
            }
        ]
    },{
        title:'Finalizado',
        queuePosition:'7',
        icon:'✅',
        tables: [
            {
                name:'Mesa 03',
                qtdItens: '1'
            },
            {
                name:'Mesa 09',
                qtdItens: '2'
                
            },
            {
                name:'Mesa 06',
                qtdItens: '9'
                
            }
        ]
    },

]

export function App() {
    return (
        <>
            <GlobalStyles/>
            <Header/>
            <Orders data={data}/>
        </>
    );
} 