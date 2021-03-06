// import { Add, Remove } from "@mui/icons-material";
import styled from '@emotion/styled';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { allproducts} from '../data';
import { useParams } from "react-router";
import Notecontext from "../context/Notecontext";
import { useContext } from "react";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  ${'' /* width: 100%;
  height: 90vh;
  object-fit: cover; */}
    width: 65%;
    object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

// const Filter = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const FilterTitle = styled.span`
//   font-size: 20px;
//   font-weight: 200;
// `;

// const FilterColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
//   margin: 0px 5px;
//   cursor: pointer;
// `;

// const FilterSize = styled.select`
//   margin-left: 10px;
//   padding: 5px;
// `;

// const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

// const Amount = styled.span`
//   width: 30px;
//   height: 30px;
//   border-radius: 10px;
//   border: 1px solid teal;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0px 5px;
// `;



const CartButton = styled.button`
    padding: 15px;
    border: none;
    background-color: ${(props) => props.color};
    cursor: pointer;
    font-weight: 500;
    color: white;
    font-size: 17px;
    border-radius: 3px;
    transition:all 0.3s ease;

  &:hover{
      background-color: ${(props) => props.hovercolor};
  }
`;

const Product = () => {

  let contextdata = useContext(Notecontext);
  let  params  = useParams();

  let item = allproducts.filter((curritem)=>{
      return curritem.id===Number(params.id);
  })


  return (
    <Container>
      <Header />

      <Wrapper>
        <ImgContainer>
          <Image src={item[0].image} alt={item[0].title} />
        </ImgContainer>
        <InfoContainer>
          <Title>{item[0].title}</Title>
          <Desc>
          {item[0].description}
          </Desc>
          <Price>$ {item[0].price}</Price>
          <FilterContainer>
            {/* <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter> */}
            {/* <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter> */}
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              {/* <Remove/>
              <Amount>1</Amount>
              <Add/> */}
            </AmountContainer>
            <CartButton color="#6653f1" hovercolor="#3a2d78" onClick={()=>contextdata.addtocart(item[0])}>ADD TO CART</CartButton>
            <CartButton color="#c976a7" hovercolor="#bc418a" onClick={()=>contextdata.addtowishlist(item[0])}>ADD TO WISHLIST</CartButton>
            
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />

      <Footer />

    </Container>
  );
};

export default Product;
