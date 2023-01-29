import { BikePreview } from "../Bikes/BikePreview/BikePreview"
import { MainPart4 } from "../Bikes/MainPart4/MainPart4"

export const Bike4 = (props) => {

    return (
        <>
            <BikePreview data={props.data.preview}/>
            <MainPart4 data={props.data.section} />
        </>
    )
} 