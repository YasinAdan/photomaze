import styled from "styled-components";

export const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
`;

export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

export const Hide = styled.div`
    overflow: hidden;
`;

export const Progress = styled.div`
    width: 100%;
    height: 10px;
    position: fixed;
    left: 0;
    top: 95%;
    right:0;
    background-color: #ff0055;
`;
