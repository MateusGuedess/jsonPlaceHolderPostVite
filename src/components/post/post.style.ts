import styled from "styled-components";

interface ContainerProps {
    redirect?:boolean;
}

export const Container = styled.div<ContainerProps>`
    width: 50%;
    display: flex;
    border: 2px solid ${props => props.theme.light.tertiaryFocus};
    border-radius: 8px;
    padding: 10px;
    cursor: ${props => props.redirect ? 'pointer' : 'inherit'};

    & + & {
        margin-top: 20px;
    }
    
    .post {
        &__content {
            .title {
                font-size: ${props => props.theme.font.size.px16};
                font-family: ${props => props.theme.font.fontFamily};
                font-weight: ${props => props.theme.font.weight.bold};
                color: ${props => props.theme.light.secondary}
            }
        }
    }

`