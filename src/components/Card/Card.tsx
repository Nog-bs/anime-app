import * as React from "react";
import { DataProp } from "../Search/DataProp";
import {
    CardContainer,
    CardImg,
    CardTitle,
    Episodes,
    InfoContainer,
    LeftSide,
    Link,
    MyAnimeList,
    RightSide,
    Score,
    StartDate,
    Synopsis,
} from "./Card.elements";
import { dateFormat } from "./dateFormat";
import malIcon from "../../assets/icons/myanimelist.png";

const Card: React.FC<DataProp> = ({ ...item }: DataProp) => {
    return (
        <CardContainer>
            <LeftSide>
                <Link target="_blank" href={item.url}>
                    <MyAnimeList src={malIcon} />
                </Link>
                <CardImg src={`${item.image_url}`} />
            </LeftSide>
            <RightSide>
                <CardTitle>{item.title}</CardTitle>
                <Synopsis>{item.synopsis}</Synopsis>
                <InfoContainer>
                    <Score>Rated: {item.score}</Score>
                    <StartDate>Aired: {dateFormat(item.start_date)}</StartDate>
                    <Episodes>Episodes: {item.episodes}</Episodes>
                </InfoContainer>
            </RightSide>
        </CardContainer>
    );
};

export default Card;
