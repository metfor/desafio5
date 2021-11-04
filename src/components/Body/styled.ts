import styled from "styled-components"
import image from "next/image"
export const BodyBox=styled.div`    

display:flex;
@media(max-width:768px){
    
}

`
export const Title =styled.h1`
    margin-top:4.6875rem;
    font-family: Poppins;
    font-weight: 700;
    font-size:1.25rem;
    line-height:1.875rem;
    color:#F9F9F9;
    @media(max-width:768px){
        margin-top: 195px;
        font-size:1.125rem;
    
}
`
export const SubTitle = styled.h1`
    margin-top:14px;
    font-family: Poppins;
    font-weight: 900;
    font-size:4.25rem;
    line-height:4.625rem;
    color:#F9F9F9;
    @media(max-width:768px){
    font-size:45px;
    line-height:60px;
    position:absolute;
    margin-top:-10px;
    
    
}


`
export const Description=styled.p`
margin-top:-34px;
    font-family: Poppins;
    font-weight: 400;
    font-size:1rem;
    line-height:1.75rem;
    color:#F9F9F9;
    @media(max-width:768px){
        margin-top: 120px;
        font-size:9px;
        line-height:1.5625rem;
        position: relative;
       
}
`
export const ButtonNow=styled.button`
width: 14.0625rem;
height:2.8125rem ;
-webkit-transform: skew(-20deg);
   -moz-transform: skew(-20deg);
     -o-transform: skew(-20deg);
     background: #658E76;
     border:none;
     color:white;
     font-family:Poppins;
     font-weight:500;
     font-size:1rem;
     line-height:1.75rem;
     margin-right:25px;
     @media(max-width:768px){
        margin-top: 10px;
}
     
`
export const ButtonTrailer=styled.button`
width: 14.0625rem;
height:2.8125rem ;
-webkit-transform: skew(-20deg);
   -moz-transform: skew(-20deg);
     -o-transform: skew(-20deg);
     background: transparent;
     border:none;
     color:white;
     font-family:Poppins;
     font-weight:500;
     font-size:1rem;
     line-height:1.75rem;
     border: 2px solid #658E76;
     @media(max-width:768px){
   display :none;
}
     
`
export const BoxInfos=styled.div`
margin-left: 10.3125rem;
@media(max-width:768px){
    margin-left:25px
    
    }
`
export const BoxImg=styled.div`
margin-left:150px;
@media(max-width:768px){
    margin-top:-25px;
    margin-left: -280px;
}
`
export const MyImage=styled(image)``
export const BoxButton=styled.div`
display :flex;
`