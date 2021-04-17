import * as React from "react";
import { DataProp } from "../Search/DataProp";
import {
    CardContainer,
    CardImg,
    CardTitle,
    InfoContainer,
    LeftSide,
    RightSide,
    StartDate,
    Synopsis,
} from "./Card.elements";
import { dateFormat } from "./dateFormat";

const Card: React.FC<DataProp> = ({ ...item }: DataProp) => {
    return (
        <CardContainer>
            <LeftSide>
                <CardImg src={`${item.image_url}`} />
            </LeftSide>
            <RightSide>
                <CardTitle>{item.title}</CardTitle>
                <Synopsis>{item.synopsis}</Synopsis>
                <InfoContainer>
                    <StartDate>{dateFormat(item.start_date)}</StartDate>
                </InfoContainer>
            </RightSide>
        </CardContainer>
    );
};

export default Card;
