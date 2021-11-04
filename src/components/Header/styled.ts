import styled from "styled-components";
import image from "next/image"
import link from "next/link"
export const HeaderContainer=styled.div`
    width:100%;
    margin-top:0px;
    display: flex;
    justify-content: space-between;
    @media(max-width:768px){
    width: 90%;
}


`
export const MyImage=styled(image)``
export const BoxLogo=styled.div`
margin-top:41px ;
margin-left: 165px;
@media(max-width:768px){
    margin-left: 25px;
    margin-top: 14px;
}

`
export const BoxImg=styled.div`
   
    
    width:24px;
    height:24px;
    @media(max-width:768px){
    display: none;
}
`
export const BoxMidia=styled.div`
padding-top: 52px;
padding-right: 185px;
display: grid;
grid-template-columns: 24px 24px 24px 24px;
grid-column-gap: 24px;
@media(max-width:768px){
    padding-top:24px;
    padding-right: 10px;
   
    grid-template-columns: 10px 10px 10px 10px;
    grid-column-gap: 10px;
}

`
export const MyLink=styled(link)`

`