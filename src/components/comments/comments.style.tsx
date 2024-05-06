import styled from "styled-components";

export const Container = styled.section`

    form {
        display: flex;
        flex-direction: column;

        label {
            display: flex;
            flex-direction:column;

            input {
                width: 320px;
                height: 50xp;
                border-radius: 8px;
            }

            textarea {
                width: 320px;
                border-radius: 8px;
            }

        }

        button {
            width:120px;
            height: 40px;
        }
    }

`