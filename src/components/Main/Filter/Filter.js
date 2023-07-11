import styled from "styled-components";
import all from "./all.png";
import product from "./product.png";
import category from "./category.png";
import exhibition from "./exhibition.png";
import brand from "./brand.png";

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSpan = styled.span`
  cursor: pointer;

  &:hover,
  &:active,
  &.focus {
    font-weight: bold;
    color: #6f2dff;
    border-bottom: 2px solid #6f2dff;
  }
`;

const StyledImage = styled.img`
  margin: 10px;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  object-fit: cover; // 이미지가 잘리지 않고 꽉 차게
`;

function Filter() {
  return (
    <FilterContainer>
      <FilterItem>
        <StyledImage src={all} alt="전체 필터" />
        <StyledSpan>전체</StyledSpan>
      </FilterItem>
      <FilterItem>
        <StyledImage src={product} alt="상품 필터" />
        <StyledSpan>상품</StyledSpan>
      </FilterItem>
      <FilterItem>
        <StyledImage src={category} alt="카테고리 필터" />
        <StyledSpan>카테고리</StyledSpan>
      </FilterItem>
      <FilterItem>
        <StyledImage src={exhibition} alt="기획전 필터" />
        <StyledSpan>기획전</StyledSpan>
      </FilterItem>
      <FilterItem>
        <StyledImage src={brand} alt="브랜드 필터" />
        <StyledSpan>브랜드</StyledSpan>
      </FilterItem>
    </FilterContainer>
  );
}

export default Filter;
