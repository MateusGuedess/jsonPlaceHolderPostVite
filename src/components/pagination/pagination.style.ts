import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    button {
        width: 25px;
        height: 25px;
    }

    span:empty{
        display: none;
    }

    span:not(:first-child):before {
        content: ", ";
    }

    span:not(:empty) ~ span:empty + span:not(:empty):before {
        content: ", ";
    }

    span:empty + span:not(:empty):before {
        content: "";
    }

    span.collored {
        font-size: ${props => props.theme.font.size.px16};
        font-weight: ${props => props.theme.font.weight.bold};
    }

`