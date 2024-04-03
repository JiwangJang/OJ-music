interface Props {
    instrument: string;
    major: string;
    hobby: string;
}

export default function PriceTableRow({ instrument, major, hobby }: Props) {
    return (
        <tr>
            <td>{instrument}</td>
            <td>{major}</td>
            <td>{hobby}</td>
        </tr>
    );
}
