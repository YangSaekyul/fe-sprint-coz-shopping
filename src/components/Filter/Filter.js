import styled from "styled-components";
import all from "../../assets/Images/all.png";
import product from "../../assets/Images/product.png";
import category from "../../assets/Images/category.png";
import exhibition from "../../assets/Images/exhibition.png";
import brand from "../../assets/Images/brand.png";

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
  border-bottom: 2px solid transparent;

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

function Filter({ setFilterType, filterType }) {
  const handleFilter = (type) => {
    setFilterType(type);
  };

  return (
    <FilterContainer>
      <FilterItem onClick={() => handleFilter("All")}>
        <StyledImage src={all} alt="전체 필터" />
        <StyledSpan className={filterType === "All" ? "focus" : ""}>
          전체
        </StyledSpan>
      </FilterItem>
      <FilterItem onClick={() => handleFilter("Product")}>
        <StyledImage src={product} alt="상품 필터" />
        <StyledSpan className={filterType === "Product" ? "focus" : ""}>
          상품
        </StyledSpan>
      </FilterItem>
      <FilterItem onClick={() => handleFilter("Category")}>
        <StyledImage src={category} alt="카테고리 필터" />
        <StyledSpan className={filterType === "Category" ? "focus" : ""}>
          카테고리
        </StyledSpan>
      </FilterItem>
      <FilterItem onClick={() => handleFilter("Exhibition")}>
        <StyledImage src={exhibition} alt="기획전 필터" />
        <StyledSpan className={filterType === "Exhibition" ? "focus" : ""}>
          기획전
        </StyledSpan>
      </FilterItem>
      <FilterItem onClick={() => handleFilter("Brand")}>
        <StyledImage src={brand} alt="브랜드 필터" />
        <StyledSpan className={filterType === "Brand" ? "focus" : ""}>
          브랜드
        </StyledSpan>
      </FilterItem>
    </FilterContainer>
  );
}

export default Filter;
